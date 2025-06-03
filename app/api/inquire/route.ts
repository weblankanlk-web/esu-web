import redis from "@/lib/redis";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const inquiryData = await req.json();

  try {
    const response = await fetch(
      "https://publicapi.esoft.lk/api/v1/inquiries",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
        body: JSON.stringify(inquiryData),
      }
    );

    if (response.ok) {
      return new Response(JSON.stringify({ status: "success" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      const data = await response.json();
      console.log("API Error:", data);
      if (data.message === "Too Many Attempts.") {
        // Queue the request
        await redis.rpush("inquiry_queue", JSON.stringify(inquiryData));
        return new Response(
          JSON.stringify({ status: "queued", reason: "Rate limit hit" }),
          { status: 202, headers: { "Content-Type": "application/json" } }
        );
      } else {
        return new Response(
          JSON.stringify({ error: "API error", details: data }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }
    }
  } catch (error) {
    await redis.rpush("inquiry_queue", JSON.stringify(inquiryData));
    return new Response(
      JSON.stringify({ error: "Network error", backup: "queued" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
