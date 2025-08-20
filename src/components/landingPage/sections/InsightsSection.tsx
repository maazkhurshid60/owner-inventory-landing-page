import Image from 'next/image';
import '../../../app/globals.css'
const insights = [
  {
    title: 'How Real-Time Stock Sync Helps You Avoid Customer Complaints',
    date: 'June 27, 2025',
    author: 'John Doe',
    image: '/assets/insights-section/insights-image.webp',
  },
  {
    title: 'The Future of Retail: Cloud-Based Inventory Systems Explained',
    date: 'June 27, 2025',
    author: 'John Doe',
    image: '/assets/insights-section/insights-image2.webp',
  },
  {
    title: 'Mastering Stock Control in 5 Steps',
    date: 'June 27, 2025',
    author: 'John Doe',
    image: '/assets/insights-section/insights-image3.webp',
    showOn: 'lg',
  },
  {
    title: 'Offline to Online: A Retail Guide',
    date: 'June 27, 2025',
    author: 'John Doe',
    image: '/assets/insights-section/insights-image.webp',
  },
  {
    title: 'How to Read Your Inventory Reports',
    date: 'June 27, 2025',
    author: 'John Doe',
    image: '/assets/insights-section/insights-image5.webp',
  },
];

export default function InsightsSection() {
  return (
    <section
      className="ownerinventory-landing-insights rounded-[40px] lg:mt-40 md:mt-28 mt-20 lg:py-[100px] md:py-[75px] py-10"
      style={{
        backgroundImage: `
          radial-gradient(at top left, rgba(121, 92, 245, 0.5), transparent 70%),
          radial-gradient(at top right, rgba(26, 209, 185, 0.5), transparent 70%),
          radial-gradient(at bottom right, rgba(121, 92, 245, 0.5), transparent 70%),
          radial-gradient(at bottom left, rgba(26, 209, 185, 0.5), transparent 70%)`,
        backgroundBlendMode: 'screen',
      }}
    >
      <div className="wrapper text-center">
        <h2 className="font-onest font-semibold text-[#231F20] lg:text-[64px] md:text-[44px] text-4xl md:leading-[60px] leading-[48px] lg:mb-20 md:mb-14 mb-10">
          Insights to Help You Grow
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-6 gap-5">
          {insights.map((insight, index) => {
            const colSpan =
              index === 0 || index === 1
                ? 'md:col-span-6'
                : 'lg:col-span-4 md:col-span-5';

            const visibility =
              insight.showOn === 'lg'
                ? 'hidden md:hidden lg:block'
                : 'block';

            return (
              <div
                key={index}
                className={`bg-white rounded-[20px] ${colSpan} ${visibility} p-4 lg:p-6`}
              >
                <div className="relative w-full">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    width={800}
                    height={300}
                    loading="lazy"
                    className="w-full h-72 object-cover rounded-[20px]"
                  />
                  <span className="absolute inline-block text-white bg-[#795CF5] font-onest text-xs lg:text-sm bottom-4 left-4 lg:bottom-8 lg:left-8 px-2 py-1 rounded-md">
                    2 mins read
                  </span>
                </div>
                <div className="text-left">
                  <h3 className="font-onest font-semibold text-[#231F20] xl:text-2xl lg:text-xl md:text-sm text-xl lg:leading-9 leading-7 xl:mb-6 mb-4 lg:mt-[30px] md:mt-[18px] mt-4">
                    {insight.title}
                  </h3>
                  <p className="font-onest font-medium text-[#231F20] xl:text-lg lg:text-sm md:text-xs text-sm xl:leading-9 md:leading-7 leading-5 mb-2">
                    Posted: <span className="text-[#795CF5]">{insight.date}</span> | by{' '}
                    <span className="text-[#795CF5]">{insight.author}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:mt-[100px] md:mt-[60px] mt-10">
          <button className="bg-[#795CF5] text-white border border-transparent cursor-pointer hover:bg-transparent hover:border-[#795CF5] hover:text-[#795CF5] font-onest font-semibold text-base px-[60px] py-5 rounded-full transition">
            Browse Insights
          </button>
        </div>
      </div>
    </section>
  );
}
