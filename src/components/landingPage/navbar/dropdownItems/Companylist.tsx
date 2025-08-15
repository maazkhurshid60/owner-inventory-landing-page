export interface CompanyItem {
  title: string;
  icon: string;
}

export const companyItems: CompanyItem[] = [
  {
    title: 'About Us',
    icon: '/assets/header-dropdown-images/company-dropdown/about.svg',
  },
  {
    title: 'Testimonials',
    icon: '/assets/header-dropdown-images/company-dropdown/testimonial.svg',
  },
  {
    title: 'News',
    icon: '/assets/header-dropdown-images/company-dropdown/news.svg',
  },
  {
    title: 'Referrals',
    icon: '/assets/header-dropdown-images/company-dropdown/referals.svg',
  },
  {
    title: 'Partner Program',
    icon: '/assets/header-dropdown-images/company-dropdown/testimonial.svg', // You may want to double-check this — the icon is reused from "Testimonials"
  },
];
