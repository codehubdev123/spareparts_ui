"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Filter, Grid, List } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ShopPage() {
  const { t } = useLanguage()

  const categories = [
    t("category.engine"),
    t("category.brake"),
    t("category.suspension"),
    t("category.electrical"),
    t("category.filters"),
    t("category.transmission"),
  ]

  const brands = ["Toyota", "BMW", "Mercedes", "Audi", "Honda"]

  const featuredProducts = [
    {
      id: "1",
      name: "Premium Ceramic Brake Pads Set",
      nameAr: "مجموعة فحمات فرامل سيراميك ممتازة",
      price: 299,
      originalPrice: 399,
      image: "/placeholder.svg?height=250&width=300",
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
      image: "/placeholder.svg?height=250&width=300",
      discount: 31,
      rating: 4,
      reviews: 32,
    },
    // Add more products...
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{t("shop.title")}</h1>
            <p className="text-xl text-gray-600">{t("shop.subtitle")}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                {t("filters.title")}
              </h3>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">{t("filters.categories")}</h4>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <label key={index} className="flex items-center">
                      <input type="checkbox" className="mr-2 rtl:ml-2 rtl:mr-0" />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">{t("filters.brands")}</h4>
                <div className="space-y-2">
                  {brands.map((brand, index) => (
                    <label key={index} className="flex items-center">
                      <input type="checkbox" className="mr-2 rtl:ml-2 rtl:mr-0" />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">{t("filters.price.range")}</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="price" className="mr-2 rtl:ml-2 rtl:mr-0" />
                    <span className="text-sm">{t("filters.under.100")}</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="price" className="mr-2 rtl:ml-2 rtl:mr-0" />
                    <span className="text-sm">{t("filters.100.500")}</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="price" className="mr-2 rtl:ml-2 rtl:mr-0" />
                    <span className="text-sm">{t("filters.500.1000")}</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="price" className="mr-2 rtl:ml-2 rtl:mr-0" />
                    <span className="text-sm">{t("filters.above.1000")}</span>
                  </label>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">{t("filters.apply")}</Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4 sm:mb-0">
                <span className="text-gray-600">{t("showing.results")}</span>
              </div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <select className="border border-gray-300 rounded px-3 py-2">
                  <option>{t("sort.featured")}</option>
                  <option>{t("sort.price.low")}</option>
                  <option>{t("sort.price.high")}</option>
                  <option>{t("sort.newest")}</option>
                </select>
                <div className="flex border border-gray-300 rounded">
                  <button className="p-2 bg-blue-600 text-white">
                    <Grid className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-100">
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 12 }, (_, index) => {
                const product = featuredProducts[index % featuredProducts.length]
                return <ProductCard key={index} {...product} />
              })}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2 rtl:space-x-reverse">
                <Button variant="outline">{t("previous") || "Previous"}</Button>
                <Button className="bg-blue-600">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">4</Button>
                <Button variant="outline">{t("next") || "Next"}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
