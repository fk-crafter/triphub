import { Destination } from "@/types";

export const LogosCarouselData = [
  { name: "Air France", src: "/images/airfrance.png" },
  { name: "Japan Air", src: "/images/japanair.png" },
  { name: "Royal Air", src: "/images/royalair.png" },
  { name: "Malay Air", src: "/images/malayair.png" },
  { name: "Qatar Air", src: "/images/qatarair.png" },
  { name: "Thai Air", src: "/images/thaiair.png" },
];

export const destinations: Destination[] = [
  {
    name: "Paris",
    imageUrl: "/images/paris.jpg",
    coordinates: [48.8566, 2.3522],
    prices: { flight: 250, flightAndHotel: 600, flightHotelActivity: 850 },
  },
  {
    name: "New York",
    imageUrl: "/images/ny.jpg",
    coordinates: [40.7128, -74.006],
    prices: { flight: 400, flightAndHotel: 800, flightHotelActivity: 1100 },
  },
  {
    name: "Tokyo",
    imageUrl: "/images/tokyo.jpg",
    coordinates: [35.6895, 139.6917],
    prices: { flight: 600, flightAndHotel: 1000, flightHotelActivity: 1300 },
  },
  {
    name: "Rome",
    imageUrl: "/images/rome.png",
    coordinates: [41.9028, 12.4964],
    prices: { flight: 200, flightAndHotel: 500, flightHotelActivity: 750 },
  },
  {
    name: "Bangkok",
    imageUrl: "/images/bk.jpg",
    coordinates: [13.7563, 100.5018],
    prices: { flight: 700, flightAndHotel: 900, flightHotelActivity: 1200 },
  },
  {
    name: "Kuala Lumpur",
    imageUrl: "/images/kl.jpg",
    coordinates: [3.139, 101.6869],
    prices: { flight: 650, flightAndHotel: 850, flightHotelActivity: 1100 },
  },
  {
    name: "Casablanca",
    imageUrl: "/images/casablanca.jpg",
    coordinates: [33.5731, -7.5898],
    prices: { flight: 300, flightAndHotel: 500, flightHotelActivity: 700 },
  },
  {
    name: "Tirana",
    imageUrl: "/images/tirana.jpg",
    coordinates: [41.3275, 19.8187],
    prices: { flight: 250, flightAndHotel: 400, flightHotelActivity: 600 },
  },
  {
    name: "Dubai",
    imageUrl: "/images/dubai.jpg",
    coordinates: [25.2048, 55.2708],
    prices: { flight: 500, flightAndHotel: 800, flightHotelActivity: 1100 },
  },
  {
    name: "Los Angeles",
    imageUrl: "/images/la.jpg",
    coordinates: [34.0522, -118.2437],
    prices: { flight: 550, flightAndHotel: 900, flightHotelActivity: 1300 },
  },
  {
    name: "Sydney",
    imageUrl: "/images/sydney.jpg",
    coordinates: [-33.8688, 151.2093],
    prices: { flight: 600, flightAndHotel: 950, flightHotelActivity: 1200 },
  },
  {
    name: "Rio de Janeiro",
    imageUrl: "/images/rio.jpg",
    coordinates: [-22.9068, -43.1729],
    prices: { flight: 700, flightAndHotel: 1000, flightHotelActivity: 1400 },
  },
  {
    name: "Cape Town",
    imageUrl: "/images/capetown.jpg",
    coordinates: [-33.9249, 18.4241],
    prices: { flight: 500, flightAndHotel: 850, flightHotelActivity: 1200 },
  },
  {
    name: "Hong Kong",
    imageUrl: "/images/hk.jpg",
    coordinates: [22.3193, 114.1694],
    prices: { flight: 550, flightAndHotel: 800, flightHotelActivity: 1100 },
  },
  {
    name: "London",
    imageUrl: "/images/london.jpg",
    coordinates: [51.5074, -0.1278],
    prices: { flight: 300, flightAndHotel: 700, flightHotelActivity: 900 },
  },
  {
    name: "Barcelona",
    imageUrl: "/images/barcelona.jpg",
    coordinates: [41.3851, 2.1734],
    prices: { flight: 350, flightAndHotel: 750, flightHotelActivity: 950 },
  },
  {
    name: "Istanbul",
    imageUrl: "/images/istanbul.jpg",
    coordinates: [41.0082, 28.9784],
    prices: { flight: 400, flightAndHotel: 800, flightHotelActivity: 1100 },
  },
  {
    name: "Moscow",
    imageUrl: "/images/moscow.jpg",
    coordinates: [55.7558, 37.6173],
    prices: { flight: 500, flightAndHotel: 850, flightHotelActivity: 1150 },
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Business Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];
