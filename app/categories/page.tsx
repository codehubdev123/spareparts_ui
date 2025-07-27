"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function CategoriesPage() {
  const { language, t } = useLanguage()

  const categories = [
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
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t("categories.page.title")}</h1>
          <p className="text-xl text-blue-100">{t("categories.page.desc")}</p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={language === "ar" ? category.nameAr : category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-500"
                  />
                  <div
                    className={`absolute top-4 ${category.color} text-white px-3 py-1 rounded-full text-sm font-semibold ${
                      language === "ar" ? "right-4" : "left-4"
                    }`}
                  >
                    {category.itemCount} {t("categories.items")}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {language === "ar" ? category.nameAr : category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {language === "ar" ? category.descriptionAr : category.description}
                  </p>
                  <Link href={`/categories/${category.id}`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">{t("browse.products")}</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("categories.popular")}</h2>
            <p className="text-xl text-gray-600">{t("categories.popular.desc")}</p>
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
                <h3 className="text-xl font-semibold mb-2">{language === "ar" ? category.nameAr : category.name}</h3>
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
  )
}
