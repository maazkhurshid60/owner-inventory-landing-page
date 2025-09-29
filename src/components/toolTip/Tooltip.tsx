import React from 'react'
interface ToolTipProps {
    text: string | undefined
    isComparisonToolTip?: boolean
}
const Tooltip: React.FC<ToolTipProps> = ({ text, isComparisonToolTip = false }) => {
    return (
        <div className={`${isComparisonToolTip
            ?
            "absolute  left-[-20px] bottom-[120%] z-[999] hidden group-hover:flex flex-col items-start w-auto"
            :
            "absolute left-[50%] -translate-x-[50%] top-[110%] z-[999] hidden group-hover:flex flex-col items-left"}`}>
            {!isComparisonToolTip && <div className="w-2 h-2 rotate-45 bg-white border-l border-t border-[#795DF5] -mb-1 mx-auto"></div>}
            <div
                className={`${isComparisonToolTip
                    ? "rounded-xl border border-[#795DF5] bg-white px-4 py-2 text-xs leading-4 font-normal text-[#231F20] shadow-lg w-[150px] md:w-[200px] lg:w-[250px]"
                    : "rounded-xl border border-[#795DF5] bg-white px-4 py-2 text-sm whitespace-nowrap leading-4 font-semibold text-[#231F20] shadow-lg w-fit"
                    }`}
            >
                {text}
            </div>

            {isComparisonToolTip &&
                <div className="w-2 h-2 rotate-45 bg-white border-b border-r border-[#795DF5] -mt-1 ms-5"></div>
            }

        </div>
    )
}

export default Tooltip