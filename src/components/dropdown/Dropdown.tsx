// components/Dropdown.tsx
import { useState, useRef, useEffect } from 'react';

interface DropdownItem {
  label: string;
  value: string;
  onClick?: () => void;
}

interface DropdownProps {
  bgColor?: string;
  textColor?: string;
  isBorder?: boolean;
  buttonText: string;
  items: DropdownItem[];
  position?: 'left' | 'right';
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  bgColor = 'black',
  textColor = 'white',
  isBorder = false,
  buttonText,
  items,
  position = 'left',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Desktop hover handlers
  const handleMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 150); // Small delay to prevent accidental closing
    }
  };

  // Mobile click handler
  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
    // On desktop, click also works as a fallback
    else {
      setIsOpen(!isOpen);
    }
  };

  const handleItemClick = (item: DropdownItem) => {
    item.onClick?.();
    setIsOpen(false);
  };

  const getButtonClasses = () => {
    const baseClasses = `px-4 py-2.5 md:px-5 md:py-3 border border-transparent lg:px-[30px] lg:py-5 flex items-center justify-center text-sm md:text-base font-onest font-semibold rounded-full hover:text-[#231F20] hover:bg-transparent transition-colors duration-300`;
    
    return baseClasses;
  };

  return (
    <div 
      ref={dropdownRef} 
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dropdown Button */}
      <button
        type="button"
        className={getButtonClasses()}
        style={{
          backgroundColor: `var(--${bgColor}, ${bgColor})`,
          color: `var(--${textColor}, ${textColor})`,
          border: (isOpen && isBorder) ? `1px solid var(--${bgColor}, ${bgColor})` : '1px solid transparent',
        }}
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {buttonText}
        {/* Chevron Icon */}
        <svg
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute ${
            position === 'right' ? 'right-0' : 'left-0'
          } mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ${
            !isMobile ? 'cursor-pointer' : ''
          }`}
          role="menu"
          aria-orientation="vertical"
          onMouseEnter={() => {
            if (!isMobile && timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
          }}
          onMouseLeave={() => {
            if (!isMobile) {
              timeoutRef.current = setTimeout(() => {
                setIsOpen(false);
              }, 150);
            }
          }}
        >
          <div className="py-1">
            {items.map((item, index) => (
              <button
                key={index}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-left transition-colors duration-150"
                role="menuitem"
                onClick={() => handleItemClick(item)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;