import { FeatureCategory, PricingPlan } from './types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 0,
    yearlyPrice: 0,
     description: '2 users',
    color: '#1AD1B9',
    bgColor: 'rgba(26,209,185,0.1)',
    features: [
      '2 users',
      'Human Resource',
      'Single Location',
      'Single Warehouse',
      '100 Products',
      'Advance Point of Sales',
      '100 Invoices / Month',
      '50 Purchase Orders / Month',
      '100 Transfer Orders / Month',
      'Online Store',
      'Coupons',
      'Basic Accounts & Financials'
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 49,
    yearlyPrice: 44, // 10% off
    description: '5 users',
    color: '#38ACCC',
    bgColor: 'rgba(56,172,204,0.1)',
    features: [
      '5 users',
      'Human Resource',
      '02 Locations',
      '02 Warehouse',
      'Unlimited Products',
      'Advance Point of Sales',
      '700 Invoices / Month',
      '500 Purchase Orders / Month',
      '700 Transfer Orders / Month',
      'Online Store',
      'Coupons',
      'Basic Accounts & Financials'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 99,
    yearlyPrice: 89, // 10% off
    description: '10 users',
    color: '#5588DF',
    bgColor: 'rgba(85,136,223,0.1)',
    features: [
      '10 users',
      'Human Resource',
      '04 Locations',
      '03 Warehouse',
      'Unlimited Products',
      'Advance Point of Sales',
      '3000 Invoices / Month',
      '1500 Purchase Orders / Month',
      '3000 Transfer Orders / Month',
      'Online Store',
      'Coupons',
      'Loyality',
      'Production Orders',
      'Machines',
      'Advance Accounts & Financials'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 199,
    yearlyPrice: 179, // 10% off
     description: 'Unlimited users',
    color: '#795CF5',
    bgColor: 'rgba(121,92,245,0.1)',
    features: [
      'Unlimited users',
      'Human Resource',
      '06 Locations',
      '04 Warehouse',
      'Unlimited Products',
      'Advance Point of Sales',
      '9500 Invoices / Month',
      '5000 Purchase Orders / Month',
      '7500 Transfer Orders / Month',
      'Online Store',
      'Coupons',
      'Loyality',
      'Production Orders',
      'Machines',
      'Advance Accounts & Financials'
    ]
  }
];

export const featureCategories: FeatureCategory[] = [
  {
    name: 'People',
    features: [
      { name: 'Users', info: true, infoText: "Add team members and control their access with roles.", basic: '2', standard: '5', professional: '10', premium: 'Unlimited' },
      { name: 'Customers', info: true, infoText: "Manage customer records and order history in one place.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
      { name: 'Suppliers', info: true, infoText: "Track and manage all vendors efficiently.", basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' }
    ]
  },
  {
    name: 'Human Resources',
    features: [
      { name: 'Departments', info: true, infoText: "Structure your team by function.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Designations', info: true, infoText: "Assign job titles to define staff roles and permissions.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Payslips', info: true, infoText: "Generate payroll slips with salary and deduction details.", basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Facilities',
    features: [
      { name: 'Locations', info: true, infoText: "Manage multiple business or store locations seamlessly.", basic: '1', standard: '2', professional: '4', premium: '6' },
      { name: 'Warehouses', info: true, infoText: "Manage one or more warehouses.", basic: '1', standard: '2', professional: '3', premium: '4' }
    ]
  },
  {
    name: 'Restaurant',
    features: [
      { name: 'Floors', info: true, infoText: "Structure your dining space with floor-level mapping for efficient table management.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Tables', info: true, infoText: "Assign and manage tables for restaurant service.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Decorations', info: true, infoText: "Customize your digital floor layout for ambiance.", basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Products',
    features: [
      { name: 'Products', info: true, infoText: "Add and manage all your products from a central place.", basic: '100', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
      { name: 'Categories', info: true, infoText: "Group products into categories for easier filtering.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Brands', info: true, infoText: "Assign brand names to products for better cataloging.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Barcode & Serial Tracking', info: true, infoText: "Track products using barcodes or serial numbers for accuracy.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Product Images', info: true, infoText: "Add images to improve visual product recognition.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Bulk Products Import', info: true, infoText: "Quickly upload multiple products via spreadsheet.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Bulk Price Update', info: true, infoText: "Change pricing for many products at once.", basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Sales & Orders',
    features: [
      { name: 'Point of Sale', info: true, infoText: "Sell products directly with an intuitive POS system.", basic: 'Advance', standard: 'Advance', professional: 'Advance', premium: 'Advance' },
      { name: 'POS Terminals', info: true, infoText: "Set up physical POS stations for cashier use. Hardware is not included.", basic: '2', standard: '5', professional: '10', premium: '15' },
      { name: 'Invoices', info: true, infoText: " Print & Share/Send professional invoices to customers with ease.", basic: '100/month', standard: '700/month', professional: '3,000/month', premium: '9,500/month' },
      { name: 'Quotations', info: true, infoText: "Prepare and send quotes to leads or existing customers.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Sales Orders', info: true, infoText: "Track confirmed customer orders.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Sales Return', info: true, infoText: " Handle post-sale returns and credit notes – while keeping your sales and inventory records in perfect sync.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Hold Sales', info: true, infoText: "Pause sales temporarily and resume them later.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Sample Sales', info: true, infoText: "Record and track sample product distribution.", basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Purchases',
    features: [
      { name: 'Purchase Orders', info: true, infoText: " Create and track orders placed to suppliers.", basic: '50/month', standard: '500/month', professional: '1,500/month', premium: '5,000/month' },
      { name: 'Bulk Purchase', info: true, infoText: "Simplify restocking with one-step bulk purchasing for any item mix.", basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Inventory Operations',
    features: [
      { name: 'Transfer Orders', info: true, infoText: "Move stock between warehouses or store locations.", basic: '100/month', standard: '700/month', professional: '3,000/month', premium: '7,500/month' },
      { name: 'Stock Issuing', info: true, infoText: "Log and monitor inventory released for internal use or sales.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Stock Receiving', info: true, infoText: "Log incoming goods into inventory.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Stock Adjustments', info: true, infoText: "Make real-time adjustments to product stock levels from one unified view.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Bulk Import Open Stock', info: true, infoText: "Add initial stock quantities quickly in bulk.", basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Ecommerce',
    features: [
      { name: 'Online Store', info: true, infoText: "Launch your own branded e-commerce website and custom-developed templates will be billed separately.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Templates & Themes', info: true, infoText: "Customize your website's appearance with pre-built and custom-developed templates.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Orders', info: true, infoText: "Monitor and fulfill orders – placed online.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Discounts', info: true, infoText: "Apply promotional price reductions to products.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Domains', info: true, infoText: "Manage customer records and order history in one place.", basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Marketing',
    features: [
      { name: 'Coupons', info: true, infoText: "Create promo codes for discounts or deals.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Loyalty', info: true, infoText: "Reward repeat buyers with points or perks.", basic: false, standard: false, professional: true, premium: true }
    ]
  },
  {
    name: 'Manufacturing',
    features: [
      { name: 'Production Orders', info: true, infoText: "Manage the end-to-end production of goods.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Machines', info: true, infoText: "Manage your machinery from one centralized place.", basic: false, standard: false, professional: true, premium: true }
    ]
  },
  {
    name: 'Accounting & Financial',
    features: [
      { name: 'Income & Expense', info: true, infoText: "Monitor revenue and spending effortlessly.", basic: 'Basic', standard: 'Basic', professional: 'Advance', premium: 'Advance' },
      { name: 'Billing & Payments', info: true, infoText: "Automate invoices, payments & bill tracking.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Payables & Receivables', info: true, infoText: "Ensures smooth cash flow—critical for businesses.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Financial Insights & Reports', info: true, infoText: "Gain powerful reports & business analytics.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Balance Sheet & Trial Balance', info: true, infoText: "Summarizes financial health—important for compliance.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Chart of Accounts', info: true, infoText: "Supports structured financial management—essential for accountants.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Journal Entries & Reports', info: true, infoText: "Detailed financial transaction recording—used by finance teams.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Fixed Assets & Allocations', info: true, infoText: "Long-term asset management—more relevant for established businesses.", basic: false, standard: false, professional: true, premium: true }
    ]
  },
  {
    name: 'Analytics',
    features: [
      { name: 'Standard Reports', info: true, infoText: "Access essential business performance metrics.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Shift & Commission Reports', info: true, infoText: "Monitor employee shifts and their earned commissions.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Daily & Monthly Cash Reports', info: true, infoText: "Track cash flow daily or monthly for better control.", basic: false, standard: true, professional: true, premium: true },
      { name: 'Advanced Reports', info: true, infoText: " Get real-time insights into sales, profits, and inventory performance—including how long products have remained unsold in your stores.", basic: false, standard: false, professional: true, premium: true }
    ]
  },
  {
    name: 'General Tools',
    features: [
      { name: 'Role-Based Access', info: true, infoText: "Limit user access based on job roles and responsibilities.", basic: false, standard: false, professional: false, premium: true },
      { name: 'Notifications', info: true, infoText: "Automatically receive updates for stock movements, sales, and purchases.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Stock Alerts', info: true, infoText: "Get notified when stock runs low or is out.", basic: false, standard: false, professional: false, premium: true },
      { name: 'Activity Log', info: true, infoText: "View recent user actions and changes.", basic: false, standard: false, professional: false, premium: true },
      { name: 'Automations', info: true, infoText: "Set up workflow automations to save time.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' }
    ]
  },
  {
    name: 'Integration',
    features: [
      { name: 'API Calls/Day', info: false, infoText: "Number of staff or employees you can add as system users.", basic: '500/day', standard: '5,000/day', professional: '10,000/day', premium: '20,000/day' },
      { name: 'Stripe', info: false, infoText: "Number of staff or employees you can add as system users.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
      { name: 'PayPal', info: false, infoText: "Number of staff or employees you can add as system users.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
      { name: 'DHL', info: false, infoText: "Number of staff or employees you can add as system users.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
      { name: 'Leopard', info: false, infoText: "Number of staff or employees you can add as system users.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
      { name: 'Zapier', info: false, infoText: "Number of staff or employees you can add as system users.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
      { name: 'Make', info: false, infoText: "Number of staff or employees you can add as system users.", basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' }
    ]
  },
  {
    name: 'Support',
    features: [
      { name: 'Onboarding Assistance', info: true, infoText: "We walk you through everything—store settings, inventory, and integrations.", basic: 'Basic Guide Included', standard: 'Standard Walkthrough', professional: 'Standard Walkthrough + 2 Sessions', premium: 'Advanced Setup + 5 Sessions' },
      { name: 'Email Support', info: true, infoText: "Reach our support team via email.", basic: true, standard: true, professional: true, premium: true },
      { name: 'Live Chat Support', info: true, infoText: "Chat with our team for quick, real-time help.", basic: false, standard: true, professional: true, premium: true },
      { name: 'Phone Support', info: true, infoText: "Call us directly for urgent support needs.", basic: false, standard: false, professional: true, premium: true },
      { name: 'Dedicated Account Manager', info: true, infoText: "Get personalized service for your business.", basic: false, standard: false, professional: false, premium: true }
    ]
  }
];
