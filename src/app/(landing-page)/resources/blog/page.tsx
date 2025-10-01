import AllBlogs from '@/components/pages/industries/blog/AllBlogs'
import CalltoActionBottom from '@/components/pages/landing-page/CalltoActionBottom'
import FaqSection from '@/components/pages/landing-page/FAQSection'
import HeroSection from '@/components/pages/landing-page/HeroSection'
import React from 'react'

const page = () => {

  return (
    <>
     <HeroSection
      title="Discover trends, updates, and knowledge to inspire your daily journey."
        description="Join our community and never miss out on fresh updates."
        showButtons={false}
        showSubscribe={true}
        heroHeight= "lg:h-[700px]"
        heroOverflow="overflow-y-hidden"
        variant="animation2"
        />

        <AllBlogs/>

        <FaqSection />
      <CalltoActionBottom />
        
    </>
  )
}

export default page