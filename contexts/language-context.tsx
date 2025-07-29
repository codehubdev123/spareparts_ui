"use client";

import type React from "react";

import { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Header
    "site.name": "دبي لقطع غيار السيارات",
    "site.tagline": "قطع غيار عالية الجودة",
    "search.placeholder": "البحث عن قطع الغيار...",
    "nav.home": "الرئيسية",
    "nav.shop": "المتجر",
    "nav.categories": "الفئات",
    "nav.brands": "العلامات التجارية",
    "nav.about": "من نحن",
    "nav.contact": "اتصل بنا",
    "nav.login": "تسجيل الدخول",
    "nav.register": "إنشاء حساب",

    // Homepage
    "hero.title": "قطع غيار السيارات الممتازة",
    "hero.subtitle":
      "اكتشف آلاف قطع الغيار الأصلية لجميع ماركات وموديلات المركبات. جودة مضمونة، توصيل سريع، أسعار تنافسية.",
    "hero.shop.now": "تسوق الآن",
    "hero.view.catalog": "عرض الكتالوج",

    // Features
    "feature.delivery": "توصيل مجاني",
    "feature.delivery.desc": "توصيل مجاني للطلبات أكثر من 500 ريال",
    "feature.quality": "ضمان الجودة",
    "feature.quality.desc": "ضمان الجودة على جميع المنتجات",
    "feature.support": "دعم على مدار الساعة",
    "feature.support.desc": "دعم فني على مدار الساعة",
    "feature.certified": "قطع معتمدة",
    "feature.certified.desc": "قطع غيار معتمدة ومضمونة",

    // Categories
    "categories.title": "تسوق حسب الفئة",
    "categories.subtitle": "اعثر على القطع المثالية لمركبتك",
    "category.engine": "قطع المحرك",
    "category.brake": "نظام الفرامل",
    "category.suspension": "نظام التعليق",
    "category.electrical": "النظام الكهربائي",
    "category.filters": "المرشحات",
    "category.transmission": "ناقل الحركة",
    "category.cooling": "نظام التبريد",
    "category.exhaust": "نظام العادم",
    "category.lighting": "نظام الإضاءة",
    "view.products": "عرض المنتجات",
    "browse.products": "تصفح المنتجات",

    // Products
    "products.featured": "المنتجات المميزة",
    "products.bestselling": "الأكثر مبيعاً هذا الشهر",
    "add.to.cart": "أضف للسلة",
    "buy.now": "اشتري الآن",
    "in.stock": "متوفر",
    "out.of.stock": "غير متوفر",

    // Cart
    "cart.title": "سلة التسوق",
    "cart.empty": "سلة التسوق فارغة",
    "cart.subtotal": "المجموع الفرعي",
    "cart.tax": "الضريبة",
    "cart.total": "الإجمالي",
    "cart.checkout": "متابعة الدفع",
    "cart.shipping": "الشحن",
    "cart.free": "مجاني",
    "cart.clear.all": "مسح الكل",
    "cart.continue.shopping": "متابعة التسوق",
    "cart.promo.code": "كود الخصم",
    "cart.enter.code": "أدخل الكود",
    "cart.apply": "تطبيق",
    "cart.we.accept": "نقبل",

    // Shop & Filters
    "shop.title": "متجر قطع الغيار",
    "shop.subtitle": "تصفح مجموعتنا الواسعة من قطع غيار السيارات الممتازة",
    "filters.title": "المرشحات",
    "filters.categories": "الفئات",
    "filters.brands": "العلامات التجارية",
    "filters.price.range": "نطاق السعر",
    "filters.under.100": "أقل من 100 ريال",
    "filters.100.500": "100 - 500 ريال",
    "filters.500.1000": "500 - 1000 ريال",
    "filters.above.1000": "أكثر من 1000 ريال",
    "filters.apply": "تطبيق المرشحات",
    "sort.featured": "ترتيب حسب: المميز",
    "sort.price.low": "السعر: من الأقل للأعلى",
    "sort.price.high": "السعر: من الأعلى للأقل",
    "sort.newest": "الأحدث أولاً",
    "showing.results": "عرض 1-12 من 156 نتيجة",
    "view.all": "عرض الكل",

    // Footer
    "footer.company.desc":
      "شريكك الموثوق لقطع غيار السيارات الممتازة والإكسسوارات. جودة مضمونة، خدمة ممتازة.",
    "footer.quick.links": "روابط سريعة",
    "footer.categories": "الفئات",
    "footer.contact.us": "اتصل بنا",
    "footer.special.deals": "عروض خاصة",
    "footer.warranty": "الضمان",
    "footer.address":
      "شارع قطع غيار السيارات 123، حي الملز، الرياض 12345، المملكة العربية السعودية",
    "footer.hours": "الأحد - الخميس: 8:00 ص - 10:00 م",
    "footer.rights": "جميع الحقوق محفوظة 2024",

    // About
    "about.title": "من نحن - قطع غيار السيارات",
    "about.hero.desc":
      "لأكثر من 15 عاماً، كنا الشريك الموثوق في المملكة العربية السعودية لقطع غيار السيارات الممتازة، نخدم آلاف العملاء بالجودة والموثوقية والخدمة الاستثنائية.",
    "about.our.story": "قصتنا",
    "about.story.desc1":
      "تأسست شركة قطع غيار السيارات المحترفة في عام 2009 كشركة عائلية صغيرة بمهمة بسيطة: توفير قطع غيار السيارات عالية الجودة بأسعار عادلة مع خدمة عملاء استثنائية.",
    "about.story.desc2":
      "ما بدأ في مستودع متواضع في الرياض نما ليصبح أحد أكثر موردي قطع غيار السيارات ثقة في المملكة العربية السعودية.",
    "about.years.experience": "سنة خبرة",
    "about.happy.customers": "عميل سعيد",
    "about.mission": "المهمة",
    "about.vision": "الرؤية",
    "about.values": "القيم",
    "about.why.choose": "لماذا تختار قطع غيار السيارات المحترفة؟",
    "about.premium.quality": "جودة ممتازة",
    "about.fast.delivery": "توصيل سريع",
    "about.expert.support": "دعم خبراء",
    "about.warranty.protection": "حماية الضمان",

    // Contact
    "contact.title": "اتصل بنا",
    "contact.hero.desc": "نحن هنا للمساعدة في جميع احتياجاتك للسيارات",
    "contact.send.message": "أرسل لنا رسالة",
    "contact.first.name": "الاسم الأول",
    "contact.last.name": "اسم العائلة",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "رقم الهاتف",
    "contact.subject": "الموضوع",
    "contact.message": "الرسالة",
    "contact.send": "إرسال الرسالة",
    "contact.get.in.touch": "تواصل معنا",
    "contact.address": "العنوان",
    "contact.phone.label": "الهاتف",
    "contact.email.label": "البريد الإلكتروني",
    "contact.hours": "ساعات العمل",
    "contact.need.help": "تحتاج مساعدة فورية؟",
    "contact.call.now": "اتصل الآن",
    "contact.live.chat": "محادثة مباشرة",

    // Login
    "login.title": "تسجيل الدخول",
    "login.create.account": "إنشاء حساب جديد",
    "login.enter.credentials": "أدخل بياناتك للوصول إلى حسابك",
    "login.create.new": "أنشئ حساباً جديداً للبدء",
    "login.full.name": "الاسم الكامل",
    "login.password": "كلمة المرور",
    "login.confirm.password": "تأكيد كلمة المرور",
    "login.remember.me": "تذكرني",
    "login.forgot.password": "نسيت كلمة المرور؟",
    "login.sign.in": "تسجيل الدخول",
    "login.create": "إنشاء الحساب",
    "login.no.account": "ليس لديك حساب؟",
    "login.have.account": "لديك حساب بالفعل؟",
    "login.sign.up": "إنشاء حساب",
    "login.or": "أو",

    // Categories Page
    "categories.page.title": "فئات قطع الغيار",
    "categories.page.desc":
      "استكشف مجموعتنا الواسعة من قطع غيار السيارات المصنفة حسب النوع",
    "categories.popular": "الفئات الأكثر شعبية",
    "categories.popular.desc": "الفئات الأكثر طلباً من عملائنا",
    "categories.items": "منتج",
    "categories.available": "منتج متوفر",

    // Common
    "price.currency": "ريال",
    loading: "جاري التحميل...",
    error: "حدث خطأ",
    success: "تم بنجاح",
    new: "جديد",
    sale: "تخفيض",
    "start.shopping": "ابدأ التسوق",
    "trusted.brands": "العلامات التجارية الموثوقة",
    "stay.updated": "ابق على اطلاع",
    "newsletter.desc":
      "اشترك للحصول على عروض خاصة وهدايا مجانية وتحديثات على الوصولات الجديدة",
    "enter.email": "أدخل بريدك الإلكتروني",
    subscribe: "اشترك",
    "parts.available": "قطعة متوفرة",
    "review.items": "راجع منتجاتك قبل إتمام الشراء",
    "cart.items": "منتجات السلة",
    "order.summary": "ملخص الطلب",
  },
  en: {
    // Header
    "site.name": "AutoSpares Pro",
    "site.tagline": "Premium Auto Parts",
    "search.placeholder": "Search for auto parts...",
    "nav.home": "Home",
    "nav.shop": "Shop",
    "nav.categories": "Categories",
    "nav.brands": "Brands",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.register": "Register",

    // Homepage
    "hero.title": "Premium Auto Parts",
    "hero.subtitle":
      "Discover thousands of genuine auto parts for all vehicle makes and models. Quality guaranteed, fast delivery, competitive prices.",
    "hero.shop.now": "Shop Now",
    "hero.view.catalog": "View Catalog",

    // Features
    "feature.delivery": "Free Delivery",
    "feature.delivery.desc": "Free delivery on orders over 500 SAR",
    "feature.quality": "Quality Guarantee",
    "feature.quality.desc": "Quality guarantee on all products",
    "feature.support": "24/7 Support",
    "feature.support.desc": "Technical support around the clock",
    "feature.certified": "Certified Parts",
    "feature.certified.desc": "Certified and guaranteed parts",

    // Categories
    "categories.title": "Shop by Category",
    "categories.subtitle": "Find the perfect parts for your vehicle",
    "category.engine": "Engine Parts",
    "category.brake": "Brake System",
    "category.suspension": "Suspension",
    "category.electrical": "Electrical",
    "category.filters": "Filters",
    "category.transmission": "Transmission",
    "category.cooling": "Cooling System",
    "category.exhaust": "Exhaust System",
    "category.lighting": "Lighting System",
    "view.products": "View Products",
    "browse.products": "Browse Products",

    // Products
    "products.featured": "Featured Products",
    "products.bestselling": "Best selling auto parts this month",
    "add.to.cart": "Add to Cart",
    "buy.now": "Buy Now",
    "in.stock": "In Stock",
    "out.of.stock": "Out of Stock",

    // Cart
    "cart.title": "Shopping Cart",
    "cart.empty": "Your cart is empty",
    "cart.subtotal": "Subtotal",
    "cart.tax": "Tax",
    "cart.total": "Total",
    "cart.checkout": "Proceed to Checkout",
    "cart.shipping": "Shipping",
    "cart.free": "Free",
    "cart.clear.all": "Clear All",
    "cart.continue.shopping": "Continue Shopping",
    "cart.promo.code": "Promo Code",
    "cart.enter.code": "Enter code",
    "cart.apply": "Apply",
    "cart.we.accept": "We accept",

    // Shop & Filters
    "shop.title": "Auto Parts Shop",
    "shop.subtitle": "Browse our extensive collection of premium auto parts",
    "filters.title": "Filters",
    "filters.categories": "Categories",
    "filters.brands": "Brands",
    "filters.price.range": "Price Range",
    "filters.under.100": "Under 100 SAR",
    "filters.100.500": "100 - 500 SAR",
    "filters.500.1000": "500 - 1000 SAR",
    "filters.above.1000": "Above 1000 SAR",
    "filters.apply": "Apply Filters",
    "sort.featured": "Sort by: Featured",
    "sort.price.low": "Price: Low to High",
    "sort.price.high": "Price: High to Low",
    "sort.newest": "Newest First",
    "showing.results": "Showing 1-12 of 156 results",
    "view.all": "View All",

    // Footer
    "footer.company.desc":
      "Your trusted partner for premium auto parts and accessories. Quality guaranteed, service excellence delivered.",
    "footer.quick.links": "Quick Links",
    "footer.categories": "Categories",
    "footer.contact.us": "Contact Us",
    "footer.special.deals": "Special Deals",
    "footer.warranty": "Warranty",
    "footer.address": "123 Auto Street, Riyadh, Saudi Arabia",
    "footer.hours": "Sun-Thu: 8AM-10PM",
    "footer.rights": "All rights reserved 2024",

    // About
    "about.title": "About AutoSpares Pro",
    "about.hero.desc":
      "For over 15 years, we've been Saudi Arabia's trusted partner for premium auto parts, serving thousands of customers with quality, reliability, and exceptional service.",
    "about.our.story": "Our Story",
    "about.story.desc1":
      "Founded in 2009, AutoSpares Pro began as a small family business with a simple mission: to provide high-quality auto parts at fair prices with exceptional customer service.",
    "about.story.desc2":
      "What started in a modest warehouse in Riyadh has grown into one of Saudi Arabia's most trusted automotive parts suppliers.",
    "about.years.experience": "Years of Experience",
    "about.happy.customers": "Happy Customers",
    "about.mission": "Mission",
    "about.vision": "Vision",
    "about.values": "Values",
    "about.why.choose": "Why Choose AutoSpares Pro?",
    "about.premium.quality": "Premium Quality",
    "about.fast.delivery": "Fast Delivery",
    "about.expert.support": "Expert Support",
    "about.warranty.protection": "Warranty Protection",

    // Contact
    "contact.title": "Contact Us",
    "contact.hero.desc": "We're here to help with all your automotive needs",
    "contact.send.message": "Send us a Message",
    "contact.first.name": "First Name",
    "contact.last.name": "Last Name",
    "contact.email": "Email",
    "contact.phone": "Phone Number",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.get.in.touch": "Get in Touch",
    "contact.address": "Address",
    "contact.phone.label": "Phone",
    "contact.email.label": "Email",
    "contact.hours": "Business Hours",
    "contact.need.help": "Need Immediate Help?",
    "contact.call.now": "Call Now",
    "contact.live.chat": "Live Chat",

    // Login
    "login.title": "Login",
    "login.create.account": "Create Account",
    "login.enter.credentials": "Enter your credentials to access your account",
    "login.create.new": "Create a new account to get started",
    "login.full.name": "Full Name",
    "login.password": "Password",
    "login.confirm.password": "Confirm Password",
    "login.remember.me": "Remember me",
    "login.forgot.password": "Forgot password?",
    "login.sign.in": "Sign In",
    "login.create": "Create Account",
    "login.no.account": "Don't have an account?",
    "login.have.account": "Already have an account?",
    "login.sign.up": "Sign up",
    "login.or": "Or",

    // Categories Page
    "categories.page.title": "Auto Parts Categories",
    "categories.page.desc":
      "Explore our extensive collection of auto parts organized by category",
    "categories.popular": "Most Popular Categories",
    "categories.popular.desc": "The most requested categories by our customers",
    "categories.items": "Items",
    "categories.available": "products available",

    // Common
    "price.currency": "SAR",
    loading: "Loading...",
    error: "An error occurred",
    success: "Success",
    new: "New",
    sale: "Sale",
    "start.shopping": "Start Shopping",
    "trusted.brands": "Trusted Brands",
    "stay.updated": "Stay Updated",
    "newsletter.desc":
      "Subscribe to get special offers, free giveaways, and updates on new arrivals",
    "enter.email": "Enter your email",
    subscribe: "Subscribe",
    "parts.available": "Parts Available",
    "review.items": "Review your items before checkout",
    "cart.items": "Cart Items",
    "order.summary": "Order Summary",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  useEffect(() => {
    // Apply RTL/LTR to document
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
