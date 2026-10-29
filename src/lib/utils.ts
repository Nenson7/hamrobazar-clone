import type { ItemCard } from "./types";

// 1. Small helper to get a random number between a min and max
function randomRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 2. Small helper to pick a random item from any array
function getRandomItem<T>(arr: T[]): T {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

export function generate_items(): ItemCard[] {
  const items: ItemCard[] = [];

  // Sample pools to mix and match from
  const sampleNames = [
    "Vintage Leather Jacket",
    "Mechanical Keyboard",
    "Ceramic Coffee Mug",
    "Wireless Headphones",
    "Running Shoes",
    "Minimalist Backpack",
    "Desk Lamp",
    "Polaroid Camera",
    "Smart Watch",
    "Cotton Hoodie"
  ];

  const sampleSellers = [
    { name: "RetroFinds", is_verified: true },
    { name: "UrbanTrader", is_verified: false },
    { name: "QuickShop_Official", is_verified: true },
    { name: "CuratedGoods", is_verified: false },
    { name: "EcoMarket", is_verified: true }
  ];

  const sampleConditions = ["Brand New", "Like New", "Good", "Fair"];

  // Placeholder images (using picsum.photos for quick random images)
  const sampleImages = [
    "https://picsum.photos/seed/item1/400/400",
    "https://picsum.photos/seed/item2/400/400",
    "https://picsum.photos/seed/item3/400/400",
    "https://picsum.photos/seed/item4/400/400"
  ];

  // Loop 20 times to generate 20 items
  for (let i = 0; i < 20; i++) {
    const newItem: ItemCard = {
      // Pick 1 to 3 random images for the item's images array
      images: [
        getRandomItem(sampleImages),
        getRandomItem(sampleImages)
      ],
      name: `${getRandomItem(sampleNames)} #${i + 1}`,
      price: randomRange(10, 250), // Random price between $10 and $250
      seller: getRandomItem(sampleSellers),
      condition: getRandomItem(sampleConditions)
    };

    items.push(newItem);
  }

  return items;
}
