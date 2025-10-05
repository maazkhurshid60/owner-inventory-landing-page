"use client";

import FeatureCard2 from "./FeaturedCard2";


const features = [
  {
    title: "Ecommerce - Sell Anywhere, Anytime.",
    description:
      "Seamlessly connect your inventory with online stores and marketplaces. Manage stock, sync products, and process orders across multiple sales channels — all from one unified platform.",
    videoSrc:
      "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/E-commerce.webm",
    buttonLabel: "View Details",
    buttonHref: "#",
    buttonColor: "#795CF5",
    containerWidth: "100%",
    containerHeight: "420px",
    containerBorderColor: "#ffffff",
    containerBackgroundColor: "rgba(255,255,255,0.4)",
    containerShadow: true,
    scale: 1.05,
  },
  {
    title: "Marketing Tools - Promote, Engage & Grow.",
    description:
      "Owners Inventory brings together everything you need to manage, track, and grow your business in one unified platform. Explore our powerful features, categorized to help you run operations smoothly, manage people efficiently, and scale with confidence.",
    videoSrc:
      "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/marketing-tools.webm",
    buttonLabel: "View Details",
    buttonHref: "#",
    buttonColor: "#1AD1B9",
    containerWidth: "100%",
    containerHeight: "100%",
    containerBorderColor: "#ffffff",
    containerBackgroundColor: "rgba(255,255,255,0.4)",
    containerShadow: true,
    scale: 1.15,
  },
  {
    title: "Restaurant Operations Simplified",
    description:
      "Streamline menus, tables, and kitchen orders with a POS built for restaurants, cafés, and food chains. Serve faster, reduce errors, and keep customers satisfied.",
    videoSrc:
      "https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/restaurant-operations.webm",
    buttonLabel: "View Details",
    buttonHref: "#",
    buttonColor: "#795CF5",
    containerWidth: "100%",
    containerHeight: "420px",
    containerBorderColor: "transparent",
    containerBackgroundColor: "transparent",
    containerShadow: false,
    scale: 1.5,
  },
];

export default function FeaturesssSection() {
  return (
    <section className="wrapper">
      {features.map((feature, index) => (
        <FeatureCard2 key={index} index={index} {...feature} />
      ))}
    </section>
  );
}
