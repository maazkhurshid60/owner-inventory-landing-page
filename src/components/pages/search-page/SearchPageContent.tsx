"use client";
import { useState, useEffect } from "react";
import CalltoActionBottom from "@/components/pages/landing-page/CalltoActionBottom";
import FaqSection from "@/components/pages/landing-page/FAQSection";
import SearchField from "@/components/pages/navbar/SearchField";
import RelatedFeatures from "@/components/pages/search-page/RelatedFeatures";
import SearchRecords from "@/components/pages/search-page/SearchRecords";
import { useSearchAnimation } from "@/hooks/useSearchAnimation";

export default function SearchPageContent({ q }: { q: string }) {
    const [searchQuery, setSearchQuery] = useState(q);

     useSearchAnimation();

    useEffect(() => {
        setSearchQuery(q);
    }, [q]);

    return (
        <>
            <div className="wrapper">
                <div className="top-section md:h-6 h-8"></div>
            </div>
            <div className="wrapper">
                <div className="mt-20">
                    <SearchField
                        variant="page"
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                </div>
            </div>
            <section className="mt-10 md:mt-20 lg:mt-14">
                <div className="wrapper">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-14 lg:gap-24">
                        <SearchRecords />
                        <RelatedFeatures />
                    </div>
                </div>
            </section>
            <section>
                <FaqSection />
                <CalltoActionBottom />
            </section>
        </>
    );
}
