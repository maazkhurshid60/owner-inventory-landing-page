export interface PricingPlan {
  id: string;
  name: string;
  price: number;
   description?: string,
  yearlyPrice?: number;
  color: string;
  bgColor: string;
  features: string[];
  popular?: boolean;
}

export interface FeatureRow {
  name: string;
  info?: boolean;
  infoText?: string;
  basic: string | boolean;
  standard: string | boolean;
  professional: string | boolean;
  premium: string | boolean;
}

export interface FeatureCategory {
  name: string;
  features: FeatureRow[];
}

export interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export interface DropdownItem {
  icon: string;
  label: string;
  href: string;
}

export interface NavigationGroup {
  title: string;
  items: DropdownItem[];
  rightColumn?: {
    title: string;
    links: { label: string; href: string }[];
  };
}
