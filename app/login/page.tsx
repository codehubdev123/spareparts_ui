"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"
import Link from "next/link"

export default function LoginPage() {
  const { language, t } = useLanguage()
  const [showPassword, setShowPassword] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="bg-blue-600 text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <User className="w-8 h-8" />
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  {isLogin
                    ? language === "ar"
                      ? "تسجيل الدخول"
                      : "Login"
                    : language === "ar"
                      ? "إنشاء حساب جديد"
                      : "Create Account"}
                </h1>
                <p className="text-gray-600">
                  {isLogin
                    ? language === "ar"
                      ? "أدخل بياناتك للوصول إلى حسابك"
                      : "Enter your credentials to access your account"
                    : language === "ar"
                      ? "أنشئ حساباً جديداً للبدء"
                      : "Create a new account to get started"}
                </p>
              </div>

              <form className="space-y-6">
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === "ar" ? "الاسم الكامل" : "Full Name"}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          language === "ar" ? "pr-12 text-right" : "pl-12"
                        }`}
                        placeholder={language === "ar" ? "أدخل اسمك الكامل" : "Enter your full name"}
                      />
                      <User
                        className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 ${
                          language === "ar" ? "right-4" : "left-4"
                        }`}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === "ar" ? "البريد الإلكتروني" : "Email Address"}
                  </label>
                  <div className="relative">
                    <input
                      type="email"
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
                    {language === "ar" ? "كلمة المرور" : "Password"}
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        language === "ar" ? "pr-12 pl-12 text-right" : "pl-12 pr-12"
                      }`}
                      placeholder={language === "ar" ? "أدخل كلمة المرور" : "Enter your password"}
                    />
                    <Lock
                      className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 ${
                        language === "ar" ? "right-4" : "left-4"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 ${
                        language === "ar" ? "left-4" : "right-4"
                      }`}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === "ar" ? "تأكيد كلمة المرور" : "Confirm Password"}
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          language === "ar" ? "pr-12 text-right" : "pl-12"
                        }`}
                        placeholder={language === "ar" ? "أعد إدخال كلمة المرور" : "Re-enter your password"}
                      />
                      <Lock
                        className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 ${
                          language === "ar" ? "right-4" : "left-4"
                        }`}
                      />
                    </div>
                  </div>
                )}

                {isLogin && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className={`${language === "ar" ? "ml-2" : "mr-2"}`} />
                      <span className="text-sm text-gray-600">{language === "ar" ? "تذكرني" : "Remember me"}</span>
                    </label>
                    <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                      {language === "ar" ? "نسيت كلمة المرور؟" : "Forgot password?"}
                    </Link>
                  </div>
                )}

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  {isLogin
                    ? language === "ar"
                      ? "تسجيل الدخول"
                      : "Sign In"
                    : language === "ar"
                      ? "إنشاء الحساب"
                      : "Create Account"}
                </Button>

                <div className="text-center">
                  <span className="text-gray-600">
                    {isLogin
                      ? language === "ar"
                        ? "ليس لديك حساب؟"
                        : "Don't have an account?"
                      : language === "ar"
                        ? "لديك حساب بالفعل؟"
                        : "Already have an account?"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className={`text-blue-600 hover:underline font-medium ${language === "ar" ? "mr-2" : "ml-2"}`}
                  >
                    {isLogin
                      ? language === "ar"
                        ? "إنشاء حساب"
                        : "Sign up"
                      : language === "ar"
                        ? "تسجيل الدخول"
                        : "Sign in"}
                  </button>
                </div>
              </form>

              {/* Social Login */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">{language === "ar" ? "أو" : "Or"}</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button variant="outline" className="bg-transparent">
                    <img src="/placeholder.svg?height=20&width=20" alt="Google" className="w-5 h-5 mr-2" />
                    Google
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <img src="/placeholder.svg?height=20&width=20" alt="Apple" className="w-5 h-5 mr-2" />
                    Apple
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
