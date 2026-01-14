import { Product, Feature } from './types';

export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuDUpV-xdq6E7TUd4CdtVkKaLrjOwpBcm5oZq6sV09YFvSoEnP6c1atBa3f_0-w25Gx5UlHiTC8YuCMZaHFdVGX3lHDlSUUWxTCzUc-Mb6scpxQp7twg1gaYm0Ojujt5KFwJDz7b-TLGcIgi5IPbImssdQGJoJ0pSJ1bhkDWJL9nObdaiz1znNA2Q2MzpOVFgDHZlXjWh0TuzFUZxD5dU8zUkHGtFfDCeFqXuAuNR2NLVTt2VvOnF50tAQUrFh-BBSruhMddM4NSLzQ";
export const NEWSLETTER_BG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDB2tTtaKsk7A7K6KnKsxkBhm-h1i9XzytCJVmfhZZw1QnKrrWst4DrNWM62_DRnsPlQUmysuzRZAUyfHhy2O7PtR-1jYVK_yKTz7uHD7lEUR2tMRnUBWogE3tPfw7LjfPGwaDurAICuDEH_EwS-mzEvWkrX_1zrM9Rm9PEDUstmFOr7s0uLoRxrACRmHY1oQ4TCwXB6QxD7kKJm0Vr09iuSigPOSiPZ05Bl_GjdkbqGKTB5swK0s_VWHFtiOZ7Zxq5Zp5z44S5yFI";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Signature Blend",
    price: 18.00,
    description: "Dark chocolate, molasses, and a hint of cherry. Our boldest roast.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8BEcFiE138yEoTUd2cMslQWM36E-UoGMq_uConzIfgrUiYcZbAUGg-pvrYIZwRMKFAejD41q9vZOFarhzbgJ5ahqhjDAAokPLq1wk1WzVW6AXNqxS8d23triy_KjlzpD90p2zjrpYDfwZC1q6mUqU2dGHQ1cwy9RT4AZPzXKvU5tmxFD0xzj-d_H8Yov0yCm8Q9XJq5Eh6bDS8kJbyaMbzZy07D-6u72gfka-XMYAwkJCtA0S3AII_B1h8tyskPPyz5x0k3t7Nqs",
    roastLevel: "Dark",
    origin: "Blend",
    isBestSeller: true
  },
  {
    id: 2,
    name: "Ethiopian Yirgacheffe",
    price: 22.00,
    description: "Floral notes with bright citrus acidity and a tea-like body.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqUJWfznWcg89DonNiheb5bfBgoKOc5X2kDxH8sr5Bb6Oo8AAAXSmPJ3ZyzISSK5Qc1N1fRoH3YN9MbNGHJT6TE1FIGLpAY0LoovRIsoCPhNHo0qYXb7zIZnVSVn31Bup6T_wlAqKnpQGrxYl9Xn9DD8S_y2mipWlPSMBbYhjj1WKDEHItavLDzuc13lTiazC5mmKYPFcJdqDrpFkgT2t2KcUs1igHX_n7qxAZxq8gzkfXyeLzWD48kXlS61qbc2EB_CY02PskEO8",
    roastLevel: "Light",
    origin: "Ethiopia"
  },
  {
    id: 3,
    name: "Colombia Supremo",
    price: 19.50,
    description: "Caramel sweetness, nutty undertones, and a smooth finish.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCVGkDV7UWNKAuJmeHW54D-mUP4vcx2LVHbK9ueikV6dwAYQajVpGHzV3YYfobNYY5eh7M85Uh9t2j0rKk7RQ0dmMNlN3a8B8quxWW8-kKI6SqHvNjWQr0Zt7-dPX6cZq7l4vu1itYprf67IjLeF0bd6vJsr4xN1UpSReQRC9FxEFJ09lJKtU5Pb6bUzXBZOYgLkknZYGxWtUX8cshT-qw00gAlAwPZDfAEtJyKMppwkXFNSCp0OsUNc7-0VNY2rk-2k0K6qH6c9k",
    roastLevel: "Medium",
    origin: "Colombia"
  }
];

export const FEATURES: Feature[] = [
  {
    title: "Single Origin",
    description: "Sourced from specific micro-lots to ensure distinct, uncompromised flavor profiles from the world's best regions.",
    icon: "public"
  },
  {
    title: "Small Batch",
    description: "Roasted daily in limited quantities to guarantee maximum freshness and perfect development of flavor.",
    icon: "local_fire_department"
  },
  {
    title: "Direct Trade",
    description: "Building sustainable relationships with farmers to ensure fair wages and exceptional bean quality.",
    icon: "handshake"
  }
];