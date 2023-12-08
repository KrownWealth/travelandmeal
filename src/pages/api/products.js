import { Restaurants } from "@/components/RestaurantsData"

export default function handler(req, res) {
  res.status(200).json({ Restaurants });
}
