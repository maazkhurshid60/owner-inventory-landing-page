// app/components/OffcanvasMenu.tsx
"use client";

import Image from "next/image";
import { Children, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { createPortal } from "react-dom";
import { companyItems } from "./dropdownItems/Companylist";
import { title } from "process";
import {
  resourcesDetailsMap,
  resourcesItems,
} from "./dropdownItems/ResourceItemlist";
import {
  industriesItems,
  industryDetailsMap,
} from "./dropdownItems/IndustryItemslist";
import {
  FeatureList,
  featuresDetailsMap,
  featuresItems,
} from "./dropdownItems/Featureslist";

type Panel =
  | "features"
  | "industries"
  | "resources"
  | "company"
  | "profile"
  | null;

interface OffcanvasMenuProps {
  open: boolean;
  onClose: () => void;
  /** Any valid tailwind width or arbitrary value; e.g. "w-1/2" or "70vw" */
  width?: string; // e.g. "70vw" | "50vw"
}

export default function OffcanvasMenu({
  open,
  onClose,
  width = "70vw",
}: OffcanvasMenuProps) {
  const [activePanel, setActivePanel] = useState<Panel>(null);
  const [mounted, setMounted] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Mount guard for portal
  useEffect(() => setMounted(true), []);

  // Focus mgmt + ESC + lock scroll
  useEffect(() => {
    if (!open) {
      setActivePanel(null);
      return;
    }
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  // Click overlay to close
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!open) return;
      const el = containerRef.current;
      if (!el) return;
      const target = e.target as HTMLElement;
      const clickedInside = el.contains(target);
      const isOverlay = target.dataset?.overlay === "true";
      if (!clickedInside && isOverlay) onClose();
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  const navButton =
    "menu-btn flex items-center justify-between w-full px-5 py-3 text-sm font-semibold text-[#231F20] bg-white border border-[#D9D9D9] rounded-full font-onest hover:bg-gray-100 hover:border-[#795CF5]";
  const listItem = "relative mb-0";

  const panelData: any = {
    features: {
      title: "Features",
      links: featuresItems,
      children: featuresDetailsMap,
    },
    industries: {
      title: "Industries",
      links: industriesItems,
      children: industryDetailsMap,
    },
    resources: {
      title: "Resources",
      links: resourcesItems,
      children: resourcesDetailsMap,
    },
    company: { title: "company", links: companyItems },
    profile: {
      title: "Profile",
      links: [
        { title: "Account", href: "#" },
        { title: "Settings", href: "#" },
        { title: "Billing", href: "#" },
        { title: "Sign out", href: "#" },
      ],
    },
  };

  // Build the drawer width class. If you pass "w-1/2" it will use Tailwind class.

  const drawer = (
    <>
      {/* Full-screen overlay (independent of header) */}
      <div
        data-overlay="true"
        className={clsx(
          "fixed inset-0 bg-black/30 transition-opacity duration-300 ease-in-out z-[9998] md:hidden",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
      />
      {/* Drawer */}
      <aside
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={clsx(
          "fixed top-0 right-0 h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out w-64 z-[9999] md:hidden overflow-y-auto scrollbar-thin scrollbar-thumb-[#D9D9D9] scrollbar-track-transparent", // optional tailwind width e.g. w-1/2
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-4 flex flex-col gap-5">
          <button
            ref={closeBtnRef}
            id="close-btn"
            onClick={onClose}
            aria-label="Close menu"
            className="p-1 w-fit rounded focus:outline-none focus:ring-2 focus:ring-[#231F20]/50"
          >
            <Image
              src="/assets/header-images/cross-btn.svg"
              alt="Close"
              width={16}
              height={16}
              priority={false}
            />
          </button>

          {/* Search bar */}
          <div
            id="search-wrapper"
            className={clsx(
              "relative w-full max-w-sm",
              activePanel ? "hidden" : "flex"
            )}
          >
            <input
              type="text"
              placeholder="Search"
              className="w-full pr-10 pl-4 py-2 border-b border-[#231F20] focus:rounded-lg focus:border focus:outline-none focus:ring-[#231F20] text-base placeholder:text-[#231F20] placeholder:font-semibold text-[#231F20] font-semibold focus:border-[#231F20]"
            />
            <button
              aria-label="Search"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 cursor-pointer"
            >
              <Image
                src="/assets/header-images/search-icon.svg"
                alt="Search"
                width={14}
                height={14}
              />
            </button>
          </div>

          {/* Dynamic back button */}
          <button
            id="dynamic-back-btn"
            onClick={() => setActivePanel(null)}
            className={clsx(
              "items-center justify-start gap-3 back-btn text-base text-[#201A1A] font-semibold py-2 border-b border-[#231F20] text-left flex",
              activePanel ? "visible" : "hidden"
            )}
          >
            <Image
              src="/assets/header-images/back-btn.svg"
              alt="Back"
              width={12}
              height={12}
              className="inline"
            />
            Back
          </button>
        </div>

        <nav className="p-4">
          {/* Main Menu */}
          <ul
            id="main-menu"
            className={clsx(
              "flex-col gap-3 rounded",
              activePanel ? "hidden" : "flex"
            )}
          >
            <li className={listItem}>
              <button
                onClick={() => setActivePanel("features")}
                className={navButton}
                aria-expanded={activePanel === "features"}
                aria-controls="features-content"
              >
                Features
                <Image
                  src="/assets/header-images/mobile-nav-icon.svg"
                  width={7}
                  height={7}
                  alt="Open"
                />
              </button>
            </li>
            <li className={listItem}>
              <button
                onClick={() => setActivePanel("industries")}
                className={navButton}
                aria-expanded={activePanel === "industries"}
                aria-controls="industries-content"
              >
                Industries
                <Image
                  src="/assets/header-images/mobile-nav-icon.svg"
                  width={7}
                  height={7}
                  alt="Open"
                />
              </button>
            </li>
            <li className={listItem}>
              <a
                href="#"
                className="flex items-center justify-between px-5 py-3 text-sm font-semibold text-[#231F20] bg-white border border-[#D9D9D9] hover:bg-gray-100 hover:border-[#795CF5] active:bg-gray-100 active:border-[#795CF5] rounded-full font-onest"
              >
                Pricing
              </a>
            </li>
            <li className={listItem}>
              <button
                onClick={() => setActivePanel("resources")}
                className={navButton}
                aria-expanded={activePanel === "resources"}
                aria-controls="resources-content"
              >
                Resources
                <Image
                  src="/assets/header-images/mobile-nav-icon.svg"
                  width={7}
                  height={7}
                  alt="Open"
                />
              </button>
            </li>
            <li className={listItem}>
              <button
                onClick={() => setActivePanel("company")}
                className={navButton}
                aria-expanded={activePanel === "company"}
                aria-controls="company-content"
              >
                Company
                <Image
                  src="/assets/header-images/mobile-nav-icon.svg"
                  width={7}
                  height={7}
                  alt="Open"
                />
              </button>
            </li>
            <li className={listItem}>
              <button
                onClick={() => setActivePanel("profile")}
                className={navButton}
                aria-expanded={activePanel === "profile"}
                aria-controls="profile-content"
              >
                Profile
                <Image
                  src="/assets/header-images/mobile-nav-icon.svg"
                  width={7}
                  height={7}
                  alt="Open"
                />
              </button>
            </li>
          </ul>

          {/* Sub-panel */}
          {activePanel && (
            <div
              id={`${activePanel}-content`}
              className="flex flex-col gap-2 animate-in fade-in zoom-in-95"
            >
              <ul className="space-y-6">
                {panelData[activePanel].links.map(
                  (item: any, index: number) => {
                    const isOpen = openIndex === index;
                    const detailsMap = panelData[activePanel].children || {};
                    const details =
                      detailsMap[item.key] ?? detailsMap[item.title] ?? null;

                    // works for string[] or object[]
                    const hasDetails =
                      (Array.isArray(details) && details.length > 0) ||
                      (details &&
                        typeof details === "object" &&
                        Object.keys(details).length > 0);

                    return (
                      <li key={item.key || item.title} className="w-full">
                        <a
                          href={item.url || "#"}
                          className={`flex items-center px-4 py-4 border rounded-xl hover:bg-gray-100 ${
                            isOpen
                              ? "border-[#795CF5] bg-gray-100"
                              : "border-[#D9D9D9]"
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            if (hasDetails) toggleIndex(index);
                          }}
                          aria-expanded={isOpen}
                          aria-controls={`${activePanel}-panel-${index}`}
                        >
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={16}
                            height={16}
                          />

                          <span className="ml-2 text-sm font-[500] text-[#231F20] hover:font-semibold flex-1">
                            {item.title}
                          </span>

                          {hasDetails &&
                            (isOpen ? (
                              <span
                                className="submenu-icon-minus"
                                aria-hidden="true"
                              >
                                  <img
                                  src="/assets/header-dropdown-images/arrow-up-icon.svg"
                                  alt="expand"
                                  loading="lazy"
                                  className="h-3 w-3"
                                />
                             
                              </span>
                            ) : (
                              <span
                                className="submenu-icon-plus"
                                aria-hidden="true"
                              >
                                 <img
                                  src="/assets/header-dropdown-images/arrow-down-icon.svg"
                                  alt="collapse"
                                  loading="lazy"
                                  className="h-3 w-3"
                                />
                              </span>
                            ))}
                        </a>

                        {/* Dropdown content */}
                       {hasDetails && (
  <div
    id={`${activePanel}-panel-${index}`}
    className={`overflow-hidden transition-all duration-200 ${
      isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <div className="px-0 pt-3 pb-2">
      {Array.isArray(details) ? (
        <ul className="pl-4 space-y-4"> {/* spacing between items */}
          {details.map((d: any, i: number) => {
            if (typeof d === "string") {
              return (
                <li
                  key={`${item.key || item.title}-str-${d}-${i}`}
                  className="text-xs text-[#231F20] leading-relaxed"
                >
                  {d}
                </li>
              );
            }
            const text = d?.title ?? d?.label ?? String(d);
            const href = d?.url || d?.href || "#";
            return (
              <li
                key={`${item.key || item.title}-obj-${d?.key || text}-${i}`}
                className="text-xs text-[#231F20] leading-relaxed"
              >
                {d?.url || d?.href ? (
                  <a href={href} className="hover:underline">
                    {text}
                  </a>
                ) : (
                  text
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <pre className="text-[11px] text-[#231F20]/80 bg-gray-50 p-2 rounded">
          {JSON.stringify(details, null, 2)}
        </pre>
      )}
    </div>
  </div>
)}

                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          )}
        </nav>
      </aside>
    </>
  );

  // Render into body so it covers the whole page regardless of parent layout
  if (!mounted) return null;
  return createPortal(drawer, document.body);
}
