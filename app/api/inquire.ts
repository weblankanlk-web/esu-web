import type { NextApiRequest, NextApiHandler, NextApiResponse } from "next";
import redis from "@/lib/redis";
import { error } from "console";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method Not Allowed" });

  const inquiryData = req.body;

  try {
    const response = await fetch(
      "https://publicapi.esoft.lk/api/v1/inquiries",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.ESOFT_API_TOKEN}`,
        },
        body: JSON.stringify(inquiryData),
      }
    );

    if (response.ok) {
      return res.status(200).json({ status: "success" });
    } else {
      const data = await response.json();
      if (data.message === "Too Many Attempts.") {
        // Queue the request
        await redis.rpush("inquiry_queue", JSON.stringify(inquiryData));
        return res
          .status(202)
          .json({ status: "queued", reason: "Rate limit hit" });
      } else {
        return res.status(500).json({ error: "API error", details: data });
      }
    }
  } catch (error) {
    await redis.rpush("inquiry_queue", JSON.stringify(inquiryData));
    return res.status(500).json({ error: "Network error", backup: "queued" });
  }
}
