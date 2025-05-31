import type { NextApiRequest, NextApiHandler, NextApiResponse } from "next";
import redis from "@/lib/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method Not Allowed" });

  const maxRequestPerRun = 20;
  let processed = 0;
  let success = 0;
  let failed = 0;

  for (let i = 0; i < maxRequestPerRun; i++) {
    const data = await redis.lpop("inquiry_queue");

    if (!data) break;

    const inquiry = JSON.parse(data);

    const response = await fetch(
      "https://publicapi.esoft.lk/api/v1/inquiries",
      {
        method: "POST",
        headers: {
          "Content-Type": "applicatin/json",
          Authorization: `Bearer ${process.env.ESOFT_API_TOKEN}`,
        },
        body: JSON.stringify(inquiry),
      }
    );

    if (response.ok) {
      success++;
    } else {
      failed++;
      await redis.rpush("inquiry_queue", JSON.stringify(inquiry));
    }
    processed++;
  }

  return res.status(200).json({ processed, success, failed });
}
