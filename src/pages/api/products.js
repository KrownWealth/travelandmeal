
import RestaurantsData from "@/components/RestaurantsData";

export default function handler(req, res) {
  res.status(200).json({ restaurants: RestaurantsData });
}
