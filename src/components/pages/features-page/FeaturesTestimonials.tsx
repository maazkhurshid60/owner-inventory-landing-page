import React from 'react'
import MainHeading from '../typography/MainHeading'
import Image from 'next/image';
import SmartTools from '../landing-page/SmartTools';
import CustomSwiper from '@/components/slider/CustomSwiper';

const slides = [
  {
    name: "Fatima A.",
    title: "Boutique Owner",
    image: "/assets/pfp.avif",
    text: `"Before Owners Inventory, I had to switch between spreadsheets, my POS app, and an online
    store backend just to track what I was selling. I constantly oversold items or ran out of
    stock without realizing. Now everything is synced, my stock levels, sales
    reports, customer data, even my online store runs from the same system. I have time to focus
    on styling my store, not fixing my backend."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Hassan Malik",
    title: "Fashion & Apparel Seller",
    image: "/assets/pfp.avif",
    text: `"I run a small bakery from home, and I thought inventory tools were just for big stores. But Owners Inventory helps me track ingredients, handle custom orders, and even take online payments through my synced storefront. It feels like I have a full back office — without hiring anyone."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "David Martinez",
    title: "HOD Supply Chain, PureSip Beverages",
    image: "/assets/100.jpeg",
    text: `"As a beverage company managing retail, wholesale, and DTC channels, stock coordination was our biggest pain. Owners Inventory brought everything into one place — real-time tracking,
    automated reordering, mobile sales integration. We cut out-of-stocks
    by over 60% and reduced fulfillment lead time dramatically. It's agile, scalable, and
    surprisingly easy to roll out across departments."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Ali R.",
    title: "Electronics Shop Manager",
    image: "/assets/100.jpeg",
    text: `"I'm not a tech expert, and my staff definitely isn't. What I love about Owners Inventory is that it's super intuitive. My staff handles billing and stock without needing constant help, and I get all the reports I need to make smart decisions. It's simple where it needs to be — and powerful where it matters."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Zainab Batool",
    title: "Home Bakery Owner",
    image: "/assets/pfp.avif",
    text: `"I run a small bakery from home, and I thought inventory tools were just for big stores. But Owners Inventory helps me track ingredients, handle custom orders, and even take online payments through my synced storefront. It feels like I have a full back office — without hiring anyone."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Rachel Collins",
    title: "Head of Digital Strategy, NovaMall",
    image: "/assets/100.jpeg",
    text: `"We operate a fast-growing online marketplace and needed better sync between sellers,
    warehouse, and customer front-end. With Owners Inventory, real-time stock visibility and
    automated workflows keep us agile. We grew from 2K to 20K monthly orders without
    breaking our operations. It's the ERP alternative we didn't know we needed."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Michael Thompson",
    title: "COO, UrbanMart Superstores",
    image: "/assets/pfp.avif",
    text: `"When we opened our second branch, I thought we'd need a new system just to keep things in
    sync. But Owners Inventory just scaled with us. We now have three locations, and I can check
    all sales, inventory, and purchases from a single dashboard. We've
    saved hours of manual work every week and reduced stockouts by nearly 40%. Owners Inventory
    made it so easy — I can now track every SKU, run sales, and launch limited collections
    online in minutes. It's changed the way I do business."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
  {
    name: "Emma Harris",
    title: "MD WovenWardrobe Apparel",
    image: "/assets/pfp.avif",
    text: `"Managing seasonal apparel launches with multiple variants used to take forever. With Owners
    Inventory, I can sync products across stores and online within hours. It's intuitive, clean,
    and built for people who want things done right."`,
    icon: "/assets/review-section/coma-green.svg",
    color: "#1AD1B9",
  },
  {
    name: "Jonathan Brooks",
    title: "CEO, SafetyPro Equipment Co",
    image: "/assets/pfp.avif",
    text: `"We deal in regulated safety gear across Europe, and our operations rely on accuracy and
    compliance. Owners Inventory handles everything — expiry tracking, order history, user-level
    access, audit logs — and it's intuitive for the team. We integrated purchasing
    and finance in under a week, and our reporting is 5x faster. What impressed me most is that
    we didn't need to overhaul our workflows; the system just fits into how we already work."`,
    icon: "/assets/review-section/double-coma-icon.svg",
    color: "#795CF5",
  },
];

const FeaturesTestimonials = () => {
  return (
    <div className='w-full py-[60px] lg:mt-[100px] md:mt-28 mt-20 rounded-t-[40px]' 
    style={{ background:
         `
    linear-gradient(0deg, rgba(255, 255, 255, 0.9) 40%, transparent 100%),
    linear-gradient(90deg,  rgba(158, 2, 255, 0.3) 0%, rgba(207, 181, 249, 0.9) 40%, rgba(26, 209, 185, 0.3) 90%)
  `,
      }}>
        <section className='wrapper'>
            <div className="flex flex-col">
                <MainHeading className='text-center mb-6 md:mb-8 lg:mb-10'>What Clients Say About Us?</MainHeading>

            <section className="relative flex items-stretch rounded-2xl">
               <CustomSwiper
             slides={slides}
            renderSlide={(slide, i) => (
                <div
                  className="testimonial-card flex flex-col h-full self-stretch justify-between relative bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] rounded-[30px] xl:p-6 p-5 md:mb-6 mb-20 break-inside-avoid"
                >
                  <div className="flex flex-col flex-grow">
                    <div className="absolute top-6 right-6 font-bold text-3xl text-[#795CF5]">
                      <Image
                        src={slide.icon}
                        alt="Quote icon"
                        width={26}
                        height={26}
                        className="w-[21px] h-5 xl:w-[26px] xl:h-6"
                      />
                    </div>
                    <div className="flex items-center gap-4 mb-5">
                      <Image
                        src={slide.image}
                        alt={slide.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-cover rounded-full border-2"
                        style={{ borderColor: slide.color }}
                      />
                      <div>
                        <h4 className="font-onest font-semibold text-[#231F20] xl:text-xl text-base">
                          {slide.name}
                        </h4>
                        <p
                          className="font-onest font-medium xl:text-sm text-xs"
                          style={{ color: slide.color }}
                        >
                          {slide.title}
                        </p>
                      </div>
                    </div>
                    <p className="font-onest font-normal text-[#231F20] xl:text-sm text-xs xl:leading-6 leading-5 flex-grow">
                      {slide.text}
                    </p>
                  </div>
                </div>
            )}
          />
          </section>

        <div className="">
          <SmartTools/>
        </div>
            </div>
        </section>
      </div>
  )
}

export default FeaturesTestimonials