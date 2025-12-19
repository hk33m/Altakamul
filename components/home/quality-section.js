import { Shield, Award, Microscope, FileCheck } from "lucide-react"

const qualityFeatures = [
  {
    icon: Shield,
    title: "معايير جودة صارمة",
    description: "نطبق أعلى معايير الجودة العالمية في جميع مراحل الإنتاج",
  },
  {
    icon: Microscope,
    title: "مختبرات متقدمة",
    description: "فحوصات دورية ومستمرة لضمان سلامة ونقاء المنتجات",
  },
  {
    icon: Award,
    title: "شهادات دولية",
    description: "حاصلون على اعتمادات من أبرز الهيئات العالمية",
  },
  {
    icon: FileCheck,
    title: "توثيق شامل",
    description: "نظام تتبع متكامل يضمن الشفافية في كل مرحلة",
  },
]

export function QualitySection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src="https://cornflowerblue-albatross-308247.hostingersite.com/images/quality.jpg" alt="مختبر ضبط الجودة" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -left-2 rounded-xl bg-primary p-6 text-primary-foreground shadow-xl bg-takar">
              <div className="text-3xl font-bold ">100%</div>
              <div className="text-sm">التزام بالجودة</div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="mb-4 inline-block text-sm font-semibold text-takar">الجودة والمعايير</span>
            <h2 className="mb-6 text-3xl font-bold leading-tight lg:text-4xl text-balance text-taka">
              التزامنا الراسخ بأعلى معايير الجودة العالمية
            </h2>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              نحرص على أن تكون حلولنا الغذائية متكاملة وفعّالة، تواكب التطورات العلمية في مجال التغذية الحيوانية، وتراعي
              متطلبات الاستدامة البيئية والاقتصادية.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {qualityFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5 text-takar" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-taka">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
