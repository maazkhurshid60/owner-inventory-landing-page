import Image from "next/image";
import { blogData } from "@/constant/blogData/blogData";
import CardHeading from "../typography/CardHeading";
import Paragraph from "../typography/Paragraph";
import MainHeading from "../typography/MainHeading";
import { useEffect } from "react";
import CardDesc from "../typography/CardDesc";

export default function InsightsSection() {
  // Define repeating desktop col-span sequence
  const desktopPattern = [6, 6, 4, 4, 4, 6, 6, 4, 4, 4]; // pattern for lg:col-span-X

  useEffect(() => {
    // Function to synchronize card heading and paragraph heights
    const setEqualHeights = (className: string) => {
      if (typeof window === 'undefined') return;
      
      const elements = document.querySelectorAll(className);
      let maxHeight = 0;
      
      // Reset heights to auto to get the actual height
      elements.forEach((el: Element) => {
        (el as HTMLElement).style.height = 'auto';
      });
      
      // Find the maximum height
      elements.forEach((el: Element) => {
        if ((el as HTMLElement).offsetHeight > maxHeight) {
          maxHeight = (el as HTMLElement).offsetHeight;
        }
      });
      
      // Set all elements to the maximum height
      elements.forEach((el: Element) => {
        (el as HTMLElement).style.height = maxHeight + 'px';
      });
    };

    // Set equal heights for headings and paragraphs
    setEqualHeights('.card-heading');
    setEqualHeights('.card-paragraph');

    // Update heights on window resize
    const handleResize = () => {
      setEqualHeights('.card-heading');
      setEqualHeights('.card-paragraph');
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="ownerinventory-landing-insights rounded-[40px] w-full lg:py-[100px] md:py-40 py-28 z-50">
      <div className="wrapper text-center">
        <MainHeading className="mb-4">Everything You Want to Know</MainHeading>
        <Paragraph className="lg:mb-10 md:mb-6 mb-5">
          We know that you may have questions regarding how Owners Inventory operates, its functions, and integrations. These are the most frequently asked questions that we have responded to so that you can have the confidence to start and start fast.
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:gap-6 gap-5 items-stretch">
          {blogData.slice(0, 5).map((blog, index) => {

            const patternIndex = index % desktopPattern.length;
            const lgCol = `lg:col-span-${desktopPattern[patternIndex]}`;

            return (
              <div
                key={index}
                className={`col-span-12 md:col-span-6 ${lgCol} bg-white shadow-[2px_2px_22px_0px_#33333326] rounded-[20px] lg:p-6 p-4 flex flex-col h-full`}
              >
                <div className="relative w-full mb-6">
                  <Image
                    src={blog.blogImg}
                    alt={blog.heading}
                    width={800}
                    height={300}
                    loading="lazy"
                    className="w-full h-72 object-cover rounded-[20px]"
                  />
                  <span className="absolute inline-block text-white bg-[#795CF5] font-onest text-xs lg:text-sm bottom-4 left-4 lg:bottom-3 lg:left-3 px-2 py-1 rounded-md">
                    2 mins read
                  </span>
                </div>
                
                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <div className="card-heading-wrapper text-left mb-4">
                      <CardHeading className="card-heading min-h-[30px] flex items-start">
                        {blog.heading}
                      </CardHeading>
                    </div>
                    
                    <div className="card-paragraph-wrapper text-left mb-2">
                      <CardDesc className="card-paragraph xl:text-lg leading-[28px] min-h-[30px] flex items-start text-[#666666]">
                        {blog.blogOverview.slice(0, 200)}
                        {blog.blogOverview.length > 200 ? "..." : ""}
                      </CardDesc>
                    </div>
                  </div>
                  
                  <div className=" pt-4 border-gray-100 text-left">
                    <p className="font-onest font-medium text-[#231F20] xl:text-lg lg:text-sm md:text-xs text-sm xl:leading-9 md:leading-7 leading-5">
                      Posted:{" "}
                      <span className="text-[#795CF5]">{blog.date}</span>{" "}
                      <span className="text-[#D9D9D9]">|</span> by{" "}
                      <span className="text-[#795CF5]">{blog.author}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="lg:mt-[100px] md:mt-[60px] mt-10">
          <button className="bg-[#795CF5] text-white border border-transparent cursor-pointer hover:bg-transparent hover:border-[#795CF5] hover:text-[#795CF5] font-onest font-semibold text-base px-[60px] py-5 rounded-full transition">
            Browse Insights
          </button>
        </div> */}
      </div>
    </section>
  );
}