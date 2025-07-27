import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us / اتصل بنا</h1>
          <p className="text-xl text-blue-100">We're here to help with all your automotive needs</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message / أرسل لنا رسالة</h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name / الاسم الأول</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name / اسم العائلة</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email / البريد الإلكتروني</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number / رقم الهاتف</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+966 123 456 789"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject / الموضوع</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select a subject / اختر موضوع</option>
                      <option>Product Inquiry / استفسار عن منتج</option>
                      <option>Order Support / دعم الطلب</option>
                      <option>Technical Support / الدعم التقني</option>
                      <option>Warranty Claim / مطالبة الضمان</option>
                      <option>General Question / سؤال عام</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message / الرسالة</label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message / إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch / تواصل معنا</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address / العنوان</h3>
                      <p className="text-gray-600">
                        123 Auto Parts Street
                        <br />
                        Al-Malaz District, Riyadh 12345
                        <br />
                        Saudi Arabia
                      </p>
                      <p className="text-gray-600 mt-2">
                        شارع قطع غيار السيارات 123
                        <br />
                        حي الملز، الرياض 12345
                        <br />
                        المملكة العربية السعودية
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone / الهاتف</h3>
                      <p className="text-gray-600">+966 123 456 789</p>
                      <p className="text-gray-600">+966 987 654 321</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email / البريد الإلكتروني</h3>
                      <p className="text-gray-600">info@autospares.com</p>
                      <p className="text-gray-600">support@autospares.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours / ساعات العمل</h3>
                      <p className="text-gray-600">
                        Sunday - Thursday: 8:00 AM - 10:00 PM
                        <br />
                        Friday: 2:00 PM - 10:00 PM
                        <br />
                        Saturday: 8:00 AM - 10:00 PM
                      </p>
                      <p className="text-gray-600 mt-2">
                        الأحد - الخميس: 8:00 ص - 10:00 م<br />
                        الجمعة: 2:00 م - 10:00 م<br />
                        السبت: 8:00 ص - 10:00 م
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardContent className="p-0">
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=256&width=400"
                    alt="Location Map"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-blue-50">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help? / تحتاج مساعدة فورية؟</h3>
                <p className="text-gray-600 mb-6">Our customer service team is available 24/7 to assist you</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now / اتصل الآن
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Live Chat / محادثة مباشرة
                  </Button>
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
