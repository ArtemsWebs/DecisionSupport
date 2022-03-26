export function castToNumber(value: string | number | null) {
  if (isNaN(Number(value))) return;
  return Number(value);
}
