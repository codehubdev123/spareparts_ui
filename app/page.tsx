"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProductCard from "@/components/product-card";
import BrandsSlider from "@/components/brands-slider";
import HeroSlider from "@/components/hero-slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Shield, Headphones, Award } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";
import ProductCardItem from "@/components/ProductCardItem";
import CategoriesSection from "@/components/categories-section";

export default function HomePage() {
  const { language, t } = useLanguage();

  const categories = [
    {
      id: "engine",
      name: "Engine Parts",
      nameAr: "قطع المحرك",
      // image: "/placeholder.svg?height=200&width=400",
      image:
        "https://s.alicdn.com/@sc04/kf/H7744217a04124af2a28ebe7c0d6d3122J.jpg",
      color: "bg-red-500",
    },
    {
      id: "brake",
      name: "Brake System",
      nameAr: "نظام الفرامل",
      // image: "/placeholder.svg?height=200&width=400",
      image:
        "https://www.familyhandyman.com/wp-content/uploads/2023/09/Car-braking-system-GettyImages-1633787668_KSedit.jpg",
      color: "bg-blue-500",
    },
    {
      id: "suspension",
      name: "Suspension",
      nameAr: "نظام التعليق",
      // image: "/placeholder.svg?height=200&width=400",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsBCJ_KjTy_1OoHrShONOroFQiXtb4V0GHA&s",
      color: "bg-green-500",
    },
    {
      id: "electrical",
      name: "Electrical",
      nameAr: "النظام الكهربائي",
      // image: "/placeholder.svg?height=200&width=400",
      image:
        "https://technosofteng.com/wp-content/uploads/2022/11/IoT_Consulting_Services_5-min.jpg",
      color: "bg-yellow-500",
    },
    {
      id: "filters",
      name: "Filters",
      nameAr: "المرشحات",
      // image: "/placeholder.svg?height=200&width=400",
      image:
        "https://png.pngtree.com/thumb_back/fh260/background/20230526/pngtree-various-automotive-parts-with-oil-filters-for-cars-image_2637715.jpg",
      color: "bg-purple-500",
    },
    {
      id: "transmission",
      name: "Transmission",
      nameAr: "ناقل الحركة",
      // image: "/placeholder.svg?height=200&width=400",
      image:
        "https://spn-sta.spinny.com/blog/20220218225405/ezgif.com-gif-maker-2022-02-18T225341.589.jpg",
      color: "bg-indigo-500",
    },
  ];

  const featuredProducts = [
    {
      id: "1",
      name: "Premium Ceramic Brake Pads Set",
      nameAr: "مجموعة فحمات فرامل سيراميك ممتازة",
      price: 299,
      originalPrice: 399,
      // image: "/placeholder.svg?height=250&width=300",
      image: "/p5.jpg",
      imageActive: "/p55.png",
      discount: 25,
      rating: 5,
      reviews: 47,
    },
    {
      id: "2",
      name: "High Performance Air Filter",
      nameAr: "فلتر هواء عالي الأداء",
      price: 89,
      originalPrice: 129,
      // image: "/placeholder.svg?height=250&width=300",
      image: "/p1.webp",
      imageActive: "/p11.png",
      discount: 31,
      rating: 4,
      reviews: 32,
    },
    {
      id: "3",
      name: "LED Headlight Conversion Kit",
      nameAr: "طقم تحويل مصابيح LED أمامية",
      price: 599,
      originalPrice: 799,
      // image: "/placeholder.svg?height=250&width=300",
      image: "/p3.jpg",
      imageActive: "/p33.png",
      discount: 25,
      rating: 5,
      reviews: 89,
    },
    {
      id: "4",
      name: "Premium Oil Filter",
      nameAr: "فلتر زيت ممتاز",
      price: 45,
      originalPrice: 65,
      // image: "/placeholder.svg?height=250&width=300",
      image: "/p6.jpeg",
      imageActive: "/p66.png",
      discount: 31,
      rating: 4,
      reviews: 156,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t("feature.delivery")}
              </h3>
              <p className="text-gray-600">{t("feature.delivery.desc")}</p>
            </div>
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t("feature.quality")}
              </h3>
              <p className="text-gray-600">{t("feature.quality.desc")}</p>
            </div>
            <div className="text-center group">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                <Headphones className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t("feature.support")}
              </h3>
              <p className="text-gray-600">{t("feature.support.desc")}</p>
            </div>
            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t("feature.certified")}
              </h3>
              <p className="text-gray-600">{t("feature.certified.desc")}</p>
            </div>
          </div>
        </div>
      </section>
      <CategoriesSection />
      {/* Categories Section */}

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t("products.featured")}
            </h2>
            <p className="text-xl text-gray-600">{t("products.bestselling")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <>
                <ProductCardItem key={product.id} product={product} />
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Slider Section */}
      <BrandsSlider />

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("stay.updated")}</h2>
          <p className="text-xl mb-8 text-blue-100">{t("newsletter.desc")}</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder={t("enter.email")}
              className={`flex-1 px-4 py-3 rounded-lg text-gray-800 ${language === "ar" ? "text-right" : "text-left"}`}
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6">
              {t("subscribe")}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
