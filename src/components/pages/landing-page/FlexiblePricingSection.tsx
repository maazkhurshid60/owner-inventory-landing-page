import Image from 'next/image';
import Link from 'next/link';

import '../../../app/globals.css'
import Paragraph from '../typography/Paragraph';


export default function FlexiblePricingSection() {
  return (
    <section className="wrapper">
      <div className="lg:mt-40 md:mt-28 mt-20">
        <div className="grid items-center justify-center w-full md:grid-cols-2 grid-cols-1 xl:gap-32 lg:gap-14 md:gap-7 gap-10">
          {/* Text Content */}
          <div className="flex flex-col items-start justify-center">
            <h1 className="font-onest font-semibold text-[#231F20] xl:text-[64px] lg:text-5xl md:text-[40px] text-4xl xl:leading-[76px] lg:leading-[60px] leading-[48px] xl:mb-10 lg:mb-6 mb-5">
              Flexible Pricing for Every Business
            </h1>

            {/* <p className="font-onest font-normal text-[#231F20] xl:text-xl lg:text-lg md:text-base text-xs xl:leading-9 lg:leading-7 md:leading-6 leading-5 xl:mb-14 md:mb-10 mb-8">
              Start free, scale when you’re ready. No contracts. No surprises. Whether you're a solo seller or managing
              multiple retail outlets, our plans are designed to grow with you. Enjoy full access to core features,
              transparent billing, and the freedom to upgrade only when your business is ready for more.
            </p> */}

            <Paragraph>Start free, scale when you’re ready. No contracts. No surprises. Whether you're a solo seller or managing
              multiple retail outlets, our plans are designed to grow with you. Enjoy full access to core features,
              transparent billing, and the freedom to upgrade only when your business is ready for more.</Paragraph>

            <Link
              href="#"
              className="inline-block bg-[#1AD1B9] border border-transparent hover:border-[#1AD1B9] hover:bg-transparent hover:text-[#1AD1B9] rounded-full font-semibold text-white lg:text-base text-xs leading-none lg:py-5 md:py-2.5 py-3 lg:px-12 md:px-6 px-6 mb-3"
            >
              View Pricing Plans
            </Link>
          </div>

          {/* Image Section */}
          <div className="w-full">
            <Image
              src="/assets/flexible-pricing.webp"
              alt="Pricing Image"
              width={800}
              height={600}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
