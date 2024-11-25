import { API_URL_SENDY, API_KEY_SENDY } from "astro:env/client";

let cachedSubscriberCount: string | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 1000 * 60 * 5;
export const fetchActiveSubscriberCount = async (
  listIdSendy: string
): Promise<string> => {
  const now = Date.now();

  if (
    cachedSubscriberCount &&
    cacheTimestamp &&
    now - cacheTimestamp < CACHE_DURATION
  ) {
    return cachedSubscriberCount;
  }

  const url = `${API_URL_SENDY}/api/subscribers/active-subscriber-count.php`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      api_key: API_KEY_SENDY,
      list_id: listIdSendy,
    }),
  });

  const subscriberCount = await response.text();

  cachedSubscriberCount = subscriberCount;
  cacheTimestamp = now;

  return subscriberCount;
};
