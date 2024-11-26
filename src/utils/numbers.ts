export function formatSubscribersCount(count: number): string {
  if (count < 1000) {
    return count.toString();
  } else if (count < 1000000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  } else {
    return (count / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
}

export function formatPrice(price: {
  value: number;
  currency: string;
  discount?: {
    value: number;
    isPercentage: boolean;
  };
}): string {
  let finalPrice = price.value;

  if (price.discount) {
    if (price.discount.isPercentage) {
      finalPrice = finalPrice * (1 - price.discount.value / 100);
    } else {
      finalPrice -= price.discount.value;
    }
  }

  return finalPrice.toLocaleString("es-MX", {
    style: "currency",
    currency: price.currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
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
