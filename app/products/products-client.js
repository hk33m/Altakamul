"use client";

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useState } from "react";
import  Navbar  from "@/components/home/navbar";
import  Footer  from "@/components/home/footer";
import { FloatingContact } from "@/components/floating-contact";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "breeder",
    title: "أعلاف الأمهات",
    titleEn: "Breeder Feed",
    description:
      "مصممة لدعم الخصوبة وتحسين صحة القطيع، بما يضمن إنتاج كتاكيت قوية وعالية الجودة.",
    fullDescription:
      "أعلاف الأمهات من مصنع التكامل مصممة خصيصاً لتلبية الاحتياجات الغذائية الفريدة لقطعان التربية. توفر تركيبتنا المتوازنة جميع العناصر الغذائية الضرورية لدعم الخصوبة العالية وإنتاج بيض فقس ممتاز.",
    image: "/breeder-chicken-feed-pellets.jpg",
    badge: "عالي الجودة",
    benefits: [
      "تحسين معدلات الخصوبة والفقس",
      "دعم صحة الأمهات خلال فترة الإنتاج",
      "تعزيز جودة البيض وقوة الكتاكيت",
      "توازن مثالي للفيتامينات والمعادن",
      "تركيبة علمية مدروسة",
    ],
    usage: "قطعان التربية والأمهات في جميع مراحل الإنتاج",
  },
  {
    id: "layer",
    title: "أعلاف البياض",
    titleEn: "Layer Feed",
    description:
      "تدعم زيادة إنتاج البيض وتحافظ على جودته وقيمته الغذائية العالية.",
    fullDescription:
      "أعلاف البياض مصممة لتحقيق أقصى إنتاجية من البيض مع الحفاظ على جودة القشرة والمحتوى الغذائي. تركيبتنا توفر الكالسيوم والفوسفور بنسب مثالية لضمان قشرة قوية وبيض عالي الجودة.",
    image: "/layer-chicken-feed-with-eggs.jpg",
    badge: "الأكثر مبيعاً",
    benefits: [
      "زيادة معدل إنتاج البيض",
      "تحسين جودة القشرة وسمكها",
      "رفع القيمة الغذائية للبيض",
      "دعم صحة الدجاج البياض",
      "كفاءة عالية في التحويل الغذائي",
    ],
    usage: "الدجاج البياض في مرحلة الإنتاج الكامل",
  },
  {
    id: "broiler",
    title: "أعلاف اللاحم",
    titleEn: "Broiler Feed",
    description:
      "تركيبات غنية ومتوازنة تساهم في تحقيق نمو سريع ووزن مثالي خلال فترة التسمين.",
    fullDescription:
      "أعلاف اللاحم من مصنع التكامل مصممة لتحقيق أسرع معدلات نمو مع الحفاظ على صحة الطيور. نوفر تركيبات متخصصة لكل مرحلة من مراحل التربية: البادئ، النامي، والناهي.",
    image: "/broiler-chicken-feed-grains.jpg",
    badge: "نمو سريع",
    benefits: [
      "معدلات نمو متسارعة",
      "تحويل غذائي ممتاز",
      "تحسين جودة اللحم",
      "تقليل فترة التربية",
      "صحة مثالية للطيور",
    ],
    usage: "دجاج اللاحم في جميع مراحل التربية (بادئ - نامي - ناهي)",
  },
  {
    id: "cattle",
    title: "أعلاف الماشية",
    titleEn: "Cattle Feed",
    description:
      "توفر تغذية متوازنة تضمن صحة أفضل وإنتاجية مستدامة في اللحوم أو الألبان.",
    fullDescription:
      "أعلاف الماشية من مصنع التكامل مصممة لتلبية الاحتياجات الغذائية المتنوعة للأبقار والأغنام والماعز. سواء كانت للحليب أو اللحم، توفر تركيباتنا التوازن المثالي للطاقة والبروتين.",
    image: "/cattle-livestock-feed-pellets.jpg",
    badge: "تغذية متكاملة",
    benefits: [
      "زيادة إنتاج الحليب",
      "تحسين معدلات النمو",
      "دعم صحة الجهاز الهضمي",
      "تعزيز المناعة الطبيعية",
      "جودة عالية للحم",
    ],
    usage: "الأبقار والأغنام والماعز للحليب واللحم",
  },
];

export default function ProductsPage() {
  
  const searchParams = useSearchParams()
const initialTab = searchParams.get("tab") || "breeder"

const [activeTab, setActiveTab] = useState(initialTab)

useEffect(() => {
  const paramTab = searchParams.get("tab")
  if (paramTab) {
    setActiveTab(paramTab)

    // بعد تغيير التاب — ننزل للسكشن
    setTimeout(() => {
      window.scrollTo({ top: 300, behavior: "smooth" })
    }, 100)
  }
}, [searchParams])


  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary py-20 lg:py-28">
          <div className="absolute inset-0 opacity-10">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url('/modern-feed-production-line-machinery.jpg')`,
              }}
            />
          </div>
          <div className="container relative mx-auto px-4 text-center lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-takarr lg:text-5xl">
              منتجاتنا
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
              حلول غذائية متخصصة تلبي مختلف احتياجات المربين والمزارع بأعلى
              معايير الجودة العالمية
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
              dir="rtl"
            >
              <TabsList className="mb-8 grid w-full grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                  <TabsTrigger
                    key={product.id}
                    value={product.id}
                    className="text-sm lg:text-base"
                  >
                    {product.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {products.map((product) => (
                <TabsContent
                  key={product.id}
                  value={product.id}
                  id={product.id}
                >
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Product Image */}
                    <div className="relative">
                      <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                        {product.badge}
                      </Badge>
                    </div>

                    {/* Product Details */}
                    <div>
                      <div className="mb-2">
                        <span className="text-sm text-muted-foreground">
                          {product.titleEn}
                        </span>
                      </div>
                      <h2 className="mb-4 text-3xl font-bold text-taka">
                        {product.title}
                      </h2>
                      <p className="mb-6 text-muted-foreground leading-relaxed">
                        {product.fullDescription}
                      </p>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h3 className="mb-3 font-semibold text-takar ">
                          المميزات والفوائد:
                        </h3>
                        <ul className="space-y-2">
                          {product.benefits.map((benefit, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 "
                            >
                              <Check className="h-5 w-5 shrink-0 text-takar" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Usage */}
                      <div className="mb-8 rounded-lg bg-muted/50 p-4">
                        <h3 className="mb-2 font-semibold">
                          الاستخدام المستهدف:
                        </h3>
                        <p className="text-muted-foreground">{product.usage}</p>
                      </div>

                      <Button asChild size="lg" className="group bg-taka">
                        <Link href="/contact">
                          طلب عرض سعر
                          <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* All Products Grid */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-taka">جميع المنتجات</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                جميع منتجاتنا مصنوعة وفق أحدث التقنيات وأعلى المعايير العالمية
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="group cursor-pointer overflow-hidden transition-all hover:shadow-xl"
                  onClick={() => {
                    setActiveTab(product.id);
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                      {product.badge}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-taka">{product.title}</CardTitle>
                    <CardDescription className="text-xs text-takar">
                      {product.titleEn}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-takar">هل تحتاج إلى استشارة؟</h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              فريقنا المتخصص جاهز لمساعدتك في اختيار المنتج الأنسب لاحتياجاتك
              وتقديم الدعم الفني اللازم
            </p>
            <Button asChild size="lg" className={"bg-taka"}>
              <Link href="/contact">
                تواصل مع فريق المبيعات
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
