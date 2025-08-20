import ButtonLg from "@/components/button/ButtonLg"
import Image from "next/image"

function SmartWaytoSyncndSellSection() {
  return (
   <section className="w-full px-6 md:px-10 xl:px-20 2xl:px-[100px]">
      <div className="mt-20 md:mt-28 lg:mt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-7 lg:gap-14 xl:gap-32 items-center justify-center w-full">
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-[40px] lg:text-5xl xl:text-[64px] leading-[48px] lg:leading-[60px] xl:leading-[76px] mb-5 lg:mb-6 xl:mb-10 font-semibold text-[#231F20]">
              The Smart Way to Sell, Sync & Scale
            </h1>

            <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-9 mb-8 md:mb-10 xl:mb-14 font-normal text-[#231F20]">
              Owners Inventory is the trusted choice for modern retailers, wholesalers, and growing brands. Designed to simplify operations, it offers a seamless experience from setup to daily use—making inventory, sales, and customer management effortless.
            </p>

            {/* <a
              href="#"
              className="inline-block px-6 py-3 md:px-6 md:py-2.5 lg:px-12 lg:py-5 text-xs lg:text-base leading-none font-semibold text-white bg-[#795CF5] border border-transparent rounded-full hover:border-[#795CF5] hover:bg-transparent hover:text-[#795CF5] transition-colors duration-300 mb-3"
            >
              Get Started Now
            </a> */}
                      <ButtonLg url='#' text='Get Started Now' bgColor='[#795CF5]' textColor="white" isBorder/>

          </div>

          {/* Right Image */}
          <div className="w-full">
            <Image
              src="/assets/sell-section-img.webp"
              alt="Sell Image"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section> 
  )
}

export default SmartWaytoSyncndSellSection