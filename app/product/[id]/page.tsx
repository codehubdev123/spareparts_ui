"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ImageZoom from "@/components/image-zoom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, Share2, Truck, Shield, RotateCcw, Plus, Minus, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"
import Link from "next/link"

// Mock product data - in real app, this would come from API/database
const getProductData = (id: string) => {
  return {
    id: id,
    name: "Premium Ceramic Brake Pads Set",
    nameAr: "مجموعة فحمات فرامل سيراميك ممتازة",
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 5,
    reviews: 47,
    inStock: true,
    stockCount: 8,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "Brake System",
    categoryAr: "نظام الفرامل",
    brand: "AutoPro",
    sku: "BP-CERAMIC-001",
    description: {
      en: "Our Premium Ceramic Brake Pads Set delivers exceptional stopping power and durability for your vehicle. Engineered with advanced ceramic compound technology, these brake pads provide superior performance in all driving conditions while minimizing brake dust and noise.",
      ar: "مجموعة فحمات الفرامل السيراميك الممتازة توفر قوة توقف استثنائية ومتانة لمركبتك. مصممة بتقنية المركب السيراميكي المتقدم، توفر هذه الفحمات أداءً فائقاً في جميع ظروف القيادة مع تقليل غبار الفرامل والضوضاء.",
    },
    features: {
      en: [
        "Advanced ceramic compound for superior braking performance",
        "Low dust formula keeps wheels cleaner longer",
        "Quiet operation with minimal brake noise",
        "Extended pad life for better value",
        "OEM-quality fit and finish",
        "Includes all necessary hardware and shims",
        "Temperature resistant up to 650°C",
        "Environmentally friendly materials",
      ],
      ar: [
        "مركب سيراميكي متقدم لأداء فرملة فائق",
        "تركيبة قليلة الغبار تحافظ على نظافة العجلات لفترة أطول",
        "تشغيل هادئ مع الحد الأدنى من ضوضاء الفرامل",
        "عمر أطول للفحمات لقيمة أفضل",
        "جودة وتشطيب بمستوى الشركة المصنعة الأصلية",
        "يشمل جميع الأجهزة والحشوات اللازمة",
        "مقاوم للحرارة حتى 650 درجة مئوية",
        "مواد صديقة للبيئة",
      ],
    },
    specifications: {
      en: [
        { label: "Material", value: "Premium Ceramic Compound" },
        { label: "Temperature Range", value: "-40°C to 650°C" },
        { label: "Friction Coefficient", value: "0.35-0.45" },
        { label: "Wear Rate", value: "Low (Grade A)" },
        { label: "Noise Level", value: "Ultra Quiet" },
        { label: "Dust Level", value: "Minimal" },
        { label: "Warranty", value: "2 Years / 50,000 KM" },
        { label: "Certification", value: "ECE R90, ISO 9001" },
      ],
      ar: [
        { label: "المادة", value: "مركب سيراميكي ممتاز" },
        { label: "نطاق درجة الحرارة", value: "-40°م إلى 650°م" },
        { label: "معامل الاحتكاك", value: "0.35-0.45" },
        { label: "معدل التآكل", value: "منخفض (درجة أ)" },
        { label: "مستوى الضوضاء", value: "هادئ جداً" },
        { label: "مستوى الغبار", value: "الحد الأدنى" },
        { label: "الضمان", value: "سنتان / 50,000 كم" },
        { label: "الشهادة", value: "ECE R90, ISO 9001" },
      ],
    },
    compatibility: [
      "Toyota Camry 2018-2023",
      "Honda Accord 2016-2022",
      "Nissan Altima 2019-2023",
      "Hyundai Sonata 2020-2023",
      "Kia Optima 2016-2020",
    ],
  }
}

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const { language, t } = useLanguage()
  const { addToCart } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")

  const product = getProductData(params.id)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        nameAr: product.nameAr,
        price: product.price,
        image: product.images[0],
        inStock: product.inStock,
      })
    }
  }

  const relatedProducts = [
    {
      id: "2",
      name: "Brake Rotors Set",
      nameAr: "مجموعة أقراص الفرامل",
      price: 599,
      image: "/placeholder.svg?height=200&width=250",
    },
    {
      id: "3",
      name: "Brake Fluid DOT 4",
      nameAr: "سائل الفرامل DOT 4",
      price: 45,
      image: "/placeholder.svg?height=200&width=250",
    },
    {
      id: "4",
      name: "Brake Calipers",
      nameAr: "كاليبرات الفرامل",
      price: 899,
      image: "/placeholder.svg?height=200&width=250",
    },
    {
      id: "5",
      name: "Brake Lines Kit",
      nameAr: "طقم خطوط الفرامل",
      price: 159,
      image: "/placeholder.svg?height=200&width=250",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm space-x-2 rtl:space-x-reverse">
            <Link href="/" className="text-blue-600 hover:underline">
              {t("nav.home")}
            </Link>
            <ArrowRight className={`w-4 h-4 text-gray-400 ${language === "ar" ? "rotate-180" : ""}`} />
            <Link href="/shop" className="text-blue-600 hover:underline">
              {t("nav.shop")}
            </Link>
            <ArrowRight className={`w-4 h-4 text-gray-400 ${language === "ar" ? "rotate-180" : ""}`} />
            <Link href="/categories/brake-system" className="text-blue-600 hover:underline">
              {language === "ar" ? product.categoryAr : product.category}
            </Link>
            <ArrowRight className={`w-4 h-4 text-gray-400 ${language === "ar" ? "rotate-180" : ""}`} />
            <span className="text-gray-600">{language === "ar" ? product.nameAr : product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            {/* Main Image with Zoom */}
            <div className="mb-4 relative">
              <ImageZoom
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={language === "ar" ? product.nameAr : product.name}
                className="w-full h-96 lg:h-[500px] rounded-lg shadow-lg"
              />

              {/* Discount Badge */}
              {product.discount && (
                <div
                  className={`absolute top-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold ${
                    language === "ar" ? "left-4" : "right-4"
                  }`}
                >
                  -{product.discount}%
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded border-2 transition-all duration-200 ${
                    selectedImage === index
                      ? "border-blue-500 ring-2 ring-blue-200"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${language === "ar" ? product.nameAr : product.name} - View ${index + 1}`}
                    className="w-full h-16 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {language === "ar" ? product.categoryAr : product.category}
                </span>
                <span className={`text-sm text-gray-500 ${language === "ar" ? "mr-4" : "ml-4"}`}>
                  SKU: {product.sku}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {language === "ar" ? product.nameAr : product.name}
              </h1>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className={`text-gray-600 ${language === "ar" ? "mr-2" : "ml-2"}`}>
                  ({product.reviews} {language === "ar" ? "تقييم" : "reviews"})
                </span>
                <span
                  className={`font-semibold ${language === "ar" ? "mr-4" : "ml-4"} ${product.inStock ? "text-green-600" : "text-red-600"}`}
                >
                  {product.inStock
                    ? language === "ar"
                      ? "متوفر"
                      : "In Stock"
                    : language === "ar"
                      ? "غير متوفر"
                      : "Out of Stock"}
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <span className="text-3xl font-bold text-blue-600">
                    {product.price} {t("price.currency")}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      {product.originalPrice} {t("price.currency")}
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      {language === "ar" ? `وفر ${product.discount}%` : `Save ${product.discount}%`}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {language === "ar"
                    ? "شامل الضريبة. يتم حساب الشحن عند الدفع."
                    : "Tax included. Shipping calculated at checkout."}
                </p>
              </div>
            </div>

            {/* Vehicle Compatibility */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                {language === "ar" ? "توافق المركبة" : "Vehicle Compatibility"}
              </label>
              <select
                className={`w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                <option value="">{language === "ar" ? "اختر مركبتك" : "Select your vehicle"}</option>
                {product.compatibility.map((vehicle, index) => (
                  <option key={index} value={vehicle}>
                    {vehicle}
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">{language === "ar" ? "الكمية" : "Quantity"}</label>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-3 border-x border-gray-300 min-w-[60px] text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-100 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  {language === "ar"
                    ? `فقط ${product.stockCount} متبقي في المخزون!`
                    : `Only ${product.stockCount} left in stock!`}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-lg py-3"
                  disabled={!product.inStock}
                >
                  {language === "ar" ? "أضف للسلة" : "Add to Cart"}
                </Button>
                <Link href="/checkout">
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white text-lg py-3 bg-transparent w-full"
                    disabled={!product.inStock}
                  >
                    {language === "ar" ? "اشتري الآن" : "Buy Now"}
                  </Button>
                </Link>
              </div>

              <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                <Button variant="ghost" size="sm">
                  <Heart className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                  {language === "ar" ? "أضف للمفضلة" : "Add to Wishlist"}
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                  {language === "ar" ? "شارك" : "Share"}
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-gray-50 rounded-lg">
                <Truck className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-sm">{language === "ar" ? "توصيل مجاني" : "Free Delivery"}</div>
                  <div className="text-xs text-gray-600">
                    {language === "ar" ? "للطلبات أكثر من 500 ريال" : "Orders over 500 SAR"}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-gray-50 rounded-lg">
                <Shield className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-semibold text-sm">{language === "ar" ? "ضمان سنتان" : "2 Year Warranty"}</div>
                  <div className="text-xs text-gray-600">
                    {language === "ar" ? "جودة مضمونة" : "Quality guaranteed"}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-gray-50 rounded-lg">
                <RotateCcw className="w-6 h-6 text-orange-600" />
                <div>
                  <div className="font-semibold text-sm">{language === "ar" ? "إرجاع سهل" : "Easy Returns"}</div>
                  <div className="text-xs text-gray-600">
                    {language === "ar" ? "سياسة إرجاع 30 يوم" : "30 day return policy"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 rtl:space-x-reverse">
              {[
                { id: "description", label: language === "ar" ? "الوصف" : "Description" },
                { id: "specifications", label: language === "ar" ? "المواصفات" : "Specifications" },
                { id: "reviews", label: `${language === "ar" ? "التقييمات" : "Reviews"} (${product.reviews})` },
                { id: "installation", label: language === "ar" ? "التركيب" : "Installation" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium transition-colors ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {/* Description Tab */}
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <h3 className="text-2xl font-semibold mb-4">
                  {language === "ar" ? "وصف المنتج" : "Product Description"}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {language === "ar" ? product.description.ar : product.description.en}
                </p>

                <h4 className="text-xl font-semibold mb-3">
                  {language === "ar" ? "الميزات الرئيسية:" : "Key Features:"}
                </h4>
                <ul className="list-disc pl-6 rtl:pr-6 rtl:pl-0 space-y-2 text-gray-700">
                  {(language === "ar" ? product.features.ar : product.features.en).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications Tab */}
            {activeTab === "specifications" && (
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  {language === "ar" ? "المواصفات التقنية" : "Technical Specifications"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(language === "ar" ? product.specifications.ar : product.specifications.en).map((spec, index) => (
                    <div key={index} className="flex justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-semibold text-gray-800">{spec.label}:</span>
                      <span className="text-gray-600">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  {language === "ar" ? "تقييمات العملاء" : "Customer Reviews"}
                </h3>
                <div className="space-y-6">
                  {/* Review Summary */}
                  <div className="flex items-center space-x-6 rtl:space-x-reverse p-6 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600">{product.rating}.0</div>
                      <div className="flex items-center justify-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {product.reviews} {language === "ar" ? "تقييم" : "reviews"}
                      </div>
                    </div>
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center space-x-2 rtl:space-x-reverse mb-1">
                          <span className="text-sm w-8">{stars}★</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded-full"
                              style={{ width: stars === 5 ? "80%" : stars === 4 ? "15%" : "5%" }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 w-8">
                            {stars === 5 ? "80%" : stars === 4 ? "15%" : "5%"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Individual Reviews */}
                  <div className="space-y-4">
                    {[
                      {
                        name: "Ahmed Al-Rashid",
                        rating: 5,
                        date: "2024-01-15",
                        comment:
                          language === "ar"
                            ? "منتج ممتاز، جودة عالية وأداء رائع. أنصح به بشدة."
                            : "Excellent product, high quality and great performance. Highly recommended.",
                      },
                      {
                        name: "Sarah Mohammed",
                        rating: 5,
                        date: "2024-01-10",
                        comment:
                          language === "ar"
                            ? "فحمات فرامل رائعة، هادئة جداً ولا تترك غبار. سعر مناسب."
                            : "Great brake pads, very quiet and no dust. Good price.",
                      },
                    ].map((review, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="font-semibold">{review.name}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Installation Tab */}
            {activeTab === "installation" && (
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  {language === "ar" ? "دليل التركيب" : "Installation Guide"}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">
                      {language === "ar" ? "الأدوات المطلوبة:" : "Required Tools:"}
                    </h4>
                    <ul className="list-disc pl-6 rtl:pr-6 rtl:pl-0 space-y-1 text-gray-700 mb-6">
                      <li>{language === "ar" ? "مفتاح ربط" : "Lug wrench"}</li>
                      <li>{language === "ar" ? "رافعة سيارة" : "Car jack"}</li>
                      <li>{language === "ar" ? "حامل السيارة" : "Jack stands"}</li>
                      <li>{language === "ar" ? "مفك براغي" : "Screwdriver"}</li>
                      <li>{language === "ar" ? "مفتاح ألن" : "Allen key set"}</li>
                    </ul>

                    <h4 className="text-lg font-semibold mb-4">
                      {language === "ar" ? "خطوات التركيب:" : "Installation Steps:"}
                    </h4>
                    <ol className="list-decimal pl-6 rtl:pr-6 rtl:pl-0 space-y-2 text-gray-700">
                      <li>{language === "ar" ? "ارفع السيارة وثبتها بأمان" : "Safely lift and secure the vehicle"}</li>
                      <li>{language === "ar" ? "أزل العجلة" : "Remove the wheel"}</li>
                      <li>{language === "ar" ? "أزل الكاليبر القديم" : "Remove the old caliper"}</li>
                      <li>{language === "ar" ? "أزل الفحمات القديمة" : "Remove old brake pads"}</li>
                      <li>{language === "ar" ? "نظف منطقة التركيب" : "Clean the installation area"}</li>
                      <li>{language === "ar" ? "ركب الفحمات الجديدة" : "Install new brake pads"}</li>
                      <li>{language === "ar" ? "أعد تركيب الكاليبر" : "Reinstall the caliper"}</li>
                      <li>{language === "ar" ? "اختبر الفرامل قبل القيادة" : "Test brakes before driving"}</li>
                    </ol>
                  </div>
                  <div>
                    <img
                      src="/placeholder.svg?height=400&width=500"
                      alt={language === "ar" ? "مخطط تركيب فحمات الفرامل" : "Brake pad installation diagram"}
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {language === "ar" ? "منتجات ذات صلة" : "Related Products"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={language === "ar" ? product.nameAr : product.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-semibold mb-1 hover:text-blue-600 transition-colors">
                      {language === "ar" ? product.nameAr : product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">
                      {product.price} {t("price.currency")}
                    </span>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      {language === "ar" ? "أضف للسلة" : "Add to Cart"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
