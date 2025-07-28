"use client";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award } from "lucide-react";
import Link from "next/link";

// Swiper components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  const { language, t } = useLanguage();

  const slides = [
    {
      id: 1,
      title: {
        en: "Premium Auto Parts",
        ar: "قطع غيار السيارات الممتازة",
      },
      subtitle: {
        en: "Discover thousands of genuine auto parts for all vehicle makes and models. Quality guaranteed, fast delivery, competitive prices.",
        ar: "اكتشف آلاف قطع الغيار الأصلية لجميع ماركات وموديلات المركبات. جودة مضمونة، توصيل سريع، أسعار تنافسية.",
      },
      // image: "/placeholder.svg?height=600&width=800",
      image: "/h1.jpg",
      badge: {
        en: "50,000+ Parts Available",
        ar: "أكثر من 50,000 قطعة متوفرة",
      },
      quality: {
        en: "Quality Guaranteed",
        ar: "جودة مضمونة",
      },
    },
    {
      id: 2,
      title: {
        en: "Engine Parts Specialists",
        ar: "متخصصون في قطع المحرك",
      },
      subtitle: {
        en: "From pistons to timing belts, we have everything you need to keep your engine running smoothly. Professional grade parts with warranty.",
        ar: "من المكابس إلى أحزمة التوقيت، لدينا كل ما تحتاجه للحفاظ على تشغيل محركك بسلاسة. قطع احترافية مع ضمان.",
      },
      // image: "/placeholder.svg?height=600&width=800",
      image:
        "https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2025/05/21104410/CRANKSHAFTAR11092021-1024x640-1.jpg",
      badge: {
        en: "Engine Specialists",
        ar: "متخصصو المحركات",
      },
      quality: {
        en: "OEM Quality",
        ar: "جودة أصلية",
      },
    },
    {
      id: 3,
      title: {
        en: "Brake System Excellence",
        ar: "تميز في أنظمة الفرامل",
      },
      subtitle: {
        en: "Safety first with our premium brake pads, rotors, and calipers. Tested for performance and reliability on all road conditions.",
        ar: "الأمان أولاً مع فحمات الفرامل والأقراص والكاليبرات الممتازة. مختبرة للأداء والموثوقية في جميع ظروف الطريق.",
      },
      // image: "/placeholder.svg?height=600&width=800",
      image:
        "https://s.alicdn.com/@sc04/kf/H1913f62a8aa8416dac4aec5315e3325a2.jpg",
      badge: {
        en: "Safety Certified",
        ar: "معتمد للأمان",
      },
      quality: {
        en: "Performance Tested",
        ar: "مختبر الأداء",
      },
    },
    {
      id: 4,
      title: {
        en: "Electrical & Lighting",
        ar: "الكهرباء والإضاءة",
      },
      subtitle: {
        en: "Illuminate your path with our LED headlights, alternators, and electrical components. Modern technology for enhanced visibility and performance.",
        ar: "أضئ طريقك بمصابيح LED والمولدات والمكونات الكهربائية. تقنية حديثة لتحسين الرؤية والأداء.",
      },
      // image: "/placeholder.svg?height=600&width=800",
      image: "https://technolive.live/wp-content/uploads/2021/12/666.jpg",
      badge: {
        en: "LED Technology",
        ar: "تقنية LED",
      },
      quality: {
        en: "Energy Efficient",
        ar: "موفر للطاقة",
      },
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        navigation={{
          nextEl: ".hero-swiper-button-next",
          prevEl: ".hero-swiper-button-prev",
        }}
        pagination={{
          el: ".hero-swiper-pagination",
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} hero-pagination-bullet"></span>`,
        }}
        className="hero-swiper h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white h-full overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-40"></div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-pulse"></div>
                <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-white rounded-full animate-pulse delay-2000"></div>
              </div>

              <div className="container mx-auto px-4 relative z-10 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-20">
                  <div
                    className={`${language === "ar" ? "text-right" : "text-left"} animate-fade-in-up`}
                  >
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      {language === "ar" ? slide.title.ar : slide.title.en}
                    </h1>
                    <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                      {language === "ar"
                        ? slide.subtitle.ar
                        : slide.subtitle.en}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/shop">
                        <Button
                          size="lg"
                          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                          {t("hero.shop.now")}
                          <ArrowRight
                            className={`w-5 h-5 ${language === "ar" ? "mr-2 rotate-180" : "ml-2"}`}
                          />
                        </Button>
                      </Link>
                      <Link href="/categories">
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 bg-transparent transform hover:scale-105 transition-all duration-300"
                        >
                          {t("hero.view.catalog")}
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="relative animate-fade-in-right">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={slide.image || "/placeholder.svg"}
                        alt={
                          language === "ar" ? slide.title.ar : slide.title.en
                        }
                        className="w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Floating Stats Card */}
                    <div
                      className={`absolute -bottom-6 bg-yellow-500 text-black p-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                        language === "ar" ? "-right-6" : "-left-6"
                      }`}
                    >
                      <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                      <div className="text-2xl font-bold">
                        {language === "ar" ? slide.badge.ar : slide.badge.en}
                      </div>
                      <div className="w-full h-1 bg-black/20 rounded-full mt-2">
                        <div className="w-4/5 h-full bg-black/40 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Floating Quality Badge */}
                    <div
                      className={`absolute top-6 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-3 rounded-full shadow-lg ${
                        language === "ar" ? "left-6" : "right-6"
                      }`}
                    >
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Award className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold">
                          {language === "ar"
                            ? slide.quality.ar
                            : slide.quality.en}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="hero-swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div className="hero-swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      {/* Custom Pagination */}
      <div className="hero-swiper-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 rtl:space-x-reverse"></div>

      <style jsx global>{`
        .hero-swiper .hero-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          opacity: 1;
          margin: 0 4px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .hero-swiper .hero-pagination-bullet-active {
          background: #eab308;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(234, 179, 8, 0.5);
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out 0.3s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-swiper .swiper-slide {
          height: 100vh;
          min-height: 600px;
        }

        @media (max-width: 768px) {
          .hero-swiper .swiper-slide {
            height: 100vh;
            min-height: 500px;
          }
        }
      `}</style>
    </section>
  );
}
