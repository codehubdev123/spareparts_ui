"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Truck, MapPin, Phone, Mail, User, Lock, Shield, CheckCircle, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"
import Link from "next/link"

export default function CheckoutPage() {
  const { language, t } = useLanguage()
  const { items, totalPrice } = useCart()
  const [currentStep, setCurrentStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [deliveryMethod, setDeliveryMethod] = useState("standard")

  const tax = totalPrice * 0.15
  const shipping = deliveryMethod === "express" ? 25 : deliveryMethod === "standard" ? (totalPrice > 500 ? 0 : 50) : 0
  const finalTotal = totalPrice + tax + shipping

  const steps = [
    {
      id: 1,
      title: language === "ar" ? "معلومات الشحن" : "Shipping Info",
      icon: <Truck className="w-5 h-5" />,
    },
    {
      id: 2,
      title: language === "ar" ? "طريقة الدفع" : "Payment Method",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      id: 3,
      title: language === "ar" ? "مراجعة الطلب" : "Review Order",
      icon: <CheckCircle className="w-5 h-5" />,
    },
  ]

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="bg-gray-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8">
              <Truck className="w-16 h-16 text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {language === "ar" ? "لا توجد منتجات للدفع" : "No Items to Checkout"}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {language === "ar" ? "أضف منتجات إلى سلة التسوق أولاً" : "Add items to your cart first"}
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
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{language === "ar" ? "إتمام الطلب" : "Checkout"}</h1>

          {/* Progress Steps */}
          <div className="flex items-center justify-center max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-lg ${
                    currentStep >= step.id ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step.icon}
                  <span className="font-medium">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-2 ${currentStep > step.id ? "bg-blue-600" : "bg-gray-300"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Shipping Information */}
            {currentStep === 1 && (
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center">
                    <Truck className="w-6 h-6 mr-3 rtl:ml-3 rtl:mr-0" />
                    {language === "ar" ? "معلومات الشحن" : "Shipping Information"}
                  </h2>

                  <form className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        {language === "ar" ? "المعلومات الشخصية" : "Personal Information"}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            {language === "ar" ? "الاسم الأول" : "First Name"} *
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              required
                              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                language === "ar" ? "pr-12 text-right" : "pl-12"
                              }`}
                              placeholder={language === "ar" ? "أدخل اسمك الأول" : "Enter your first name"}
                            />
                            <User
                              className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 ${
                                language === "ar" ? "right-4" : "left-4"
                              }`}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            {language === "ar" ? "اسم العائلة" : "Last Name"} *
                          </label>
                          <input
                            type="text"
                            required
                            className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                              language === "ar" ? "text-right" : "text-left"
                            }`}
                            placeholder={language === "ar" ? "أدخل اسم العائلة" : "Enter your last name"}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        {language === "ar" ? "معلومات الاتصال" : "Contact Information"}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            {language === "ar" ? "البريد الإلكتروني" : "Email Address"} *
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              required
                              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                language === "ar" ? "pr-12 text-right" : "pl-12"
                              }`}
                              placeholder={language === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"}
                            />
                            <Mail
                              className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 ${
                                language === "ar" ? "right-4" : "left-4"
                              }`}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            {language === "ar" ? "رقم الهاتف" : "Phone Number"} *
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              required
                              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                language === "ar" ? "pr-12 text-right" : "pl-12"
                              }`}
                              placeholder="+966 123 456 789"
                            />
                            <Phone
                              className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 ${
                                language === "ar" ? "right-4" : "left-4"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Shipping Address */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        {language === "ar" ? "عنوان الشحن" : "Shipping Address"}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            {language === "ar" ? "العنوان الكامل" : "Full Address"} *
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              required
                              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                language === "ar" ? "pr-12 text-right" : "pl-12"
                              }`}
                              placeholder={language === "ar" ? "أدخل العنوان الكامل" : "Enter your full address"}
                            />
                            <MapPin
                              className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 ${
                                language === "ar" ? "right-4" : "left-4"
                              }`}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              {language === "ar" ? "المدينة" : "City"} *
                            </label>
                            <select
                              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                language === "ar" ? "text-right" : "text-left"
                              }`}
                            >
                              <option value="">{language === "ar" ? "اختر المدينة" : "Select City"}</option>
                              <option value="riyadh">{language === "ar" ? "الرياض" : "Riyadh"}</option>
                              <option value="jeddah">{language === "ar" ? "جدة" : "Jeddah"}</option>
                              <option value="dammam">{language === "ar" ? "الدمام" : "Dammam"}</option>
                              <option value="mecca">{language === "ar" ? "مكة" : "Mecca"}</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              {language === "ar" ? "المنطقة" : "Region"} *
                            </label>
                            <select
                              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                language === "ar" ? "text-right" : "text-left"
                              }`}
                            >
                              <option value="">{language === "ar" ? "اختر المنطقة" : "Select Region"}</option>
                              <option value="central">{language === "ar" ? "المنطقة الوسطى" : "Central Region"}</option>
                              <option value="western">
                                {language === "ar" ? "المنطقة الغربية" : "Western Region"}
                              </option>
                              <option value="eastern">
                                {language === "ar" ? "المنطقة الشرقية" : "Eastern Region"}
                              </option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              {language === "ar" ? "الرمز البريدي" : "Postal Code"} *
                            </label>
                            <input
                              type="text"
                              required
                              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                language === "ar" ? "text-right" : "text-left"
                              }`}
                              placeholder="12345"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Delivery Options */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        {language === "ar" ? "خيارات التوصيل" : "Delivery Options"}
                      </h3>
                      <div className="space-y-3">
                        <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="delivery"
                            value="standard"
                            checked={deliveryMethod === "standard"}
                            onChange={(e) => setDeliveryMethod(e.target.value)}
                            className={`${language === "ar" ? "ml-3" : "mr-3"}`}
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold">
                                  {language === "ar" ? "التوصيل العادي" : "Standard Delivery"}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {language === "ar" ? "3-5 أيام عمل" : "3-5 business days"}
                                </div>
                              </div>
                              <div className="text-lg font-bold text-blue-600">
                                {totalPrice > 500 ? (
                                  <span className="text-green-600">{language === "ar" ? "مجاني" : "Free"}</span>
                                ) : (
                                  `50 ${t("price.currency")}`
                                )}
                              </div>
                            </div>
                          </div>
                        </label>
                        <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="delivery"
                            value="express"
                            checked={deliveryMethod === "express"}
                            onChange={(e) => setDeliveryMethod(e.target.value)}
                            className={`${language === "ar" ? "ml-3" : "mr-3"}`}
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold">
                                  {language === "ar" ? "التوصيل السريع" : "Express Delivery"}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {language === "ar" ? "1-2 أيام عمل" : "1-2 business days"}
                                </div>
                              </div>
                              <div className="text-lg font-bold text-blue-600">25 {t("price.currency")}</div>
                            </div>
                          </div>
                        </label>
                        <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="delivery"
                            value="pickup"
                            checked={deliveryMethod === "pickup"}
                            onChange={(e) => setDeliveryMethod(e.target.value)}
                            className={`${language === "ar" ? "ml-3" : "mr-3"}`}
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold">
                                  {language === "ar" ? "الاستلام من المتجر" : "Store Pickup"}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {language === "ar" ? "جاهز خلال ساعتين" : "Ready in 2 hours"}
                                </div>
                              </div>
                              <div className="text-lg font-bold text-green-600">
                                {language === "ar" ? "مجاني" : "Free"}
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <Button
                      onClick={() => setCurrentStep(2)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                    >
                      {language === "ar" ? "متابعة إلى الدفع" : "Continue to Payment"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Payment Method */}
            {currentStep === 2 && (
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center">
                    <CreditCard className="w-6 h-6 mr-3 rtl:ml-3 rtl:mr-0" />
                    {language === "ar" ? "طريقة الدفع" : "Payment Method"}
                  </h2>

                  <div className="space-y-6">
                    {/* Payment Methods */}
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="payment"
                          value="card"
                          checked={paymentMethod === "card"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className={`${language === "ar" ? "ml-3" : "mr-3"}`}
                        />
                        <CreditCard className="w-5 h-5 mr-3 rtl:ml-3 rtl:mr-0" />
                        <span className="font-semibold">
                          {language === "ar" ? "بطاقة ائتمان/مدى" : "Credit/Debit Card"}
                        </span>
                        <div className="flex space-x-2 rtl:space-x-reverse ml-auto rtl:mr-auto rtl:ml-0">
                          <img src="/placeholder.svg?height=24&width=38" alt="Visa" className="h-6" />
                          <img src="/placeholder.svg?height=24&width=38" alt="Mastercard" className="h-6" />
                          <img src="/placeholder.svg?height=24&width=38" alt="Mada" className="h-6" />
                        </div>
                      </label>

                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="payment"
                          value="apple-pay"
                          checked={paymentMethod === "apple-pay"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className={`${language === "ar" ? "ml-3" : "mr-3"}`}
                        />
                        <div className="w-5 h-5 mr-3 rtl:ml-3 rtl:mr-0 bg-black rounded flex items-center justify-center">
                          <span className="text-white text-xs">A</span>
                        </div>
                        <span className="font-semibold">Apple Pay</span>
                      </label>

                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="payment"
                          value="stc-pay"
                          checked={paymentMethod === "stc-pay"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className={`${language === "ar" ? "ml-3" : "mr-3"}`}
                        />
                        <div className="w-5 h-5 mr-3 rtl:ml-3 rtl:mr-0 bg-purple-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs">S</span>
                        </div>
                        <span className="font-semibold">STC Pay</span>
                      </label>

                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="payment"
                          value="cod"
                          checked={paymentMethod === "cod"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className={`${language === "ar" ? "ml-3" : "mr-3"}`}
                        />
                        <div className="w-5 h-5 mr-3 rtl:ml-3 rtl:mr-0 bg-green-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs">$</span>
                        </div>
                        <span className="font-semibold">
                          {language === "ar" ? "الدفع عند الاستلام" : "Cash on Delivery"}
                        </span>
                      </label>
                    </div>

                    {/* Card Details Form */}
                    {paymentMethod === "card" && (
                      <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold">{language === "ar" ? "تفاصيل البطاقة" : "Card Details"}</h3>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            {language === "ar" ? "رقم البطاقة" : "Card Number"} *
                          </label>
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                              language === "ar" ? "text-right" : "text-left"
                            }`}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              {language === "ar" ? "تاريخ الانتهاء" : "Expiry Date"} *
                            </label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                language === "ar" ? "text-right" : "text-left"
                              }`}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">CVV *</label>
                            <input
                              type="text"
                              placeholder="123"
                              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                language === "ar" ? "text-right" : "text-left"
                              }`}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            {language === "ar" ? "اسم حامل البطاقة" : "Cardholder Name"} *
                          </label>
                          <input
                            type="text"
                            placeholder={language === "ar" ? "الاسم كما يظهر على البطاقة" : "Name as on card"}
                            className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                              language === "ar" ? "text-right" : "text-left"
                            }`}
                          />
                        </div>
                      </div>
                    )}

                    {/* Security Notice */}
                    <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
                      <Shield className="w-5 h-5 text-green-600 mr-3 rtl:ml-3 rtl:mr-0" />
                      <div className="text-sm text-green-800">
                        {language === "ar"
                          ? "جميع المعاملات محمية بتشفير SSL 256-bit"
                          : "All transactions are secured with 256-bit SSL encryption"}
                      </div>
                    </div>

                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <Button onClick={() => setCurrentStep(1)} variant="outline" className="flex-1 bg-transparent">
                        {language === "ar" ? "العودة" : "Back"}
                      </Button>
                      <Button onClick={() => setCurrentStep(3)} className="flex-1 bg-blue-600 hover:bg-blue-700">
                        {language === "ar" ? "مراجعة الطلب" : "Review Order"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Order Review */}
            {currentStep === 3 && (
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3 rtl:ml-3 rtl:mr-0" />
                    {language === "ar" ? "مراجعة الطلب" : "Review Your Order"}
                  </h2>

                  <div className="space-y-6">
                    {/* Order Items */}
                    <div>
                      <h3 className="font-semibold mb-4">{language === "ar" ? "منتجات الطلب" : "Order Items"}</h3>
                      <div className="space-y-4">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center space-x-4 rtl:space-x-reverse p-4 border border-gray-200 rounded-lg"
                          >
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={language === "ar" ? item.nameAr : item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold">{language === "ar" ? item.nameAr : item.name}</h4>
                              <p className="text-sm text-gray-600">
                                {language === "ar" ? "الكمية" : "Quantity"}: {item.quantity}
                              </p>
                            </div>
                            <div className="text-lg font-bold text-blue-600">
                              {item.price * item.quantity} {t("price.currency")}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Delivery Information */}
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Truck className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                        {language === "ar" ? "معلومات التوصيل" : "Delivery Information"}
                      </h3>
                      <div className="text-sm space-y-1">
                        <p>
                          <strong>{language === "ar" ? "الطريقة:" : "Method:"}</strong>{" "}
                          {deliveryMethod === "standard"
                            ? language === "ar"
                              ? "التوصيل العادي"
                              : "Standard Delivery"
                            : deliveryMethod === "express"
                              ? language === "ar"
                                ? "التوصيل السريع"
                                : "Express Delivery"
                              : language === "ar"
                                ? "الاستلام من المتجر"
                                : "Store Pickup"}
                        </p>
                        <p>
                          <strong>{language === "ar" ? "المدة المتوقعة:" : "Expected Time:"}</strong>{" "}
                          {deliveryMethod === "standard"
                            ? language === "ar"
                              ? "3-5 أيام عمل"
                              : "3-5 business days"
                            : deliveryMethod === "express"
                              ? language === "ar"
                                ? "1-2 أيام عمل"
                                : "1-2 business days"
                              : language === "ar"
                                ? "جاهز خلال ساعتين"
                                : "Ready in 2 hours"}
                        </p>
                      </div>
                    </div>

                    {/* Payment Information */}
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h3 className="font-semibold mb-2 flex items-center">
                        <CreditCard className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                        {language === "ar" ? "معلومات الدفع" : "Payment Information"}
                      </h3>
                      <p className="text-sm">
                        <strong>{language === "ar" ? "الطريقة:" : "Method:"}</strong>{" "}
                        {paymentMethod === "card"
                          ? language === "ar"
                            ? "بطاقة ائتمان/مدى"
                            : "Credit/Debit Card"
                          : paymentMethod === "apple-pay"
                            ? "Apple Pay"
                            : paymentMethod === "stc-pay"
                              ? "STC Pay"
                              : language === "ar"
                                ? "الدفع عند الاستلام"
                                : "Cash on Delivery"}
                      </p>
                    </div>

                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <Button onClick={() => setCurrentStep(2)} variant="outline" className="flex-1 bg-transparent">
                        {language === "ar" ? "العودة" : "Back"}
                      </Button>
                      <Button className="flex-1 bg-green-600 hover:bg-green-700 text-lg py-3">
                        {language === "ar" ? "تأكيد الطلب" : "Place Order"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">{language === "ar" ? "ملخص الطلب" : "Order Summary"}</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>{language === "ar" ? "المجموع الفرعي" : "Subtotal"}</span>
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
                    <span>{language === "ar" ? "الضريبة (15%)" : "Tax (15%)"}</span>
                    <span>
                      {tax.toFixed(2)} {t("price.currency")}
                    </span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>{language === "ar" ? "الإجمالي" : "Total"}</span>
                      <span className="text-blue-600">
                        {finalTotal.toFixed(2)} {t("price.currency")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Estimated Delivery */}
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 text-blue-600 mr-2 rtl:ml-2 rtl:mr-0" />
                    <span className="font-semibold text-blue-800">
                      {language === "ar" ? "التوصيل المتوقع" : "Estimated Delivery"}
                    </span>
                  </div>
                  <p className="text-sm text-blue-700">
                    {deliveryMethod === "standard"
                      ? language === "ar"
                        ? "الأحد، 3 ديسمبر - الخميس، 7 ديسمبر"
                        : "Sun, Dec 3 - Thu, Dec 7"
                      : deliveryMethod === "express"
                        ? language === "ar"
                          ? "الغد - الأحد، 3 ديسمبر"
                          : "Tomorrow - Sun, Dec 3"
                        : language === "ar"
                          ? "جاهز اليوم خلال ساعتين"
                          : "Ready today in 2 hours"}
                  </p>
                </div>

                {/* Security Badge */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-sm text-gray-600 mb-4">
                    <Lock className="w-4 h-4" />
                    <span>{language === "ar" ? "دفع آمن ومحمي" : "Secure & Protected Payment"}</span>
                  </div>
                  <div className="flex justify-center space-x-2 rtl:space-x-reverse">
                    <img src="/placeholder.svg?height=30&width=50" alt="SSL" className="h-8" />
                    <img src="/placeholder.svg?height=30&width=50" alt="Verified" className="h-8" />
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
