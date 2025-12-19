"use client";

import { useEffect, useState } from "react";
import  Navbar  from "@/components/home/navbar";
import  Footer  from "@/components/home/footer";
import { FloatingContact } from "@/components/floating-contact"
import { Card, CardContent, CardDescription, CardHeader, CardTitle ,CardFooter} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

// const products = [
//   {
//     id: "breeder",
//     title: "أعلاف الأمهات",
//     titleEn: "Breeder Feed",
//     description:
//       "مصممة لدعم الخصوبة وتحسين صحة القطيع، بما يضمن إنتاج كتاكيت قوية وعالية الجودة.",
//     fullDescription:
//       "أعلاف الأمهات من مصنع التكامل مصممة خصيصاً لتلبية الاحتياجات الغذائية الفريدة لقطعان التربية. توفر تركيبتنا المتوازنة جميع العناصر الغذائية الضرورية لدعم الخصوبة العالية وإنتاج بيض فقس ممتاز.",
//     image: "/breeder-chicken-feed-pellets.jpg",
//     badge: "عالي الجودة",
//     benefits: [
//       "تحسين معدلات الخصوبة والفقس",
//       "دعم صحة الأمهات خلال فترة الإنتاج",
//       "تعزيز جودة البيض وقوة الكتاكيت",
//       "توازن مثالي للفيتامينات والمعادن",
//       "تركيبة علمية مدروسة",
//     ],
//     usage: "قطعان التربية والأمهات في جميع مراحل الإنتاج",
//   },
//   {
//     id: "layer",
//     title: "أعلاف البياض",
//     titleEn: "Layer Feed",
//     description:
//       "تدعم زيادة إنتاج البيض وتحافظ على جودته وقيمته الغذائية العالية.",
//     fullDescription:
//       "أعلاف البياض مصممة لتحقيق أقصى إنتاجية من البيض مع الحفاظ على جودة القشرة والمحتوى الغذائي. تركيبتنا توفر الكالسيوم والفوسفور بنسب مثالية لضمان قشرة قوية وبيض عالي الجودة.",
//     image: "/layer-chicken-feed-with-eggs.jpg",
//     badge: "الأكثر مبيعاً",
//     benefits: [
//       "زيادة معدل إنتاج البيض",
//       "تحسين جودة القشرة وسمكها",
//       "رفع القيمة الغذائية للبيض",
//       "دعم صحة الدجاج البياض",
//       "كفاءة عالية في التحويل الغذائي",
//     ],
//     usage: "الدجاج البياض في مرحلة الإنتاج الكامل",
//   },
//   {
//     id: "broiler",
//     title: "أعلاف اللاحم",
//     titleEn: "Broiler Feed",
//     description:
//       "تركيبات غنية ومتوازنة تساهم في تحقيق نمو سريع ووزن مثالي خلال فترة التسمين.",
//     fullDescription:
//       "أعلاف اللاحم من مصنع التكامل مصممة لتحقيق أسرع معدلات نمو مع الحفاظ على صحة الطيور. نوفر تركيبات متخصصة لكل مرحلة من مراحل التربية: البادئ، النامي، والناهي.",
//     image: "/broiler-chicken-feed-grains.jpg",
//     badge: "نمو سريع",
//     benefits: [
//       "معدلات نمو متسارعة",
//       "تحويل غذائي ممتاز",
//       "تحسين جودة اللحم",
//       "تقليل فترة التربية",
//       "صحة مثالية للطيور",
//     ],
//     usage: "دجاج اللاحم في جميع مراحل التربية (بادئ - نامي - ناهي)",
//   },
//   {
//     id: "cattle",
//     title: "أعلاف الماشية",
//     titleEn: "Cattle Feed",
//     description:
//       "توفر تغذية متوازنة تضمن صحة أفضل وإنتاجية مستدامة في اللحوم أو الألبان.",
//     fullDescription:
//       "أعلاف الماشية من مصنع التكامل مصممة لتلبية الاحتياجات الغذائية المتنوعة للأبقار والأغنام والماعز. سواء كانت للحليب أو اللحم، توفر تركيباتنا التوازن المثالي للطاقة والبروتين.",
//     image: "/cattle-livestock-feed-pellets.jpg",
//     badge: "تغذية متكاملة",
//     benefits: [
//       "زيادة إنتاج الحليب",
//       "تحسين معدلات النمو",
//       "دعم صحة الجهاز الهضمي",
//       "تعزيز المناعة الطبيعية",
//       "جودة عالية للحم",
//     ],
//     usage: "الأبقار والأغنام والماعز للحليب واللحم",
//   },
// ];

