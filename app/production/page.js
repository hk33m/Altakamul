import  Navbar  from "@/components/home/navbar";
import  Footer  from "@/components/home/footer";
import { FloatingContact } from "@/components/floating-contact";
import {
  Factory,
  Cpu,
  Gauge,
  Settings,
  Zap,
  BarChart3,
  Cog,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const productionSteps = [
  {
    step: 1,
    title: "استلام المواد الخام",
    description: "فحص وتحليل جميع المواد الخام قبل الدخول في خطوط الإنتاج",
    icon: CheckCircle,
  },
  {
    step: 2,
    title: "الطحن والخلط",
    description: "طحن المكونات ومزجها بنسب علمية محددة باستخدام أحدث المعدات",
    icon: Cog,
  },
  {
    step: 3,
    title: "التكييف والتبخير",
    description: "معالجة حرارية متقدمة لتحسين جودة العلف وقابلية الهضم",
    icon: Zap,
  },
  {
    step: 4,
    title: "التشكيل والتبريد",
    description: "تشكيل العلف بالأحجام المناسبة وتبريده للحفاظ على الجودة",
    icon: Settings,
  },
  {
    step: 5,
    title: "التعبئة والتغليف",
    description: "تعبئة آمنة ومحكمة تضمن الحفاظ على جودة المنتج",
    icon: Factory,
  },
];

const capabilities = [
  {
    icon: Gauge,
    title: "طاقة إنتاجية ضخمة",
    value: "120",
    unit: "طن/ساعة",
    description: "قدرة إنتاجية عالية تلبي احتياجات السوق",
  },
  {
    icon: Cpu,
    title: "تقنيات متقدمة",
    value: "100%",
    unit: "أتمتة",
    description: "خطوط إنتاج مؤتمتة بالكامل",
  },
  {
    icon: BarChart3,
    title: "كفاءة تشغيلية",
    value: "24/7",
    unit: "ساعة",
    description: "عمل متواصل على مدار الساعة",
  },
  {
    icon: Factory,
    title: "خطوط إنتاج",
    value: "4+",
    unit: "خطوط",
    description: "خطوط إنتاج متعددة ومتخصصة",
  },
];

const technologies = [
  {
    title: "أنظمة الخلط الذكية",
    description: "معدات خلط متطورة تضمن توزيعاً متجانساً للمكونات بدقة عالية",
  },
  {
    title: "التحكم الآلي بالجودة",
    description:
      "أنظمة مراقبة إلكترونية متصلة بالمختبر لضمان جودة كل دفعة إنتاجية",
  },
  {
    title: "معدات التكييف المتقدمة",
    description:
      "تقنيات تبخير وتكييف حديثة لتحسين القيمة الغذائية وقابلية الهضم",
  },
  {
    title: "مكابس التشكيل الحديثة",
    description:
      "مكابس عالية الكفاءة لإنتاج حبيبات علف بأحجام متنوعة حسب الطلب",
  },
  {
    title: "أنظمة التبريد والتجفيف",
    description: "معدات تبريد متطورة للحفاظ على جودة المنتج ومنع التلف",
  },
  {
    title: "خطوط التعبئة الآلية",
    description: "أنظمة تعبئة وتغليف أوتوماتيكية بسعات متنوعة",
  },
];

export const metadata = {
  title: "الإنتاج والتقنية | مصنع التكامل للأعلاف",
  description: "تعرف على خطوط الإنتاج الحديثة والتقنيات المتطورة في مصنع التكامل للأعلاف لضمان أعلى جودة وكفاءة في إنتاج الأعلاف.",
  keywords: ["الإنتاج", "التقنية", "خطوط الإنتاج", "أعلاف عالية الجودة", "معدات حديثة", "مصنع أعلاف"],
};

export default function ProductionPage() {
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
              الإنتاج والتقنية
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
              أحدث التقنيات وخطوط الإنتاج المتطورة لتصنيع أعلاف عالية الجودة
            </p>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block text-sm font-semibold text-takar">
                قدراتنا الإنتاجية
              </span>
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-taka">
                طاقة إنتاجية استثنائية
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                نمتلك أحدث خطوط الإنتاج المؤتمتة بالكامل مع طاقة إنتاجية تصل إلى
                120 طن في الساعة
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((cap, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-takarr text-takar">
                      <cap.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-lg">{cap.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-taka">
                        {cap.value}
                      </span>
                      <span className="mr-1 text-muted-foreground">
                        {cap.unit}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {cap.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Production Process */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block text-sm font-semibold text-takar">
                مراحل التصنيع
              </span>
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-taka">
                عملية التصنيع الذكية
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                نتبع منهجية إنتاج متكاملة تضمن أعلى معايير الجودة في كل مرحلة
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute right-8 top-0 hidden h-full w-0.5 bg-border lg:right-1/2 lg:block" />

              <div className="space-y-8">
                {productionSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-6 lg:gap-12  ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "lg:text-left" : "lg:text-right"
                      }`}
                    >
                      <Card className="relative">
                        <CardContent className="p-6">
                          <div className="mb-3 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-takar text-primary-foreground">
                              {step.step}
                            </div>
                            <h3 className="text-xl font-semibold">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-primary bg-background lg:flex">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="hidden flex-1 lg:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block text-sm font-semibold text-takar">
                التقنيات المستخدمة
              </span>
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-taka">
                أحدث التقنيات العالمية
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                نستخدم أحدث المعدات والتقنيات من كبرى الشركات العالمية المتخصصة
                في صناعة الأعلاف
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((tech, index) => (
                <Card
                  key={index}
                  className="group transition-all hover:shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-taka">{tech.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{tech.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="/modern-feed-production-line-machinery.jpg"
                  alt="خط الإنتاج"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="/industrial-feed-manufacturing-factory-aerial-view.jpg"
                  alt="المصنع من الداخل"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl md:col-span-2 lg:col-span-1">
                <img
                  src="/quality-control-laboratory-feed-testing.jpg"
                  alt="مختبر الجودة"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
