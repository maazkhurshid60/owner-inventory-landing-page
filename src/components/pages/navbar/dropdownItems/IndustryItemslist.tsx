import { title } from "process";

export interface IndustryItem {
  key: string,
  title: string;
  icon: string;
}

export const industriesItems: IndustryItem[] = [
  // Group 1: Retail & Ecommerce (with subcategories)
  { key: 'retail', title: 'Retail & Ecommerce', icon:"/assets/header-dropdown-images/industries-dropdown/retail-ecommerce.svg" },

  // Group 2: Restaurant Types (with subcategories)
  { key: 'restaurant', title: 'Restaurant Types', icon: "/assets/header-dropdown-images/industries-dropdown/restaurant-types.svg" },

 

  // Group 4: Large Businesses (no subcategories)
  {key: 'largebusinesses', title:'Large Businesses', icon: "/assets/header-dropdown-images/industries-dropdown/large-bussiness.svg"},
  { key: 'wholesale', title: 'Wholesale', icon: "/assets/header-dropdown-images/industries-dropdown/wholesale.svg"  },
  { key: 'manufacturing', title: 'Manufacturing', icon: "/assets/header-dropdown-images/industries-dropdown/manufacturing.svg"},
  { key: 'distribution', title: 'Distribution', icon: "/assets/header-dropdown-images/industries-dropdown/distribution.svg" },
];

export interface IndustryTreeItem {
  title: string;
  children?: IndustryTreeItem[];
}

export const industryDetailsMap: Record<string, IndustryTreeItem[]> = {
  retail: [
    { title: 'Health and Beauty' },
    { title: 'Clothing' },
    { title: 'Home décor' },
    { title: 'Grocery' },
    { title: 'Jewelry' },
    { title: 'Pet' },
    { title: 'Sporting Goods' },
    { title: 'Toy' },
    { title: 'Vape' },
    { title: 'Multi-store' },
  ],
  restaurant: [
    { title: 'Full Service Restaurant' },
    { title: 'Fine Dining' },
    { title: 'Family Style' },
    { title: 'Quick Service Restaurant' },
    { title: 'Café' },
    { title: 'Hotel' },
    { title: 'Fast Casual' },
    {
      title: 'Bar & Club',
      
    },
     { title: 'Multi Unit' },
  ],
};


export const IndustryList = ({ items }: { items: IndustryTreeItem[] }) => (
  <ul className="pl-4 space-y-1">
    {items.map((item) => (
      <li key={item.title}>
        <a
          href="#"
          className="text-xs font-normal leading-7 text-[#231F20]  hover:text-gray-400"
        >
          {item.title}
        </a>
        {item.children && <IndustryList items={item.children} />}
      </li>
    ))}
  </ul>
);
