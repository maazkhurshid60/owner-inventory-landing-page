# Pricing Page Components

This folder contains a complete conversion of the `pricing.html` file into reusable Next.js components using TypeScript and Tailwind CSS.

## Files Structure

```
components/
├── page.tsx                 # Main entry point - renders PricingPage
├── PricingPage.tsx         # Main pricing page component
├── Header.tsx              # Navigation header with mobile menu
├── PricingHero.tsx         # Hero section with title and tabs
├── PricingTabs.tsx         # Monthly/Yearly toggle component
├── PricingCard.tsx         # Individual pricing plan card
├── PricingCards.tsx        # Container for all pricing cards
├── ComparisonTable.tsx     # Feature comparison table
├── types.ts                # TypeScript type definitions
├── tableConfig.ts          # Configuration data for plans and features
└── README.md              # This documentation file
```

## Components Overview

### 1. **page.tsx**
- **Purpose**: Main entry point for the pricing page
- **Usage**: Import and use this in your Next.js app router or pages directory
- **Props**: None

### 2. **PricingPage.tsx**
- **Purpose**: Main container component that orchestrates all pricing components
- **Features**: 
  - State management for monthly/yearly toggle
  - Combines Header, Hero, Pricing Cards, and Comparison Table
- **Props**: None (manages internal state)

### 3. **Header.tsx**
- **Purpose**: Navigation header with logo, menu items, and mobile responsive design
- **Features**:
  - Fixed positioning with smooth animations
  - Mobile hamburger menu with slide-out panel
  - Desktop navigation with hover effects
  - Search functionality and CTA buttons
- **Props**: None (can be extended to accept navigation config)

### 4. **PricingHero.tsx**
- **Purpose**: Hero section with main heading, subtitle, and pricing tabs
- **Features**:
  - Responsive typography
  - Background shapes and styling
  - Integrates PricingTabs component
- **Props**:
  - `activeTab`: Current selected tab ('monthly' | 'yearly')
  - `onTabChange`: Function to handle tab changes

### 5. **PricingTabs.tsx**
- **Purpose**: Toggle component for switching between monthly and yearly pricing
- **Features**:
  - Smooth transitions
  - Active state styling
  - Hover effects
- **Props**:
  - `activeTab`: Current active tab
  - `onTabChange`: Callback function for tab changes

### 6. **PricingCard.tsx**
- **Purpose**: Individual pricing plan card component
- **Features**:
  - Dynamic styling based on plan colors
  - Price display logic (handles free plans and yearly discounts)
  - Feature list rendering
  - Hover effects on CTA buttons
- **Props**:
  - `plan`: PricingPlan object with all plan details
  - `isYearly`: Boolean to show yearly pricing

### 7. **PricingCards.tsx**
- **Purpose**: Container component that renders all pricing cards
- **Features**:
  - Responsive grid layout
  - Horizontal scrolling on mobile
  - Maps through plans array
- **Props**:
  - `plans`: Array of PricingPlan objects
  - `isYearly`: Boolean for pricing mode

### 8. **ComparisonTable.tsx**
- **Purpose**: Feature comparison table with expandable functionality
- **Features**:
  - Sticky left column for feature names
  - Scrollable right section for plan comparisons
  - Toggle visibility with smooth animations
  - Renders different value types (boolean, string, numbers)
- **Props**:
  - `categories`: Array of FeatureCategory objects

## Configuration Files

### **tableConfig.ts**
Contains all the data for pricing plans and feature categories:

- **pricingPlans**: Array of pricing plan objects with prices, features, colors, etc.
- **featureCategories**: Array of feature categories with individual features and their availability across plans

### **types.ts**
TypeScript type definitions for:
- `PricingPlan`: Individual pricing plan structure
- `FeatureCategory`: Feature group structure
- `FeatureRow`: Individual feature with plan availability
- Component prop interfaces

## Design Features

1. **Responsive Design**: All components are fully responsive with mobile-first approach
2. **Consistent Styling**: Uses Tailwind CSS classes matching the original design
3. **Interactive Elements**: 
   - Mobile menu toggle
   - Pricing tab switching
   - Comparison table expand/collapse
   - Button hover effects
4. **Reusable Architecture**: Each component can be used independently
5. **Type Safety**: Full TypeScript support with proper interfaces

## Usage Flow

1. **Import the main component**:
   ```tsx
   import Page from './components/page';
   ```

2. **Use in your Next.js app**:
   ```tsx
   export default function PricingRoute() {
     return <Page />;
   }
   ```

3. **Customize data**: Modify `tableConfig.ts` to update pricing plans and features

## Customization

- **Colors**: Update colors in `tableConfig.ts` for each pricing plan
- **Features**: Modify the `featureCategories` array to add/remove features
- **Pricing**: Update prices and descriptions in the `pricingPlans` array
- **Styling**: All Tailwind classes can be customized as needed

## Dependencies

- React 18+
- TypeScript
- Tailwind CSS
- Next.js (for 'use client' directive)

All components are built with modern React patterns using functional components and hooks.
