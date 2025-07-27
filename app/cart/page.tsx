"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

export default function CartPage() {
  const { language, t } = useLanguage()
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart()

  const tax = totalPrice * 0.15
  const shipping = totalPrice > 500 ? 0 : 50
  const finalTotal = totalPrice + tax + shipping

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="bg-gray-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShoppingBag className="w-16 h-16 text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{t("cart.empty")}</h1>
            <p className="text-xl text-gray-600 mb-8">
              {language === "ar"
                ? "لم تقم بإضافة أي منتجات إلى سلة التسوق بعد"
                : "You haven't added any products to your cart yet"}
            </p>
            <Link href="/shop">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                {language === "ar" ? "ابدأ التسوق" : "Start Shopping"}
              </Button>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Page Header */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800">{t("cart.title")}</h1>
          <p className="text-gray-600 mt-2">
            {language === "ar" ? "راجع منتجاتك قبل إتمام الشراء" : "Review your items before checkout"}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">
                    {language === "ar" ? `منتجات السلة (${items.length})` : `Cart Items (${items.length})`}
                  </h2>
                  <Button variant="outline" size="sm" onClick={clearCart}>
                    {language === "ar" ? "مسح الكل" : "Clear All"}
                  </Button>
                </div>

                <div className="space-y-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={language === "ar" ? item.nameAr : item.name}
                          className="w-24 h-24 object-cover rounded"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div className="mb-2 sm:mb-0">
                            <h3 className="font-semibold text-gray-800">
                              {language === "ar" ? item.nameAr : item.name}
                            </h3>
                            <div className="flex items-center mt-1">
                              <span className="text-lg font-bold text-blue-600">
                                {item.price} {t("price.currency")}
                              </span>
                            </div>
                            <p className={`text-sm mt-1 ${item.inStock ? "text-green-600" : "text-red-600"}`}>
                              {t(item.inStock ? "in.stock" : "out.of.stock")}
                            </p>
                          </div>

                          <div className="flex items-center justify-between sm:flex-col sm:items-end">
                            <div className="flex items-center border border-gray-300 rounded">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:bg-gray-100"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-3 py-1 border-x">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:bg-gray-100"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="flex items-center space-x-2 rtl:space-x-reverse mt-2">
                              <span className="font-semibold">
                                {item.price * item.quantity} {t("price.currency")}
                              </span>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <div className="mt-6 pt-6 border-t">
                  <Link href="/shop">
                    <Button variant="outline" className="flex items-center bg-transparent">
                      <ShoppingBag className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                      {language === "ar" ? "متابعة التسوق" : "Continue Shopping"}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">{language === "ar" ? "ملخص الطلب" : "Order Summary"}</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>{t("cart.subtotal")}</span>
                    <span>
                      {totalPrice.toFixed(2)} {t("price.currency")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{language === "ar" ? "الشحن" : "Shipping"}</span>
                    <span className={shipping === 0 ? "text-green-600" : ""}>
                      {shipping === 0 ? (language === "ar" ? "مجاني" : "Free") : `${shipping} ${t("price.currency")}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("cart.tax")}</span>
                    <span>
                      {tax.toFixed(2)} {t("price.currency")}
                    </span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>{t("cart.total")}</span>
                      <span>
                        {finalTotal.toFixed(2)} {t("price.currency")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    {language === "ar" ? "كود الخصم" : "Promo Code"}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder={language === "ar" ? "أدخل الكود" : "Enter code"}
                      className={`flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        language === "ar" ? "text-right" : "text-left"
                      }`}
                    />
                    <Button variant="outline">{language === "ar" ? "تطبيق" : "Apply"}</Button>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link href="/checkout">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3 mb-4">
                    {t("cart.checkout")}
                    <ArrowRight className={`w-5 h-5 ${language === "ar" ? "mr-2 rotate-180" : "ml-2"}`} />
                  </Button>
                </Link>

                {/* Payment Methods */}
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">{language === "ar" ? "نقبل" : "We accept"}</p>
                  <div className="flex justify-center space-x-2 rtl:space-x-reverse">
                    <img src="/placeholder.svg?height=30&width=50" alt="Visa" className="h-8" />
                    <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" className="h-8" />
                    <img src="/placeholder.svg?height=30&width=50" alt="Mada" className="h-8" />
                    <img src="/placeholder.svg?height=30&width=50" alt="Apple Pay" className="h-8" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
