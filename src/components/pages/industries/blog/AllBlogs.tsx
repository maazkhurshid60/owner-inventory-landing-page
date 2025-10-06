'use client'
import React, { useState } from 'react'
import { blogData } from '@/constant/blogData/blogData'
import FeatureCard from '../../features-page/FeatureCard'
import SmallTabs from '@/components/tabs/SmallTabs'
import InputField from '@/components/form-fields/InputField'
import Image from 'next/image'

const layoutClasses = [
  {
    className: "col-span-12 xl:col-span-8 ",
    mediaClassName: "h-[320px]",
    paddingClass: "px-0",
    heightClass: "h-full",
  },
  {
    className: "col-span-12 md:col-span-6 xl:col-span-4",
    mediaClassName: "h-[220px] xl:h-[190px]",
    paddingClass: "px-0",
    heightClass: "h-fit",
  },
  {
    className: "col-span-12 md:col-span-6 xl:col-span-4",
    mediaClassName: "h-[220px]",
    paddingClass: "px-0",
    heightClass: "h-fit",
  },
  {
    className: "col-span-12 md:col-span-6 xl:col-span-4",
    mediaClassName: "h-[220px]",
    paddingClass: "px-0",
    heightClass: "h-fit",
  },
  {
    className: "col-span-12 md:col-span-6 xl:col-span-4 xl:-mt-[100px]",
    mediaClassName: "h-[220px] xl:h-[320px]",
    paddingClass: "px-0",
    heightClass: "h-fit",
  },
]

const defaultLayout = {
  className: "col-span-12 md:col-span-6 xl:col-span-4",
  mediaClassName: "h-[220px]",
  paddingClass: "px-0",
  heightClass: "h-fit",
}

const AllBlogs: React.FC = () => {
  const [active, setActive] = useState<"recent" | "popular">("recent")
  const [showAll, setShowAll] = useState(false)

  const onTabChange = () => {
    setActive((prev) => (prev === "recent" ? "popular" : "recent"))
    setShowAll(false) // reset pagination when switching tabs
  }

  const filteredBlogs = blogData.filter((blog) => blog.status === active)

  // ✅ Show only 8 if not expanded
  const visibleRecords = showAll ? filteredBlogs : filteredBlogs.slice(0, 8)

  return (
    <section className="wrapper features-core-opretions">
      {/* Heading */}
      <div className="bg-white mt-20 md:mt-28 lg:mt-0">
        <div className="flex finance-reporting-shadow items-end md:items-center flex-col gap-5 justify-end md:flex-row md:justify-between">
          <div className="flex flex-col sm:flex-row justify-between md:justify-start gap-3 w-full lg:w-fit items-center md:gap-x-[60px]">
            <h1 className="font-onest font-semibold text-[#231F20] text-[27px] sm:text-4xl md:text-[40px] lg:text-5xl leading-9 sm:leading-[48px] lg:leading-[60px] lg:max-w-4xl">
              Blogs
            </h1>
            <div className="w-full md:w-auto max-w-xl mt-4 md:mt-0">
              <div className="flex items-center bg-white px-3 rounded-full overflow-hidden shadow-sm">
                <InputField
                  placeholder="Search here..."
                  type="email"
                  rounded="left"
                  py="py-[10px]"
                  px="px-1"
                />
                <Image
                  src="/assets/header-images/search-icon.svg"
                  alt="Search"
                  className="cursor-pointer"
                  width={16}
                  height={12}
                />
              </div>
            </div>
          </div>
          <div className="w-full  sm:w-[300px] sm:flex sm:items-center sm:justify-end">
            <SmallTabs activeTab={active} onTabChange={onTabChange} variant="tabs" />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-12 gap-6 lg:mt-20 mt-10">
        {visibleRecords.map((feature, i) => {
          const layout = layoutClasses[i] || defaultLayout
          return (
            <FeatureCard
              key={i}
              title={feature.heading}
              authorName={feature.author}
              imageSrc={feature.blogImg}
              className={layout.className}
              mediaClassName={layout.mediaClassName}
              heightClass={layout.heightClass}
              paddingClass={layout.paddingClass}
              truncateTitle
            />
          )
        })}
      </div>

      {/* View More Button */}
      {filteredBlogs.length > 8 && (
        <div className="md:mt-7 mt-5 flex items-center justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="bg-[#795CF5] text-white border border-transparent hover:bg-transparent hover:border-[#795CF5] hover:text-[#795CF5] font-onest font-semibold text-base px-[60px] py-5 rounded-full transition"
          >
            {showAll ? "Load Less" : "Load More"}
          </button>
        </div>
      )}
    </section>
  )
}

export default AllBlogs
