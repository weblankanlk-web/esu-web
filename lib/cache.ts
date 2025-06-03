// import redis from "./redis";

// export async function getCachedData<T>(
//   key: string,
//   fetcher: () => Promise<T>,
//   ttlSeconds: number = 60,
//   force: boolean = false
// ): Promise<T> {
//   if (!force) {
//     const cached = await redis.get(key);
//     if (cached) return JSON.parse(cached);
//   }

//   const fresh = await fetcher();
//   await redis.set(key, JSON.stringify(fresh), "EX", ttlSeconds);

//   return fresh;
// }

import redis from "./redis";

export async function getOrSetCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttlSeconds = 3600
): Promise<T> {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);
  const fresh = await fetcher();
  await redis.set(key, JSON.stringify(fresh), "EX", ttlSeconds);
  return fresh;
}
