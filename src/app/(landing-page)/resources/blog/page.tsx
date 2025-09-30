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
        />
    </>
  )
}

export default page