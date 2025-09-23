import KeyHighlights from '@/components/pages/features-page/point-of-sale/KeyHighlights'
import SellerClubSection2 from '@/components/pages/features-page/point-of-sale/SellerClubSection2'
import WhyChoosePOS from '@/components/pages/features-page/point-of-sale/WhyChoosePOS'
import CalltoActionBottom from '@/components/pages/landing-page/CalltoActionBottom'
import FaqSection from '@/components/pages/landing-page/FAQSection'
import HeroSection from '@/components/pages/landing-page/HeroSection'
import PinnedSection3 from '@/components/pages/landing-page/PinnedSection3'
import React from 'react'


const whyChoseCards = [
    {
      icon: "/assets/point-of-sale/why-chose/speed-accuracy.svg",
      title: "Speed + Accuracy",
      description: "Reduce checkout time, avoid errors.",
    },
    {
      icon: "/assets/point-of-sale/why-chose/all-integration.svg",
      title: "All-in-One Integration",
      description:
        "POS, inventory, accounting, and reporting in one place.",
    },
    {
      icon: "/assets/point-of-sale/why-chose/scalable.svg",
      title: "Scalable",
      description: "Works for a single shop or a chain of stores.",
    },
    {
      icon: "/assets/point-of-sale/why-chose/smarter-decision.svg",
      title: "Smarter Decisions",
      description:
        "Built-in sales analytics and reporting to track performance.",
    },
  ];

const page = () => {
  return (
    <>
    <HeroSection
        title="Point of Sale (POS) Fast, Reliable & Intuitive"
        description="Our Point of Sale system is designed to make every sale simple, quick, and error-free. Whether you run a retail store, supermarket, or restaurant, our POS brings together speed, accuracy, and seamless integration with your inventory and accounts."
        video='https://owner-inventory.s3.us-east-1.amazonaws.com/videos/features-page/main-feature.webm'
        showButtons={false}
      />
      
      <KeyHighlights/>
       <SellerClubSection2
        description="Our POS system helps you sell smarter, faster, and with"
        highlight="complete control—integrated seamlessly with your business operations."
        buttonLabel="Book a Free Demo"
        buttonHref="/demo"
        imageSrc="/assets/point-of-sale/pos-image.webp"
      />
      <WhyChoosePOS
        heading="Why Choose Our POS?"
        cards={whyChoseCards}
        mainImage="/assets/point-of-sale/why-chose/why-chose-main.webp"
      />
      <PinnedSection3/>
       <FaqSection/>
    <CalltoActionBottom/>
    

    </>
  )
}

export default page