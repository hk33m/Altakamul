import  Navbar  from "@/components/home/navbar";
import  Footer  from "@/components/home/footer";
import { FloatingContact } from "@/components/floating-contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Leaf,
  Recycle,
  Droplets,
  Sun,
  Wind,
  TreePine,
  Factory,
  Users,
} from "lucide-react";

const sustainabilityPillars = [
  {
    icon: Leaf,
    title: "المسؤولية البيئية",
    description:
      "نلتزم بتقليل الأثر البيئي لعملياتنا من خلال استخدام تقنيات صديقة للبيئة",
  },
  {
    icon: Recycle,
    title: "إعادة التدوير",
    description: "برامج متكاملة لإعادة تدوير المخلفات وتحويلها إلى موارد مفيدة",
  },
  {
    icon: Droplets,
    title: "ترشيد المياه",
    description:
      "أنظمة حديثة لترشيد استهلاك المياه وإعادة استخدامها في العمليات",
  },
  {
    icon: Sun,
    title: "الطاقة المتجددة",
    description: "استثمار في مصادر الطاقة النظيفة لتشغيل المصنع",
  },
];

const initiatives = [
  {
    title: "تقليل الانبعاثات الكربونية",
    description:
      "تطبيق أحدث التقنيات لتقليل الانبعاثات الكربونية الناتجة عن عمليات التصنيع",
    progress: 75,
  },
  {
    title: "إدارة المخلفات",
    description: "نظام متكامل لإدارة المخلفات وتحويلها إلى سماد عضوي أو طاقة",
    progress: 85,
  },
  {
    title: "كفاءة استهلاك الطاقة",
    description: "تحسين كفاءة استهلاك الطاقة في جميع مراحل الإنتاج",
    progress: 80,
  },
  {
    title: "المشتريات المستدامة",
    description: "اختيار موردين ملتزمين بمعايير الاستدامة البيئية والاجتماعية",
    progress: 70,
  },
];

const socialResponsibility = [
  {
    icon: Users,
    title: "تنمية المجتمع المحلي",
    description: "دعم برامج التنمية المحلية وتوفير فرص عمل للمجتمع المحيط",
  },
  {
    icon: Factory,
    title: "بيئة عمل آمنة",
    description: "توفير بيئة عمل صحية وآمنة لجميع موظفينا وفق أعلى المعايير",
  },
  {
    icon: TreePine,
    title: "التشجير والمساحات الخضراء",
    description: "المساهمة في مشاريع التشجير وإنشاء مساحات خضراء في المنطقة",
  },
  {
    icon: Wind,
    title: "نشر الوعي البيئي",
    description: "برامج توعوية لنشر ثقافة الاستدامة بين الموظفين والمجتمع",
  },
];

export const metadata = {
  title: "الاستدامة | مصنع التكامل للأعلاف",
  description: "نلتزم في مصنع التكامل للأعلاف بممارسات الاستدامة البيئية والمسؤولية الاجتماعية لضمان إنتاج أعلاف صديقة للبيئة.",
  keywords: ["استدامة", "بيئة", "مسؤولية اجتماعية", "أعلاف صديقة للبيئة", "مصنع أعلاف", "إنتاج مستدام"],
};


export default function SustainabilityPage() {
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
                backgroundImage: `url('/poultry-farm-with-healthy-chickens.jpg')`,
              }}
            />
          </div>
          <div className="container relative mx-auto px-4 text-center lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-takarr lg:text-5xl">
              الاستدامة
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
              التزامنا بالمسؤولية البيئية والاجتماعية من أجل مستقبل أفضل
            </p>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Leaf className="mx-auto mb-6 h-16 w-16 text-takar" />
              <h2 className="mb-6 text-3xl font-bold lg:text-4xl text-balance text-taka">
                رؤيتنا للاستدامة
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                نؤمن في مصنع التكامل للأعلاف بأن الاستدامة ليست خياراً، بل هي
                مسؤولية تجاه البيئة والأجيال القادمة. نسعى لتحقيق التوازن بين
                النمو الاقتصادي والمحافظة على الموارد الطبيعية، من خلال تبني
                أفضل الممارسات البيئية في جميع عملياتنا.
              </p>
            </div>
          </div>
        </section>

        {/* Sustainability Pillars */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block text-sm font-semibold text-takar">
                ركائز الاستدامة
              </span>
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-taka">
                التزاماتنا البيئية
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {sustainabilityPillars.map((pillar, index) => (
                <Card
                  key={index}
                  className="group text-center transition-all hover:shadow-lg dark:bg-cardark"
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-takar group-hover:text-primary-foreground">
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

        {/* Initiatives Progress */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block text-sm font-semibold text-takar">
                مبادراتنا
              </span>
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-taka">
                التقدم نحو أهدافنا
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                نعمل باستمرار على تحقيق أهدافنا البيئية ونتابع تقدمنا بشفافية
              </p>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              {initiatives.map((initiative, index) => (
                <Card key={index} className={"dark:bg-cardark"}>
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-semibold text-taka">{initiative.title}</h3>
                      <span className="text-sm font-medium text-primary">
                        {initiative.progress}%
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {initiative.description}
                    </p>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-takar transition-all"
                        style={{ width: `${initiative.progress}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Responsibility */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block text-sm font-semibold text-taka">
                المسؤولية الاجتماعية
              </span>
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-taka">
                التزامنا تجاه المجتمع
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                نؤمن بدورنا في دعم المجتمع المحلي وتحقيق التنمية المستدامة
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {socialResponsibility.map((item, index) => (
                <Card
                  key={index}
                  className="group transition-all hover:shadow-lg dark:bg-cardark"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-taka">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainable Feed Solutions */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="mb-4 inline-block text-sm font-semibold text-takar">
                  حلول مستدامة
                </span>
                <h2 className="mb-6 text-3xl font-bold lg:text-4xl text-balance text-taka">
                  أعلاف صديقة للبيئة
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    نعمل على تطوير تركيبات أعلاف مستدامة تقلل من الأثر البيئي
                    للإنتاج الحيواني، من خلال تحسين كفاءة التحويل الغذائي وتقليل
                    الانبعاثات الناتجة.
                  </p>
                  <p>
                    نستخدم مكونات مستدامة ونبحث باستمرار عن بدائل بروتينية صديقة
                    للبيئة، مع الحفاظ على أعلى معايير الجودة والقيمة الغذائية.
                  </p>
                  <p>
                    هدفنا هو تمكين المربين من تحقيق إنتاجية عالية مع تقليل
                    البصمة البيئية لمشاريعهم، مساهمين في بناء قطاع ثروة حيوانية
                    مستدام.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src="https://cornflowerblue-albatross-308247.hostingersite.com/images/poultry-farm-with-healthy-chickens.jpg"
                    alt="حلول أعلاف مستدامة"
                    className="h-full w-full object-cover"
                  />
                </div>
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
