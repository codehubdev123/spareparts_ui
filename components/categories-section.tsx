"use client";

import {
  Car,
  Wrench,
  Zap,
  Settings,
  Shield,
  Fuel,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const categories = [
  {
    id: 1,
    nameAr: "قطع غيار المحرك",
    nameEn: "Engine Parts",
    icon: Settings,
    itemCount: 2450,
    gradient: "from-blue-400 to-blue-600",
    hoverGradient: "from-blue-500 to-blue-700",
    href: "/categories/engine-parts",
  },
  {
    id: 2,
    nameAr: "قطع الفرامل",
    nameEn: "Brake Parts",
    icon: Shield,
    itemCount: 1890,
    gradient: "from-cyan-400 to-blue-500",
    hoverGradient: "from-cyan-500 to-blue-600",
    href: "/categories/brake-parts",
  },
  {
    id: 3,
    nameAr: "نظام التعليق",
    nameEn: "Suspension System",
    icon: Car,
    itemCount: 1650,
    gradient: "from-sky-400 to-blue-500",
    hoverGradient: "from-sky-500 to-blue-600",
    href: "/categories/suspension",
  },
  {
    id: 4,
    nameAr: "النظام الكهربائي",
    nameEn: "Electrical System",
    icon: Zap,
    itemCount: 1420,
    gradient: "from-indigo-400 to-blue-600",
    hoverGradient: "from-indigo-500 to-blue-700",
    href: "/categories/electrical",
  },
  {
    id: 5,
    nameAr: "نظام الوقود",
    nameEn: "Fuel System",
    icon: Fuel,
    itemCount: 980,
    gradient: "from-purple-400 to-blue-500",
    hoverGradient: "from-purple-500 to-blue-600",
    href: "/categories/fuel-system",
  },
  {
    id: 6,
    nameAr: "أدوات الصيانة",
    nameEn: "Maintenance Tools",
    icon: Wrench,
    itemCount: 720,
    gradient: "from-teal-400 to-blue-500",
    hoverGradient: "from-teal-500 to-blue-600",
    href: "/categories/tools",
  },
  {
    id: 7,
    nameAr: "قطع التبريد",
    nameEn: "Cooling System",
    icon: Settings,
    itemCount: 840,
    gradient: "from-blue-500 to-indigo-600",
    hoverGradient: "from-blue-600 to-indigo-700",
    href: "/categories/cooling",
  },
  {
    id: 8,
    nameAr: "قطع الإطارات",
    nameEn: "Tires & Wheels",
    icon: Car,
    itemCount: 580,
    gradient: "from-cyan-500 to-blue-600",
    hoverGradient: "from-cyan-600 to-blue-700",
    href: "/categories/tires",
  },
];

interface CategoriesSectionProps {
  direction?: "rtl" | "ltr";
  language?: "ar" | "en";
}

export default function CategoriesSection({
  direction = "rtl",
  language = "ar",
}: CategoriesSectionProps) {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperType>();

  const isRTL = direction === "rtl";
  const isArabic = language === "ar";

  const texts = {
    ar: {
      shopByCategory: "تسوق حسب الفئة",
      exploreCategories: "قطع غيار السيارات",
      description:
        "اكتشف آلاف قطع الغيار الأصلية والمتوافقة لجميع أنواع السيارات",
      shopNow: "تسوق الآن",
      viewAll: "عرض جميع قطع الغيار",
      products: "قطعة",
    },
    en: {
      shopByCategory: "Shop by Category",
      exploreCategories: "Car Spare Parts",
      description:
        "Discover thousands of genuine and compatible spare parts for all vehicle types",
      shopNow: "Shop Now",
      viewAll: "View All Spare Parts",
      products: "parts",
    },
  };

  const currentTexts = texts[language];
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <section
      className={`py-16 px-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 relative overflow-hidden ${isRTL ? "rtl" : "ltr"}`}
      dir={direction}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 ${isRTL ? "text-right" : "text-left"}`}
        >
          <div className="animate-fadeInUp">
            <div
              className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg border border-blue-200/50`}
            >
              <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></span>
              <span
                className={`text-sm font-semibold text-blue-700 ${isArabic ? "font-arabic" : ""}`}
              >
                {currentTexts.shopByCategory}
              </span>
            </div>
          </div>

          <div className="animate-fadeInUp delay-200">
            <h2
              className={`text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 via-cyan-700 to-indigo-800 bg-clip-text text-transparent mb-6 ${isArabic ? "font-arabic" : ""}`}
            >
              {currentTexts.exploreCategories}
            </h2>
          </div>

          <div className="animate-fadeInUp delay-400">
            <p
              className={`text-lg text-blue-700/80 max-w-2xl mx-auto leading-relaxed ${isArabic ? "font-arabic" : ""}`}
            >
              {currentTexts.description}
            </p>
          </div>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`group bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl p-4 rounded-full transition-all duration-300 transform hover:scale-110 border border-blue-200/50 ${isRTL ? "order-2" : "order-1"}`}
          >
            <ChevronLeft className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`group bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl p-4 rounded-full transition-all duration-300 transform hover:scale-110 border border-blue-200/50 ${isRTL ? "order-1" : "order-2"}`}
          >
            <ChevronRight className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
          </button>
        </div>

        {/* Categories Slider */}
        <div className="animate-fadeInUp delay-600">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            className="pb-8"
          >
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              const categoryName = isArabic ? category.nameAr : category.nameEn;

              return (
                <SwiperSlide key={category.id}>
                  <div
                    className={`animate-slideInUp delay-${index * 100}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <a
                      href={category.href}
                      className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer border border-blue-200/50 block"
                      onMouseEnter={() => setHoveredCategory(category.id)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      {/* Floating Animation Elements */}
                      <div className="absolute top-3 right-3 w-2 h-2 bg-blue-400/60 rounded-full animate-ping"></div>
                      <div className="absolute top-6 right-6 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse delay-500"></div>

                      {/* Icon Container */}
                      <div
                        className={`relative mb-4 mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${
                          hoveredCategory === category.id
                            ? category.hoverGradient
                            : category.gradient
                        } flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 text-white group-hover:animate-pulse" />

                        {/* Icon Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                      </div>

                      {/* Category Name */}
                      <h3
                        className={`text-lg font-bold text-blue-800 mb-3 text-center leading-tight group-hover:text-cyan-700 transition-all duration-300 ${isArabic ? "font-arabic" : ""}`}
                      >
                        {categoryName}
                      </h3>

                      {/* Item Count */}
                      <p
                        className={`text-sm text-blue-600/80 text-center mb-4 ${isArabic ? "font-arabic" : ""}`}
                      >
                        {category.itemCount.toLocaleString()}{" "}
                        {currentTexts.products}
                      </p>

                      {/* Shop Now Link */}
                      <div
                        className={`flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-4 py-2 rounded-lg transition-all duration-300 group-hover:shadow-lg ${isArabic ? "font-arabic" : ""}`}
                      >
                        <span>{currentTexts.shopNow}</span>
                        <ChevronIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>

                      {/* Hover Effect Border */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-300/50 rounded-2xl transition-all duration-500"></div>

                      {/* Animated Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 group-hover:from-blue-400/10 to-transparent rounded-2xl transition-all duration-500"></div>
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fadeInUp delay-800">
          <button
            className={`group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 hover:from-blue-700 hover:via-cyan-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-blue-400/30 ${isArabic ? "font-arabic" : ""}`}
          >
            <span>{currentTexts.viewAll}</span>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
              <ChevronIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>

            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
