"use client";

import React from "react";
import { useState } from "react";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import { FloatingContact } from "@/components/floating-contact";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building2,
  Headphones,
  CheckCircle2,
} from "lucide-react";

const socialLinks = [
  {
    name: "واتساب",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    href: "https://wa.me/966556815070",
    color: "bg-green-600 hover:bg-green-700",
  },
  {
    name: "سناب شات",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.389.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.149-.052-.225.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z" />
      </svg>
    ),
    href: "https://www.snapchat.com/@altakamulfeed?src=QR_CODE",
    color: "bg-yellow-400 hover:bg-yellow-500",
  },
  // {
  //   name: "تويتر",
  //   icon: (
  //     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
  //       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  //     </svg>
  //   ),
  //   href: "https://twitter.com/takamol_factory",
  //   color: "bg-black hover:bg-gray-800",
  // },
  // {
  //   name: "انستقرام",
  //   icon: (
  //     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
  //       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  //     </svg>
  //   ),
  //   href: "https://instagram.com/takamol_factory",
  //   color:
  //     "bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 hover:opacity-90",
  // },
  {
    name: "فيسبوك",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    href: "https://www.facebook.com/share/1GJoMahDaT",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    name: "لينكدإن",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: "https://www.linkedin.com/in/altakamul-feed-mill-369a55393?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    color: "bg-blue-700 hover:bg-blue-800",
  },
  //,
  // {
  //   name: "يوتيوب",
  //   icon: (
  //     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
  //       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  //     </svg>
  //   ),
  //   href: "https://youtube.com/@takamol_factory",
  //   color: "bg-red-600 hover:bg-red-700",
  // },
];

const contactInfo = [
  {
    icon: Phone,
    title: "الهاتف",
    details: ["+966 55 681 5070"],
    action: "tel:+966556815070",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    details: ["fahd90352@gmail.com"],
    action: "mailto:fahd90352@gmail.com",
  },
  {
    icon: MapPin,
    title: "العنوان",
    details: [
      "خميس مشيط - صمخ - طريق بيشة",
      "ص.ب: 7651 - الرمز البريدي: 62678",
    ],
    action: null,
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    details: ["السبت - الخميس: 8:00 ص - 5:00 م", "الجمعة: مغلق"],
    action: null,
  },
];

const features = [
  { icon: Building2, title: "مقر رئيسي", desc: "خميس مشيط" },
  { icon: Headphones, title: "دعم فني", desc: "24/7" },
  { icon: CheckCircle2, title: "رد سريع", desc: "خلال 24 ساعة" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-bl from-primary via-taka to-primary/90 py-24 lg:py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/industrial-factory-pattern.jpg')] opacity-5" />
            <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-primary-foreground backdrop-blur-sm">
                <MessageCircle className="h-4 w-4" />
                نسعد بتواصلكم معنا
              </div>
              <h1 className="mb-6 text-4xl font-bold text-primary-foreground lg:text-6xl">
                تواصل معنا
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-primary-foreground leading-relaxed">
                فريقنا المتخصص جاهز للإجابة على جميع استفساراتك وتقديم أفضل
                الحلول لاحتياجات مزرعتك
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl  bg-white/10 px-5 py-3 backdrop-blur-sm"
                  >
                    <feature.icon className="h-5 w-5 text-amber-400" />
                    <div className="text-right">
                      <p className="text-xs text-white/60">{feature.title}</p>
                      <p className="font-semibold text-white">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative -mt-16 pb-16 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {/* Main contact card */}
                <Card className="overflow-hidden border-0 bg-white shadow-xl dark:bg-card">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-primary to-takar p-6 text-white">
                      <h2 className="mb-2 text-xl font-bold">
                        معلومات التواصل
                      </h2>
                      <p className="text-sm text-white/80">
                        يسعدنا تواصلكم عبر أي من القنوات التالية
                      </p>
                    </div>
                    <div className="divide-y">
                      {contactInfo.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 transition-colors hover:bg-muted/50"
                        >
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <h3 className="mb-1 font-semibold">{item.title}</h3>
                            {item.details.map((detail, i) => (
                              <p
                                key={i}
                                className="text-sm text-muted-foreground"
                              >
                                {item.action && i === 0 ? (
                                  <a
                                    href={item.action}
                                    className="transition-colors hover:text-primary"
                                    dir={
                                      item.title === "الهاتف" ? "ltr" : "rtl"
                                    }
                                  >
                                    {detail}
                                  </a>
                                ) : (
                                  detail
                                )}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white shadow-xl dark:bg-card">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-bold">تابعنا على</h3>
                    <div className="grid grid-cols-4 gap-3">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex h-12 w-12 items-center justify-center rounded-xl text-white transition-transform hover:scale-110 ${social.color}`}
                          title={social.name}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-0 bg-gradient-to-br from-green-600 to-green-700 shadow-xl">
                  <CardContent className="p-6 text-white">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
                      <MessageCircle className="h-7 w-7" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">تواصل مباشر</h3>
                    <p className="mb-4 text-sm text-white/80">
                      للاستفسارات السريعة، تواصل معنا مباشرة عبر واتساب
                    </p>
                    <Button
                      asChild
                      size="lg"
                      variant="secondary"
                      className="w-full"
                    >
                      <a
                        href="https://wa.me/966556815070"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ابدأ المحادثة
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                <Card className="border-0 bg-white shadow-xl dark:bg-card">
                  <CardContent className="p-8">
                    <div className="mb-8">
                      <h2 className="mb-2 text-2xl font-bold">أرسل رسالتك</h2>
                      <p className="text-muted-foreground">
                        املأ النموذج التالي وسنقوم بالرد عليك في أقرب وقت ممكن
                      </p>
                    </div>

                    {isSubmitted ? (
                      <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                          <CheckCircle2 className="h-10 w-10" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">
                          تم إرسال رسالتك بنجاح
                        </h3>
                        <p className="text-muted-foreground">
                          سنقوم بالرد عليك في أقرب وقت ممكن
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              الاسم الكامل{" "}
                              <span className="text-destructive">*</span>
                            </label>
                            <Input
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="أدخل اسمك الكامل"
                              className="h-12"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              البريد الإلكتروني{" "}
                              <span className="text-destructive">*</span>
                            </label>
                            <Input
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="example@email.com"
                              className="h-12"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              رقم الجوال
                            </label>
                            <Input
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="05XXXXXXXX"
                              className="h-12"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              اسم الشركة / المزرعة
                            </label>
                            <Input
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="اختياري"
                              className="h-12"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            الموضوع <span className="text-destructive">*</span>
                          </label>
                          <Input
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="موضوع الرسالة"
                            className="h-12"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">
                            الرسالة <span className="text-destructive">*</span>
                          </label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="اكتب رسالتك هنا..."
                            rows={6}
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="h-14 w-full text-base bg-takar"
                        >
                          <Send className="ml-2 h-5 w-5" />
                          إرسال الرسالة
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold text-taka">موقعنا على الخريطة</h2>
              <p className="mx-auto max-w-xl text-muted-foreground">
                خميس مشيط - صمخ - طريق بيشة، المملكة العربية السعودية
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.0!2d42.7!3d18.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDE4JzAwLjAiTiA0MsKwNDInMDAuMCJF!5e0!3m2!1sen!2ssa!4v1600000000000!5m2!1sen!2ssa"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع مصنع التكامل للأعلاف"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
