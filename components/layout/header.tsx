"use client"

import { useState } from "react"
import { Search, ShoppingCart, Menu, X, Globe, User, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()
  const { totalItems } = useCart()

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Phone className="w-4 h-4" />
              <span>+966 123 456 789</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Mail className="w-4 h-4" />
              <span>info@autospares.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 rtl:space-x-reverse hover:text-blue-200"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "en" ? "العربية" : "English"}</span>
            </button>
            <Link href="/login" className="flex items-center space-x-2 rtl:space-x-reverse hover:text-blue-200">
              <User className="w-4 h-4" />
              <span>{t("nav.login")}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">AS</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{t("site.name")}</h1>
              <p className="text-sm text-gray-600">{t("site.tagline")}</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder={t("search.placeholder")}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  language === "ar" ? "pr-12 text-right" : "pl-4 pr-12"
                }`}
              />
              <Search
                className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 ${
                  language === "ar" ? "left-4" : "right-4"
                }`}
              />
            </div>
          </div>

          {/* Cart and Menu */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Link href="/cart">
              <Button variant="outline" className="relative bg-transparent">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder={t("search.placeholder")}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                language === "ar" ? "pr-12 text-right" : "pl-4 pr-12"
              }`}
            />
            <Search
              className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 ${
                language === "ar" ? "left-4" : "right-4"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-gray-50 border-t ${isMenuOpen ? "block" : "hidden md:block"}`}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-col md:flex-row md:space-x-8 rtl:md:space-x-reverse py-4">
            <li>
              <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link href="/shop" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                {t("nav.shop")}
              </Link>
            </li>
            <li>
              <Link href="/categories" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                {t("nav.categories")}
              </Link>
            </li>
            <li>
              <Link href="/brands" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                {t("nav.brands")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
