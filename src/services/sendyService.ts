import { API_URL_SENDY, API_KEY_SENDY, LIST_ID_SENDY } from "astro:env/client";
export const fetchActiveSubscriberCount = async (): Promise<string> => {
  const url = `${API_URL_SENDY}/api/subscribers/active-subscriber-count.php`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      api_key: API_KEY_SENDY,
      list_id: LIST_ID_SENDY,
    }),
  });

  return response.text();
};
