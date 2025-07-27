"use client"

import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">AS</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">{t("site.name")}</h3>
                <p className="text-sm text-gray-400">{t("site.tagline")}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">{t("footer.company.desc")}</p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.quick.links")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="/shop" className="text-gray-400 hover:text-white">
                  {t("nav.shop")}
                </a>
              </li>
              <li>
                <a href="/categories" className="text-gray-400 hover:text-white">
                  {t("nav.categories")}
                </a>
              </li>
              <li>
                <a href="/brands" className="text-gray-400 hover:text-white">
                  {t("nav.brands")}
                </a>
              </li>
              <li>
                <a href="/deals" className="text-gray-400 hover:text-white">
                  {t("footer.special.deals")}
                </a>
              </li>
              <li>
                <a href="/warranty" className="text-gray-400 hover:text-white">
                  {t("footer.warranty")}
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.categories")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="/engine-parts" className="text-gray-400 hover:text-white">
                  {t("category.engine")}
                </a>
              </li>
              <li>
                <a href="/brake-system" className="text-gray-400 hover:text-white">
                  {t("category.brake")}
                </a>
              </li>
              <li>
                <a href="/suspension" className="text-gray-400 hover:text-white">
                  {t("category.suspension")}
                </a>
              </li>
              <li>
                <a href="/electrical" className="text-gray-400 hover:text-white">
                  {t("category.electrical")}
                </a>
              </li>
              <li>
                <a href="/filters" className="text-gray-400 hover:text-white">
                  {t("category.filters")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.contact.us")}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-gray-400">{t("footer.address")}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-gray-400">+966 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-blue-500" />
                <span className="text-gray-400">info@autospares.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-gray-400">{t("footer.hours")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 {t("site.name")}. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