export default function ProductsPage() {

   const [products, setProducts] = useState([])
   const[loading,setLoading]=useState(true);

 useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://cornflowerblue-albatross-308247.hostingersite.com/api/get_products.php"
        );
        if (!res.ok) throw new Error("فشل تحميل البيانات"); // تحقق من حالة HTTP
        const data = await res.json();
        if (data) setProducts(data);
      } catch (err) {
        console.error("حدث خطأ أثناء جلب المنتجات:", err);
        setError(true); // يمكن استخدامه لإظهار رسالة خطأ
      } finally {
        setLoading(false); // سيغلق الـloading مهما حصل
      }
    };

    fetchProducts();
  }, []);

   if (loading) {
  return <div className="dark:bg-[#64312C]">
    <Navbar />
    <div className=" py-20 p-4  w-full animate-pulse bg-white shadow-sm">
      {/* صورة المنتج */}
      <div className="bg-gray-300 h-48 w-full rounded-md mb-4"></div>

      {/* اسم المنتج */}
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>

      {/* وصف مختصر */}
      <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>

      {/* السعر */}
      <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>

      {/* زر الإضافة للسلة */}
      <div className="h-10 bg-gray-300 rounded w-full"></div>
    </div>
   <Footer />
    </div>
}

if(!products || products == null || products.length===0){
  return <div className="dark:bg-[#64312C]">
        <Navbar />
       <div className="flex flex-col items-center justify-center py-40  p-4 text-center ">
      <h1 className="text-5xl font-extrabold text-taka mb-4"> حصل خطأ في تحميل المنتجات</h1>
      <p className="text-lg text-primary mb-6">
        عذرًا، لم نتمكن من العثور على المنتجات  ربما حدث خطاء في الاتصال بالانترنت أو في جلب البيانات.  
      </p>
      <Link href="/">
        <Button className="bg-takar hover:bg-blue-700  px-6 py-3">
          العودة للرئيسية
        </Button>
      </Link>
     
    </div>
       <Footer />
      </div>
}

  return (
    <div className="flex min-h-screen flex-col dark:bg-[#64312C]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary py-20 lg:py-28">
          <div className="absolute inset-0 opacity-10">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url('/modern-feed-production-line-machinery.jpg')` }}
            />
          </div>
          <div className="container relative mx-auto px-4 text-center lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-takarr lg:text-5xl">منتجاتنا</h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
              حلول غذائية متخصصة تلبي مختلف احتياجات المربين والمزارع بأعلى معايير الجودة العالمية
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-taka">جميع المنتجات</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                جميع منتجاتنا مصنوعة وفق أحدث التقنيات وأعلى المعايير العالمية
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <Card className="group h-full cursor-pointer overflow-hidden transition-all hover:shadow-xl dark:bg-cardark">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={`https://cornflowerblue-albatross-308247.hostingersite.com/${product.images[0]}` || "/placeholder.svg"}
                        alt={product.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                        {product.badge}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{product.title}</CardTitle>
                      <CardDescription className="text-xs">{product.titleEn}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                    </CardContent>
                    <CardFooter>
                      <span>انقر للمزيد</span>
                  <ArrowLeft className="mr-1 h-4 w-4" />
                    </CardFooter>


                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center lg:px-8">
            <h2 className="mb-4 text-3xl font-bold">هل تحتاج إلى استشارة؟</h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              فريقنا المتخصص جاهز لمساعدتك في اختيار المنتج الأنسب لاحتياجاتك وتقديم الدعم الفني اللازم
            </p>
            <Button asChild size="lg">
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
