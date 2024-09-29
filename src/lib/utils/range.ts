export function range(start: number, stop: number) {
  return [...new Array(stop - start)].map((_, i) => i + start)
}
