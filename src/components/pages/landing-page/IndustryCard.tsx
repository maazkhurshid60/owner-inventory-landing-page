import Image from 'next/image';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface IndustryCardProps {
    title: string;
    gradient: string;
    description?: string;
    imageUrl?: string;
    className?: string;
    onClick?: () => void;
    isHovered?: boolean;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
    title,
    gradient,
    description,
    imageUrl,
    className = '',
    onClick,
    isHovered = false
}) => {
    return (
        <div
            className={`relative rounded-[30px] shadow-sm overflow-hidden h-[360px] w-full cursor-pointer transition-all duration-300 ${className}`}
            style={{
                background: isHovered ? '#F3F3F3' : gradient,
            }}
            onClick={onClick}
        >
            {/* MAIN DEV */}
            <div className="relative w-full h-full p-8 flex flex-col justify-between z-10">
                <div className="flex-1 flex flex-col">
                    {/* TITLE */}
                    <h3 className={`text-[32px] font-medium font-['Onest'] leading-[1.2] transition-colors duration-300 ${isHovered ? 'text-[#333333]' : 'text-white'
                        }`}>
                        {title}
                    </h3>

                    {/* DESCRIPTION AND IMAGE */}
                    <div
                        className={`mt-6 transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            }`}
                        style={{
                            width: '510px',
                        }}
                    >
                        <div className="flex gap-6">
                            {description && (
                                <div className="flex-1 text-[#666666] text-[17px] font-['Onest'] leading-[1.6]">
                                    {description}
                                </div>
                            )}

                            {imageUrl && (
                                <div className="w-[210px] flex-shrink-0 -mt-12 pr-5">
                                    <Image
                                        src={imageUrl}
                                        alt={title}
                                        width={180}
                                        height={250}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* READ MORE BUTTON */}
                <div
                    className={`bg-white rounded-full h-[60px] flex items-center px-2 pl-6 -mt-90 transition-all duration-300 ease-in-out ${isHovered ? 'w-[180px] justify-between' : 'w-full justify-between'
                        }`}
                >
                    <span className="text-[#333333] text-[16px] font-semibold font-['Onest']">
                        Read more
                    </span>
                    <div
                        className="w-[48px] h-[48px] bg-[#F3F3F3] rounded-full flex justify-center items-center transition-all duration-300"
                        style={{
                            background: isHovered ? gradient : '#F3F3F3',
                        }}
                    >
                        <ArrowUpRight
                            className={`w-5 h-5 transition-all duration-300 ${isHovered ? 'text-white rotate-45' : 'text-[#333333]'
                                }`}
                        />
                    </div>
                </div>
            </div>

            {/* BOTTOM CIRCLE - HIDDEN ON HOVER */}
            <div className={`absolute -left-[50px] bottom-[90px] w-[150px] h-[150px] opacity-20 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-20'
                }`}>
                <div className="absolute inset-0 border-[10px] border-white rounded-full" />
            </div>
            <div className={`absolute -left-[45px] bottom-[100px] w-[120px] h-[120px] opacity-10 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-10'
                }`}>
                <div className="absolute inset-0 bg-white rounded-full" />
            </div>

            {/* TOP CIRCLE - HIDDEN ON HOVER */}
            <div className={`absolute -right-[80px] -top-[100px] w-[230px] h-[220px] opacity-20 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-20'
                }`}>
                <div className="absolute inset-0 border-[12px] border-white rounded-full" />
            </div>
        </div>
    );
};

export default IndustryCard;