export interface StatCard {
  label: string
  value: number
  changePercentage: number
  trend: "up" | "down" | "neutral"
}
