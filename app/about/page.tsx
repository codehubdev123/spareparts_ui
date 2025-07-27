import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Truck, Shield, Target, Eye, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">About AutoSpares Pro</h1>
            <h2 className="text-3xl mb-6 text-blue-200">من نحن - قطع غيار السيارات</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              For over 15 years, we've been Saudi Arabia's trusted partner for premium auto parts, serving thousands of
              customers with quality, reliability, and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story / قصتنا</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2009, AutoSpares Pro began as a small family business with a simple mission: to provide
                high-quality auto parts at fair prices with exceptional customer service. What started in a modest
                warehouse in Riyadh has grown into one of Saudi Arabia's most trusted automotive parts suppliers.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                تأسست شركة قطع غيار السيارات المحترفة في عام 2009 كشركة عائلية صغيرة بمهمة بسيطة: توفير قطع غيار
                السيارات عالية الجودة بأسعار عادلة مع خدمة عملاء استثنائية. ما بدأ في مستودع متواضع في الرياض نما ليصبح
                أحد أكثر موردي قطع غيار السيارات ثقة في المملكة العربية السعودية.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
            <div>
              <img src="/placeholder.svg?height=500&width=600" alt="Our Warehouse" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission, Vision & Values</h2>
            <p className="text-xl text-gray-600">رؤيتنا ومهمتنا وقيمنا</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Mission / المهمة</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide premium auto parts and exceptional service that keeps vehicles running safely and
                  efficiently, while building lasting relationships with our customers based on trust and reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Vision / الرؤية</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the Middle East's leading automotive parts supplier, recognized for innovation, quality, and
                  customer satisfaction, while contributing to safer roads and sustainable transportation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Values / القيم</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quality, integrity, customer focus, innovation, and community responsibility guide everything we do.
                  We believe in honest business practices and treating every customer like family.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose AutoSpares Pro?</h2>
            <p className="text-xl text-gray-600">لماذا تختار قطع غيار السيارات المحترفة؟</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Only genuine and OEM-equivalent parts from trusted manufacturers worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Same-day delivery in major cities, nationwide shipping within 24-48 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Knowledgeable team ready to help you find the right parts for your vehicle.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Warranty Protection</h3>
              <p className="text-gray-600">Comprehensive warranty coverage on all parts for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team / تعرف على فريقنا</h2>
            <p className="text-xl text-gray-600">The experts behind your automotive needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Ahmed Al-Rashid",
                nameAr: "أحمد الراشد",
                position: "CEO & Founder",
                positionAr: "الرئيس التنفيذي والمؤسس",
              },
              {
                name: "Sarah Al-Mahmoud",
                nameAr: "سارة المحمود",
                position: "Operations Manager",
                positionAr: "مدير العمليات",
              },
              {
                name: "Omar Al-Zahra",
                nameAr: "عمر الزهراء",
                position: "Technical Specialist",
                positionAr: "أخصائي تقني",
              },
              {
                name: "Fatima Al-Nasser",
                nameAr: "فاطمة الناصر",
                position: "Customer Service Lead",
                positionAr: "رئيس خدمة العملاء",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={`/placeholder.svg?height=150&width=150&query=professional headshot ${member.name}`}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-1">{member.nameAr}</p>
                  <p className="text-blue-600 font-medium">{member.position}</p>
                  <p className="text-sm text-gray-500">{member.positionAr}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-200">Parts in Stock</div>
              <div className="text-sm text-blue-300">قطعة في المخزون</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Years Experience</div>
              <div className="text-sm text-blue-300">سنة خبرة</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100,000+</div>
              <div className="text-blue-200">Happy Customers</div>
              <div className="text-sm text-blue-300">عميل سعيد</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Customer Support</div>
              <div className="text-sm text-blue-300">دعم العملاء</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
