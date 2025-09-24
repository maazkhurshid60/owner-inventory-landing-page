import CalltoActionBottom from "@/components/pages/landing-page/CalltoActionBottom";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import RelatedFeatures from "@/components/pages/search-page/RelatedFeatures";
import SearchRecords from "@/components/pages/search-page/SearchRecords";
import Image from "next/image";

export default function SearchPage() {
  return (
    <>
      <div className="wrapper">
        <div className="top-section md:h-6 h-8"></div>
      </div>
    <section className="mt-10 md:mt-20 lg:mt-28">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-14 lg:gap-24">
          <SearchRecords />
          <RelatedFeatures />
        </div>
      </div>
    </section>
    <section>
        <FaqSection/>
          <CalltoActionBottom/>
    </section>
    </>
  );
}
