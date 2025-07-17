import { Compass, CreditCard, HomeIcon, PlusCircle, } from "lucide-react";

export const navMain= [
    {
      title: "Home",
      url: "/dashboard",
      icon: HomeIcon,
    },
    {
      title: "Create Video",
      url: "/share",
      icon: PlusCircle,
    },
    {
      title: "Explore",
      url: "/template",
      icon: Compass,
    },
    {
      title: "Billing",
      url: "/trash",
      icon: CreditCard,
    },
  ]

  export const suggestions = [
  "AI Tools",
  "Tech Reviews",
  "Travel Hacks",
  "Mindset Shift",
  "Crypto News",
  "Fitness Tips",
  "Startup Ideas",
  "Book Summary",
  "Career Growth",
  "Design Trends"
];

export const genStyle = [
  { name: 'Cinematic', image: '/2.jpg' },
  { name: 'Anime', image: '/4.jpg' },
  { name: 'Sketch', image: '/17.jpg' },
  { name: 'Watercolor', image: '/11.jpg' },
  { name: 'Cyberpunk', image: '/14.jpg' },
  { name: 'Fantasy', image: '/16.jpg' },
  { name: 'Pixel Art', image: '/15.jpg' },
];
