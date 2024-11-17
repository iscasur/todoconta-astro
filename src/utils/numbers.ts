export function formatSubscribersCount(count: number): string {
  if (count < 1000) {
    return count.toString();
  } else if (count < 1000000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  } else {
    return (count / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
}

export async function getFormattedSubscribersCount(
  value: Promise<string>
): Promise<string | null> {
  try {
    const count = await value;
    const countNumber = parseInt(count, 10);
    return formatSubscribersCount(countNumber);
  } catch (e) {
    console.error("Error resolving promise", e);
    return null;
  }
}
