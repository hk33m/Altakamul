import  Navbar from "@/components/home/navbar";
import  Footer  from "@/components/home/footer";
import { FloatingContact } from "@/components/floating-contact";
import {
  Shield,
  Award,
  Microscope,
  FileCheck,
  CheckCircle,
  ClipboardCheck,
  FlaskConical,
  Truck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const qualityPillars = [
  {
    icon: Shield,
    title: "معايير جودة صارمة",
    description:
      "نطبق أعلى معايير الجودة العالمية في جميع مراحل الإنتاج من استلام المواد الخام حتى التسليم",
  },
  {
    icon: Microscope,
    title: "مختبرات متقدمة",
    description:
      "مختبرات مجهزة بأحدث الأجهزة لإجراء فحوصات دورية ومستمرة لضمان سلامة ونقاء المنتجات",
  },
  {
    icon: Award,
    title: "شهادات دولية",
    description:
      "حاصلون على اعتمادات من أبرز الهيئات العالمية في مجال صناعة الأعلاف",
  },
  {
    icon: FileCheck,
    title: "توثيق شامل",
    description:
      "نظام تتبع متكامل يضمن الشفافية الكاملة في كل مرحلة من مراحل الإنتاج",
  },
];

const inspectionSteps = [
  {
    icon: Truck,
    title: "فحص المواد الخام",
    description: "تحليل شامل لجميع المواد الخام قبل دخولها خطوط الإنتاج",
    tests: ["فحص الرطوبة", "تحليل البروتين", "الكشف عن السموم", "فحص النقاء"],
  },
  {
    icon: FlaskConical,
    title: "مراقبة عملية الإنتاج",
    description: "متابعة مستمرة لجميع مراحل التصنيع وضبط المعايير",
    tests: ["درجة الحرارة", "نسب الخلط", "جودة التكييف", "حجم الحبيبات"],
  },
  {
    icon: ClipboardCheck,
    title: "فحص المنتج النهائي",
    description: "اختبارات شاملة للتأكد من مطابقة المنتج للمواصفات",
    tests: ["التحليل الغذائي", "الكثافة", "المتانة", "فترة الصلاحية"],
  },
  {
    icon: CheckCircle,
    title: "ضمان الجودة",
    description: "توثيق وأرشفة جميع نتائج الفحوصات وإصدار شهادات الجودة",
    tests: ["شهادة المطابقة", "تقرير التحليل", "بطاقة التتبع", "ضمان الجودة"],
  },
];

const certifications = [
  { name: "نظام إدارة الجودة ISO 9001", status: "معتمد" },
  { name: "نظام سلامة الغذاء ISO 22000", status: "معتمد" },
  { name: "ممارسات التصنيع الجيدة GMP", status: "معتمد" },
  { name: "نظام تحليل المخاطر HACCP", status: "معتمد" },
];

const faqs = [
  {
    question: "ما هي المعايير التي تتبعونها في ضبط الجودة؟",
    answer:
      "نتبع أعلى المعايير الدولية في ضبط الجودة بما في ذلك ISO 9001 و ISO 22000 و HACCP، بالإضافة إلى معايير هيئة الغذاء والدواء السعودية.",
  },
  {
    question: "كيف تضمنون سلامة المواد الخام؟",
    answer:
      "نجري فحوصات شاملة لجميع المواد الخام قبل استلامها تشمل تحليل المكونات الغذائية، الكشف عن السموم والملوثات، وفحص الرطوبة والنقاء.",
  },
  {
    question: "هل يمكنني الحصول على شهادة تحليل للمنتج؟",
    answer:
      "نعم، نوفر شهادات تحليل مفصلة لجميع منتجاتنا توضح التركيب الغذائي ونتائج الفحوصات. يمكنك طلبها من فريق المبيعات.",
  },
  {
    question: "ما هي فترة صلاحية منتجاتكم؟",
    answer:
      "تختلف فترة الصلاحية حسب نوع المنتج وظروف التخزين، وعادة تتراوح بين 3-6 أشهر عند التخزين في ظروف مناسبة. جميع المنتجات مؤرخة بوضوح.",
  },
];

export const metadata = {
  title: "الجودة | مصنع التكامل للأعلاف",
  description: "نضمن أعلى معايير الجودة في كل منتجات مصنع التكامل للأعلاف، مع الالتزام بالمواصفات العالمية والرقابة الصارمة.",
  keywords: ["الجودة", "معايير الجودة", "رقابة", "أعلاف مضمونة", "إنتاج عالي الجودة", "مصنع أعلاف"],
};

export default function QualityPage() {
  return (
    <div className="flex min-h-screen flex-col dark:bg-[#64312C]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary py-20 lg:py-28">
          <div className="absolute inset-0 opacity-10">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url('/quality.jpg')`,
              }}
            />
          </div>
          <div className="container relative mx-auto px-4 text-center lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-takarr lg:text-5xl">
              الجودة والشهادات
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
              التزامنا الراسخ بأعلى معايير الجودة العالمية في كل مرحلة
            </p>
          </div>
        </section>

        {/* Quality Pillars */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block text-sm font-semibold text-takar">
                سياسة الجودة
              </span>
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-taka" >
                ركائز الجودة لدينا
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                نؤمن بأن الجودة ليست خياراً بل التزام راسخ نحو عملائنا وشركائنا
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {qualityPillars.map((pillar, index) => (
                <Card
                  key={index}
                  className="group text-center transition-all hover:shadow-lg dark:bg-cardark"
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-takarr text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <pillar.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-lg">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Inspection Workflow */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block text-sm font-semibold text-primary">
                إجراءات الفحص
              </span>
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
                منظومة ضبط الجودة
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                نظام متكامل للفحص والمراقبة يضمن جودة المنتج في كل مرحلة
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {inspectionSteps.map((step, index) => (
                <Card key={index} className="relative overflow-hidden dark:bg-cardark">
                  <div className="absolute -left-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-takarr text-3xl font-bold text-primary/30">
                    {index + 1}
                  </div>
                  <CardHeader className="pt-8">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-takarr text-primary">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg text-taka">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                    <ul className="space-y-1">
                      {step.tests.map((test, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-takar" />
                          <span>{test}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="mb-4 inline-block text-sm font-semibold text-takar">
                  الشهادات والاعتمادات
                </span>
                <h2 className="mb-6 text-3xl font-bold lg:text-4xl text-taka">
                  معتمدون دولياً
                </h2>
                <p className="mb-8 text-muted-foreground leading-relaxed">
                  حصلنا على أبرز الشهادات والاعتمادات الدولية في مجال صناعة
                  الأعلاف، مما يؤكد التزامنا بأعلى معايير الجودة والسلامة
                  الغذائية.
                </p>

                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border bg-card p-4 dark:bg-cardark"
                    >
                      <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-primary" />
                        <span className="font-medium">{cert.name}</span>
                      </div>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {cert.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <img
                    src="https://cornflowerblue-albatross-308247.hostingersite.com/images/quality.jpg"
                    alt="مختبر الجودة"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 rounded-xl bg-taka p-6 text-primary-foreground shadow-xl">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">نسبة المطابقة</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 ">
            <div className="mb-12 text-center ">
              <span className="mb-4 inline-block text-sm font-semibold text-takar">
                الأسئلة الشائعة
              </span>
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-taka">
                أسئلة حول الجودة
              </h2>
            </div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="space-y-4 ">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-lg border bg-card px-6 dark:bg-cardark"
                  >
                    <AccordionTrigger className="text-right hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
