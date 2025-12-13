import  Navbar  from "@/components/home/navbar";
import  Footer  from "@/components/home/footer";
import { FloatingContact } from "@/components/floating-contact";
import {
  Target,
  Eye,
  Heart,
  Leaf,
  Users,
  Award,
  Lightbulb,
  Shield,
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "الجودة",
    description: "الالتزام بأعلى معايير الجودة العالمية في كل منتج نقدمه",
  },
  {
    icon: Lightbulb,
    title: "الابتكار",
    description: "تطوير مستمر للتقنيات والحلول لمواكبة أحدث التطورات العلمية",
  },
  {
    icon: Shield,
    title: "الموثوقية",
    description: "بناء علاقات طويلة الأمد مبنية على الثقة والمصداقية",
  },
  {
    icon: Users,
    title: "الشراكة",
    description: "نجاحنا مرتبط بنجاح شركائنا وعملائنا",
  },
  {
    icon: Leaf,
    title: "الاستدامة",
    description: "حلول صديقة للبيئة تراعي المسؤولية تجاه الأجيال القادمة",
  },
  {
    icon: Heart,
    title: "التميز",
    description: "السعي الدائم نحو التفوق والريادة في صناعة الأعلاف",
  },
];

export const metadata = {
  title: "من نحن | مصنع التكامل للأعلاف",
  description: "تعرف على مصنع التكامل للأعلاف ورؤيتنا في صناعة أعلاف الدواجن والماشية، والتزامنا بالجودة والإنتاج المستدام.",
  keywords: ["عن المصنع", "رؤية", "أعلاف", "دواجن", "ماشية", "الجودة", "الاستدامة"],
};

export default function AboutPage() {
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
                backgroundImage: `url('/industrial-feed-manufacturing-factory-aerial-view.jpg')`,
              }}
            />
          </div>
          <div className="container relative mx-auto px-4 text-center lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-takarr lg:text-5xl">
              من نحن
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
              تعرف على مصنع التكامل للأعلاف - شريكك الموثوق في صناعة أعلاف
              الدواجن والماشية
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="mb-4 inline-block text-sm font-semibold text-takar">
                  نبذة عن المصنع
                </span>
                <h2 className="mb-6 text-3xl font-bold leading-tight lg:text-4xl text-balance text-taka">
                  أحد أعمدة صناعة الأعلاف في المملكة العربية السعودية
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    منذ انطلاقتنا في 15 يوليو 2022، وضعنا في مصنع التكامل
                    للأعلاف بصمتنا كأحد الأعمدة الرئيسية في صناعة أعلاف الدواجن
                    والماشية داخل المملكة العربية السعودية وخارجها، معتمدين على
                    أحدث التقنيات الإنتاجية بطاقة تصل إلى 120 طناً في الساعة.
                  </p>
                  <p>
                    نؤمن أن الأعلاف ليست مجرد منتج، بل هي أساس نجاح قطاع الثروة
                    الحيوانية، لذلك صممنا حلولاً غذائية متكاملة ترتقي بمستوى
                    الإنتاج وتمنح المربين والمزارع الكبرى ميزة تنافسية حقيقية.
                  </p>
                  <p>
                    بفضل التزامنا الراسخ بأعلى معايير الجودة والمواصفات
                    العالمية، أصبحنا شريك النجاح الأول لعملائنا، نمدهم بالقيمة،
                    ونضمن لهم استمرارية النمو وتحقيق أفضل النتائج، واضعين
                    الابتكار والموثوقية في صميم كل ما نقدمه.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src="/modern-feed-production-line-machinery.jpg"
                    alt="مصنع التكامل للأعلاف"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -left-2 rounded-xl bg-secondary p-6 text-secondary-foreground shadow-xl">
                  <div className="text-3xl font-bold">2022</div>
                  <div className="text-sm">سنة التأسيس</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="bg-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative order-2 lg:order-1">
                
              </div>
              <div className="order-1 lg:order-2">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-taka text-primary-foreground">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="mb-6 text-3xl font-bold lg:text-4xl text-taka">رؤيتنا</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    نسعى في مصنع التكامل للأعلاف إلى ترسيخ مكانتنا كخيار أول
                    ووجهة رائدة في صناعة الأعلاف على مستوى المملكة العربية
                    السعودية والمنطقة، من خلال التزامنا الدائم بالابتكار وتطوير
                    تقنيات الإنتاج، والارتقاء المستمر بجودة منتجاتنا لتواكب أعلى
                    المعايير العالمية.
                  </p>
                  <p>
                    نهدف إلى تقديم حلول غذائية متكاملة وفعّالة تدعم استدامة ونمو
                    قطاع الثروة الحيوانية، وتلبي احتياجات المربين والمزارع
                    بمختلف أحجامها، بما يضمن تعزيز كفاءتهم الإنتاجية وتحقيق قيمة
                    مضافة حقيقية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-takar text-primary-foreground">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="mb-6 text-3xl font-bold lg:text-4xl text-takar">رسالتنا</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    في مصنع التكامل للأعلاف، نلتزم بتوفير أعلاف عالية الجودة
                    للدواجن والماشية، يتم إنتاجها باستخدام أحدث التقنيات
                    المتقدمة ووفقاً على المعايير والمواصفات العالمية.
                  </p>
                  <p>
                    نسعى من خلال منتجاتنا إلى تحقيق قيمة مضافة حقيقية لعملائنا،
                    ليس فقط عبر تلبية احتياجاتهم الغذائية، بل من خلال دعم
                    كفاءتهم التشغيلية وزيادة إنتاجيتهم وتحسين جودة مخرجاتهم.
                  </p>
                  <p>
                    نحرص على أن تكون حلولنا الغذائية متكاملة وفعّالة، تواكب
                    التطورات العلمية في مجال التغذية الحيوانية، وتراعي متطلبات
                    الاستدامة البيئية والاقتصادية.
                  </p>
                </div>
              </div>
              <div className="relative">
               
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block text-sm font-semibold text-takar">
                قيمنا
              </span>
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-taka">
                القيم التي نؤمن بها
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                نؤمن أن النجاح المستدام ينبع من الجمع بين الجودة والابتكار
                والموثوقية
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group rounded-xl border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
