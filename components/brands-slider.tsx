"use client"
import { useLanguage } from "@/contexts/language-context"

// Swiper components and modules
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

// Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function BrandsSlider() {
  const { t } = useLanguage()

  const brands = [
    {
      name: "Toyota",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "BMW",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Mercedes-Benz",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Audi",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Honda",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Nissan",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Ford",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Volkswagen",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Hyundai",
      logo: "/placeholder.svg?height=80&width=120",
    },
    {
      name: "Kia",
      logo: "/placeholder.svg?height=80&width=120",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t("trusted.brands")}</h2>
          <p className="text-xl text-gray-600">
            {t("language") === "ar"
              ? "نتعامل مع أفضل العلامات التجارية العالمية"
              : "We work with the world's leading automotive brands"}
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-brands",
              prevEl: ".swiper-button-prev-brands",
            }}
            pagination={{
              el: ".swiper-pagination-brands",
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1280: {
                slidesPerView: 6,
              },
            }}
            className="brands-swiper"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100">
                  <div className="flex items-center justify-center h-20">
                    <img
                      src={brand.logo || "/placeholder.svg"}
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="text-center mt-3">
                    <p className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">
                      {brand.name}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-brands absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="swiper-button-next-brands absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Custom Pagination */}
          <div className="swiper-pagination-brands flex justify-center mt-8"></div>
        </div>
      </div>

      <style jsx global>{`
        .brands-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 4px;
          transition: all 0.3s ease;
        }
        
        .brands-swiper .swiper-pagination-bullet-active {
          background: #2563eb;
          transform: scale(1.2);
        }
        
        .brands-swiper .swiper-slide {
          height: auto;
          display: flex;
          align-items: stretch;
        }
        
        .brands-swiper .swiper-slide > div {
          width: 100%;
        }
      `}</style>
    </section>
  )
}
