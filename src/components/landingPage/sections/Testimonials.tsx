'use client';
import Image from 'next/image';

export default function ReviewSection() {
  const testimonials = [
    {
      name: 'Fatima A.',
      title: 'Boutique Owner',
      image: '/assets/pfp.avif',
      text: ` “Before Owners Inventory, I had to switch between spreadsheets, my POS app, and an online store backend
              just
              to track what I was selling. I constantly oversold items or ran out of stock without realizing. Now
              everything is synced, my stock levels, sales reports, customer data, even my online store runs from the
              same
              system. I have time to focus on styling my store, not fixing my backend.”`,
      icon: '/assets/review-section/double-coma-icon.svg',
      color: '#795CF5',
    },
    {
      name: 'Hassan Malik',
      title: 'Fashion & Apparel Seller',
      image: '/assets/pfp.avif',
      text: `“When we opened our second branch, I thought we’d need a new system just to keep things in sync. But Owners Inventory just scaled with us. We now have three locations, and I can check all sales, inventory, and purchases from a single dashboard. We’ve saved hours of manual work every week and reduced stockouts by nearly 40%. Owners Inventory made it so easy — I can now track every SKU, run sales, and launch limited collections online in minutes. It’s changed the way I do business.”`,
      icon: '/assets/review-section/coma-green.svg',
      color: '#1AD1B9',
    },
    {
      name: 'David Martinez',
      title: 'HOD Supply Chain, PureSip Beverages',
      image: '/assets/100.jpeg',
      text: `“I’m not a tech expert, and my staff definitely isn’t. What I love about Owners Inventory is that it's super intuitive. My staff handles billing and stock without needing constant help, and I get all the reports I need to make smart decisions. It’s simple where it needs to be — and powerful where it matters.”`,
      icon: '/assets/review-section/double-coma-icon.svg',
      color: '#795CF5',
    },
    {
      name: 'Ali R.',
      title: 'Electronics Shop Manager',
      image: '/assets/100.jpeg',
      text: `“Managing seasonal apparel launches with multiple variants used to take forever. With Owners Inventory, I can sync products across stores and online within hours. It’s intuitive, clean, and built for people who want things done right.”`,
      icon: '/assets/review-section/coma-green.svg',
      color: '#1AD1B9',
    }, {
      name: 'Ali R.',
      title: 'Electronics Shop Manager',
      image: '/assets/100.jpeg',
      text: `“I’m not a tech expert  Owners Inventory handles everything — expiry tracking, order history Owners Inventory handles everything — expiry tracking, order history Owners Inventory handles everything — expiry tracking, order history Owners Inventory handles everything — expiry tracking, order history  Owners Inventory handles everything — expiry tracking, order history Owners Inventory handles everything — expiry tracking, order history... It’s simple where it needs to be — and powerful where it matters.”`,
      icon: '/assets/review-section/coma-green.svg',
      color: '#1AD1B9',
    }, {
      name: 'Ali R.',
      title: 'Electronics Shop Manager',
      image: '/assets/pfp.avif',
      text: `“We deal in regulated safety gear across Europe, and our operations rely on accuracy and compliance. Owners Inventory handles everything — expiry tracking, order history, user-level access, audit logs — and it’s intuitive for the team. We integrated purchasing and finance in under a week, and our reporting is 5x faster. What impressed me most is that we didn’t need to overhaul our workflows; the system just fits into how we already work.”`,
      icon: '/assets/review-section/coma-green.svg',
      color: '#1AD1B9',
    }, {
      name: 'Ali R.',
      title: 'Electronics Shop Manager',
      image: '/assets/pfp.avif',
      text: `“We deal in regulated safety gear across Europe, and our operations rely on accuracy and compliance. Owners Inventory handles everything — expiry tracking, order history, user-level access, audit logs — and it’s intuitive for the team. We integrated purchasing and finance in under a week, and our reporting is 5x faster. What impressed me most is that we didn’t need to overhaul our workflows; the system just fits into how we already work.”`,
      icon: '/assets/review-section/coma-green.svg',
      color: '#1AD1B9',
    }, {
      name: 'Ali R.',
      title: 'Electronics Shop Manager',
      image: '/assets/pfp.avif',
      text: `“We deal in regulated safety gear across Europe, and our operations rely on accuracy and compliance. Owners Inventory handles everything — expiry tracking, order history, user-level access, audit logs — and it’s intuitive for the team. We integrated purchasing and finance in under a week, and our reporting is 5x faster. What impressed me most is that we didn’t need to overhaul our workflows; the system just fits into how we already work.”`,
      icon: '/assets/review-section/coma-green.svg',
      color: '#1AD1B9',
    },
    // Add remaining entries here as needed...
  ];

  return (
    <section
      className="relative overflow-y-auto rounded-[40px] xl:h-[1268px] md:h-[1077px] h-[500px] xl:py-[100px] md:py-20 py-10 xl:mt-40 md:mt-28 mt-20"
      style={{
        backgroundImage: `
          radial-gradient(at top left, rgba(121, 92, 245, 0.5), transparent 70%),
          radial-gradient(at top right, rgba(26, 209, 185, 0.3), transparent 70%),
          radial-gradient(at bottom right, rgba(121, 92, 245, 0.3), transparent 70%),
          radial-gradient(at bottom left, rgba(26, 209, 185, 0.3), transparent 70%)`,
        backgroundBlendMode: 'screen',
      }}
    >
      <div className=" wrapper">
        <h1 className="mx-auto w-full max-w-xl lg:max-w-4xl text-center font-onest font-semibold text-[#231F20] lg:text-5xl md:text-[44px] text-[32px] lg:leading-[60px] md:leading-[48px] leading-10 lg:mb-20 md:mb-14 mb-10">
          What Growing Brands Are Saying
        </h1>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-3 w-full gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="relative inline-block bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] rounded-[30px] xl:p-6 p-5 mb-6 break-inside-avoid"
            >
              <div className="absolute top-6 right-6">
                <Image
                  src={item.icon}
                  alt="Quote icon"
                  width={26}
                  height={26}
                  className="w-[21px] h-5 xl:w-[26px] xl:h-6"
                />
              </div>
              <div className="flex items-center gap-4 mb-5">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-cover rounded-full border-2"
                  style={{ borderColor: item.color }}
                />
                <div>
                  <h4 className="font-onest font-semibold text-[#231F20] xl:text-xl text-base">{item.name}</h4>
                  <p
                    className="font-onest font-medium xl:text-sm text-xs"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
              <p className="font-onest font-normal text-[#231F20] xl:text-sm text-xs xl:leading-6 leading-5">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute hidden md:block bottom-0 left-0 right-0 z-10 h-[30%] pointer-events-none bg-gradient-to-b from-white/0 to-white/40 opacity-40 backdrop-blur-[100px]" />
    </section>
  );
}
