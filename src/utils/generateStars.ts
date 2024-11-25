export function generateStars(rating: number, maxRating: number = 5): string {
  const filledStars = "⭐️".repeat(rating);
  const emptyStars = "☆".repeat(maxRating - rating);

  return filledStars + emptyStars;
}
