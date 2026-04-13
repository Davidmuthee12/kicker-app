export type PricingPlan = {
  name: string;
  price: string;
  benefits: string[];
  cta: {
    label: string;
    href: string;
  };
  description: string;
  featured?: boolean;
};

export const pricing: PricingPlan[] = [
  {
    name: "Starter",
    price: "$29/mo",
    description: "A simple plan for members building consistency and momentum.",
    benefits: [
      "Gym floor access",
      "2 guided classes per week",
      "Starter workout templates",
    ],
    cta: {
      label: "Start Starter Plan",
      href: "/register",
    },
  },
  {
    name: "Performance",
    price: "$59/mo",
    description: "For members who want structure, progression, and accountability.",
    benefits: [
      "Unlimited gym access",
      "Weekly trainer check-ins",
      "Personalized workout adjustments",
      "Priority class booking",
    ],
    cta: {
      label: "Choose Performance",
      href: "/register",
    },
    featured: true,
  },
  {
    name: "Elite",
    price: "$99/mo",
    description: "A higher-touch experience for serious transformation goals.",
    benefits: [
      "Everything in Performance",
      "Dedicated coach support",
      "Nutrition guidance",
      "Monthly progress review",
    ],
    cta: {
      label: "Join Elite",
      href: "/contact",
    },
  },
];
