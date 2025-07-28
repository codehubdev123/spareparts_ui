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

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";
import { useState } from "react";

export default function CategoriesPage() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const { language, t } = useLanguage();
  const ChevronIcon = true ? ChevronLeft : ChevronRight;
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
    {
      id: 9,
      nameAr: "قطع الإطارات",
      nameEn: "Tires & Wheels",
      icon: Car,
      itemCount: 580,
      gradient: "from-cyan-500 to-blue-600",
      hoverGradient: "from-cyan-600 to-blue-700",
      href: "/categories/tires",
    },
    {
      id: 10,
      nameAr: "قطع الإطارات",
      nameEn: "Tires & Wheels",
      icon: Car,
      itemCount: 580,
      gradient: "from-cyan-500 to-blue-600",
      hoverGradient: "from-cyan-600 to-blue-700",
      href: "/categories/tires",
    },
    {
      id: 11,
      nameAr: "قطع الإطارات",
      nameEn: "Tires & Wheels",
      icon: Car,
      itemCount: 580,
      gradient: "from-cyan-500 to-blue-600",
      hoverGradient: "from-cyan-600 to-blue-700",
      href: "/categories/tires",
    },
    {
      id: 12,
      nameAr: "قطع الإطارات",
      nameEn: "Tires & Wheels",
      icon: Car,
      itemCount: 580,
      gradient: "from-cyan-500 to-blue-600",
      hoverGradient: "from-cyan-600 to-blue-700",
      href: "/categories/tires",
    },
  ];

  const old_categories = [
    {
      id: "engine-parts",
      name: "Engine Parts",
      nameAr: "قطع المحرك",
      description: "Pistons, cylinders, gaskets, timing belts and more",
      descriptionAr: "مكابس، أسطوانات، جوانات، أحزمة التوقيت والمزيد",
      image: "/placeholder.svg?height=300&width=400",
      itemCount: 1250,
      color: "bg-red-500",
    },
    {
      id: "brake-system",
      name: "Brake System",
      nameAr: "نظام الفرامل",
      description: "Brake pads, rotors, calipers, brake fluid",
      descriptionAr: "فحمات فرامل، أقراص، كاليبرات، سائل فرامل",
      image: "/placeholder.svg?height=300&width=400",
      itemCount: 890,
      color: "bg-blue-500",
    },
    {
      id: "suspension",
      name: "Suspension System",
      nameAr: "نظام التعليق",
      description: "Struts, springs, shock absorbers, bushings",
      descriptionAr: "دعامات، نوابض، ممتصات صدمات، جلب",
      image: "/placeholder.svg?height=300&width=400",
      itemCount: 675,
      color: "bg-green-500",
    },
    {
      id: "electrical",
      name: "Electrical System",
      nameAr: "النظام الكهربائي",
      description: "Alternators, starters, batteries, wiring",
      descriptionAr: "مولدات، بادئات، بطاريات، أسلاك",
      image: "/placeholder.svg?height=300&width=400",
      itemCount: 1100,
      color: "bg-yellow-500",
    },
    {
      id: "filters",
      name: "Filters & Fluids",
      nameAr: "المرشحات والسوائل",
      description: "Air filters, oil filters, fuel filters, fluids",
      descriptionAr: "فلاتر هواء، فلاتر زيت، فلاتر وقود، سوائل",
      image: "/placeholder.svg?height=300&width=400",
      itemCount: 450,
      color: "bg-purple-500",
    },
    {
      id: "transmission",
      name: "Transmission",
      nameAr: "ناقل الحركة",
      description: "Gearboxes, clutches, transmission fluid",
      descriptionAr: "علب تروس، كلتشات، سائل ناقل الحركة",
      image: "/placeholder.svg?height=300&width=400",
      itemCount: 320,
      color: "bg-indigo-500",
    },
    {
      id: "cooling",
      name: "Cooling System",
      nameAr: "نظام التبريد",
      description: "Radiators, water pumps, thermostats, coolant",
      descriptionAr: "رادياتير، مضخات مياه، ثرموستات، سائل تبريد",
      image: "/placeholder.svg?height=300&width=400",
      itemCount: 280,
      color: "bg-cyan-500",
    },
    {
      id: "exhaust",
      name: "Exhaust System",
      nameAr: "نظام العادم",
      description: "Mufflers, catalytic converters, exhaust pipes",
      descriptionAr: "كواتم صوت، محولات حفازة، أنابيب عادم",
      image: "/placeholder.svg?height=300&width=400",
      itemCount: 195,
      color: "bg-orange-500",
    },
    {
      id: "lighting",
      name: "Lighting System",
      nameAr: "نظام الإضاءة",
      description: "Headlights, taillights, bulbs, LED kits",
      descriptionAr: "مصابيح أمامية، خلفية، لمبات، طقم LED",
      image: "/placeholder.svg?height=300&width=400",
      itemCount: 380,
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {t("categories.page.title")}
          </h1>
          <p className="text-xl text-blue-100">{t("categories.page.desc")}</p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              const categoryName = category.nameAr;
              return (
                <Card
                  key={category.id}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                >
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
                        className={`text-lg font-bold text-blue-800 mb-3 text-center leading-tight group-hover:text-cyan-700 transition-all duration-300 `}
                      >
                        {categoryName}
                      </h3>

                      {/* Item Count */}
                      <p
                        className={`text-sm text-blue-600/80 text-center mb-4`}
                      >
                        {category.itemCount.toLocaleString()} المنتجات
                      </p>

                      {/* Shop Now Link */}
                      <div
                        className={`flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-4 py-2 rounded-lg transition-all duration-300 group-hover:shadow-lg `}
                      >
                        <span>تسوق الان</span>
                        <ChevronIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>

                      {/* Hover Effect Border */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-300/50 rounded-2xl transition-all duration-500"></div>

                      {/* Animated Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 group-hover:from-blue-400/10 to-transparent rounded-2xl transition-all duration-500"></div>
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t("categories.popular")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("categories.popular.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.slice(0, 3).map((category) => (
              <div key={category.id} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={language === "ar" ? category.nameAr : category.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div
                    className={`absolute -bottom-2 -right-2 ${category.color} text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold`}
                  >
                    {categories.indexOf(category) + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {language === "ar" ? category.nameAr : category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.itemCount} {t("categories.available")}
                </p>
                <Link href={`/categories/${category.id}`}>
                  <Button variant="outline" className="bg-transparent">
                    {t("view.all")}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
