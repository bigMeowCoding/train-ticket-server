export default function (dayAfter: string): string {
  if (!dayAfter) {
    return "";
  }
  return dayAfter.slice(1);
}
