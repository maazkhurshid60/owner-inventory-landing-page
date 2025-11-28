'use client';

import React, { useState, useEffect } from 'react';
import MainHeading from '../typography/MainHeading';
import Paragraph from '../typography/Paragraph';
import IndustryCard from './IndustryCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const industries = [
    {
        title: 'Retail Stores',
        gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
        description: 'Barcode scanning, price overrides, and detailed sales reports help you move faster at the counter while keeping inventory and revenue under control.',
        image: '/assets/industry-type/retail-store.webp',
    },
    {
        title: 'Restaurant Types',
        gradient: 'linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)',
        description: 'Speed up service with quick-bill POS, manage tables and menus with ease, and track ingredients or stock levels in real-time.',
        image: '/assets/industry-type/restaurant.webp',
    },
    {
        title: 'Wholesalers',
        gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
        description: 'Handle bulk orders with customer-specific pricing, manage multi-location inventory, and keep fulfillment running efficiently.',
        image: '/assets/industry-type/whole-sale.webp',
    },
    {
        title: 'Pharmacies',
        gradient: 'linear-gradient(135deg, #7B61FF 0%, #634AE2 100%)',
        description: 'Ensure safety and compliance with batch tracking, expiry alerts, and detailed logs, all while managing walk-in sales effortlessly.',
        image: '/assets/industry-type/pharmacy.webp',
    },
    {
        title: 'Service Business',
        gradient: 'linear-gradient(135deg, #1AD1B9 0%, #13B49F 100%)',
        description: 'Track every size, color, and style with product variants, manage seasonal collections, and keep stock aligned across stores.',
        image: '/assets/industry-type/fashion.webp',
    },
];

const IndustryPosShowcase = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [slidesPerView, setSlidesPerView] = useState(4);

    // Handle responsive slides per view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesPerView(1);
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = Math.ceil(industries.length / slidesPerView);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className='max-w-[1600px] mx-auto px-4 py-16'>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div className="max-w-[600px]">
                    <MainHeading className="mb-4 text-[#333333] text-nowrap">
                        Built for Every Industry
                    </MainHeading>
                    <Paragraph className="text-[#666666] text-nowrap">
                        No matter what you sell, the Owners Inventory management program adapts to you.
                    </Paragraph>
                    <button className="mt-6 bg-[#7B61FF] text-white px-[63px] py-[20px] rounded-full font-medium hover:bg-[#634AE2] transition-colors cursor-pointer">
                        Explore Now
                    </button>
                </div>

                <div className="flex items-center gap-4 mt-8 md:mt-0">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 rounded-full px-4 cursor-pointer bg-white shadow-md flex items-center justify-center text-[#333333] hover:bg-gray-50 transition-colors"
                        aria-label="Previous slide"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>

                    <div className="flex gap-2">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full cursor-pointer ${index === currentSlide
                                    ? 'w-8 h-3 bg-[#1AD1B9]'
                                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="w-12 h-12 rounded-full px-4 cursor-pointer bg-white shadow-md flex items-center justify-center text-[#333333] hover:bg-gray-50 transition-colors"
                        aria-label="Next slide"
                    >
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="w-full overflow-hidden">
                <div
                    className="flex gap-6 transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`
                    }}
                >
                    {industries.map((industry, index) => {
                        const normalWidth = `calc((100% / ${slidesPerView}) - ${(24 * (slidesPerView - 1)) / slidesPerView}px)`;
                        const startIdx = currentSlide * slidesPerView;
                        const endIdx = startIdx + slidesPerView;
                        const isVisible = index >= startIdx && index < endIdx;
                        const relativeIndex = index - startIdx;
                        const expandAmount = isVisible && hoveredCard !== null && hoveredCard < relativeIndex ? 10 : 0;

                        return (
                            <div
                                key={index}
                                className="transition-all duration-300 ease-in-out"
                                style={{
                                    width: isVisible && hoveredCard === relativeIndex ? '560px' : normalWidth,
                                    flexShrink: 0,
                                    transform: `translateX(${expandAmount}px)`,
                                }}
                                onMouseEnter={() => isVisible && setHoveredCard(relativeIndex)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <IndustryCard
                                    title={industry.title}
                                    gradient={industry.gradient}
                                    description={industry.description}
                                    imageUrl={industry.image}
                                    isHovered={isVisible && hoveredCard === relativeIndex}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default IndustryPosShowcase;
