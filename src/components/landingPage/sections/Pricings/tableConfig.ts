import { FeatureCategory, PricingPlan } from './types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 0,
    yearlyPrice: 0,
    description: '2 users / month',
    color: '#1AD1B9',
    bgColor: 'rgba(26,209,185,0.1)',
    features: [
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
    description: '5 users / month',
    color: '#38ACCC',
    bgColor: 'rgba(56,172,204,0.1)',
    features: [
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
    description: '10 users / month',
    color: '#5588DF',
    bgColor: 'rgba(85,136,223,0.1)',
    features: [
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
    description: 'Unlimited users / month',
    color: '#795CF5',
    bgColor: 'rgba(121,92,245,0.1)',
    features: [
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
      { name: 'Users', info: true, basic: '2', standard: '5', professional: '10', premium: 'Unlimited' },
      { name: 'Customers', info: true, basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
      { name: 'Suppliers', info: true, basic: 'Unlimited', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' }
    ]
  },
  {
    name: 'Human Resources',
    features: [
      { name: 'Departments', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Designations', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Payslips', info: true, basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Facilities',
    features: [
      { name: 'Locations', info: true, basic: '1', standard: '2', professional: '4', premium: '6' },
      { name: 'Warehouses', info: true, basic: '1', standard: '2', professional: '3', premium: '4' }
    ]
  },
  {
    name: 'Restaurant',
    features: [
      { name: 'Floors', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Tables', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Decorations', info: true, basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Products',
    features: [
      { name: 'Products', info: true, basic: '100', standard: 'Unlimited', professional: 'Unlimited', premium: 'Unlimited' },
      { name: 'Categories', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Brands', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Barcode & Serial Tracking', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Product Images', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Bulk Products Import', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Bulk Price Update', info: true, basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Sales & Orders',
    features: [
      { name: 'Point of Sale', info: true, basic: 'Advance', standard: 'Advance', professional: 'Advance', premium: 'Advance' },
      { name: 'POS Terminals', info: true, basic: '2', standard: '5', professional: '10', premium: '15' },
      { name: 'Invoices', info: true, basic: '100/month', standard: '700/month', professional: '3,000/month', premium: '9,500/month' },
      { name: 'Quotations', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Sales Orders', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Sales Return', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Hold Sales', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Sample Sales', info: true, basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Purchases',
    features: [
      { name: 'Purchase Orders', info: true, basic: '50/month', standard: '500/month', professional: '1,500/month', premium: '5,000/month' },
      { name: 'Bulk Purchase', info: true, basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Inventory Operations',
    features: [
      { name: 'Transfer Orders', info: true, basic: '100/month', standard: '700/month', professional: '3,000/month', premium: '7,500/month' },
      { name: 'Stock Issuing', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Stock Receiving', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Stock Adjustments', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Bulk Import Open Stock', info: true, basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Ecommerce',
    features: [
      { name: 'Online Store', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Templates & Themes', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Orders', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Discounts', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Domains', info: true, basic: true, standard: true, professional: true, premium: true }
    ]
  },
  {
    name: 'Marketing',
    features: [
      { name: 'Coupons', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Loyalty', info: true, basic: false, standard: false, professional: true, premium: true }
    ]
  },
  {
    name: 'Manufacturing',
    features: [
      { name: 'Production Orders', info: true, basic: false, standard: false, professional: true, premium: true },
      { name: 'Machines', info: true, basic: false, standard: false, professional: true, premium: true }
    ]
  },
  {
    name: 'Accounting & Financial',
    features: [
      { name: 'Income & Expense', info: true, basic: 'Basic', standard: 'Basic', professional: 'Advance', premium: 'Advance' },
      { name: 'Billing & Payments', info: true, basic: false, standard: false, professional: true, premium: true },
      { name: 'Payables & Receivables', info: true, basic: false, standard: false, professional: true, premium: true },
      { name: 'Financial Insights & Reports', info: true, basic: false, standard: false, professional: true, premium: true },
      { name: 'Balance Sheet & Trial Balance', info: true, basic: false, standard: false, professional: true, premium: true },
      { name: 'Chart of Accounts', info: true, basic: false, standard: false, professional: true, premium: true },
      { name: 'Journal Entries & Reports', info: true, basic: false, standard: false, professional: true, premium: true },
      { name: 'Fixed Assets & Allocations', info: true, basic: false, standard: false, professional: true, premium: true }
    ]
  },
  {
    name: 'Analytics',
    features: [
      { name: 'Standard Reports (Sales, Purchases, Inventory)', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Shift & Commission Reports', info: true, basic: false, standard: false, professional: true, premium: true },
      { name: 'Daily & Monthly Cash Reports', info: true, basic: false, standard: true, professional: true, premium: true },
      { name: 'Advanced Reports (Dashboards, Inventory Aging)', info: true, basic: false, standard: false, professional: true, premium: true }
    ]
  },
  {
    name: 'General Tools',
    features: [
      { name: 'Role-Based Access', info: true, basic: false, standard: false, professional: false, premium: true },
      { name: 'Notifications', info: true, basic: false, standard: false, professional: true, premium: true },
      { name: 'Stock Alerts', info: true, basic: false, standard: false, professional: false, premium: true },
      { name: 'Activity Log', info: true, basic: false, standard: false, professional: false, premium: true },
      { name: 'Automations', info: true, basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' }
    ]
  },
  {
    name: 'Integration',
    features: [
      { name: 'API Calls/Day', info: true, basic: '500/day', standard: '5,000/day', professional: '10,000/day', premium: '20,000/day' },
      { name: 'Stripe', info: true, basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
      { name: 'PayPal', info: true, basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
      { name: 'DHL', info: true, basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
      { name: 'Leopard', info: true, basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
      { name: 'Zapier', info: true, basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' },
      { name: 'Make', info: true, basic: 'coming soon', standard: 'coming soon', professional: 'coming soon', premium: 'coming soon' }
    ]
  },
  {
    name: 'Support',
    features: [
      { name: 'Onboarding Assistance', info: true, basic: 'Basic Guide Included', standard: 'Standard Walkthrough', professional: 'Standard Walkthrough + 2 Sessions', premium: 'Advanced Setup + 5 Sessions' },
      { name: 'Email Support', info: true, basic: true, standard: true, professional: true, premium: true },
      { name: 'Live Chat Support', info: true, basic: false, standard: true, professional: true, premium: true },
      { name: 'Phone Support', info: true, basic: false, standard: false, professional: true, premium: true },
      { name: 'Dedicated Account Manager', info: true, basic: false, standard: false, professional: false, premium: true }
    ]
  }
];
