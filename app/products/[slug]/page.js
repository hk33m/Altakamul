"use client"

import { use, useState,useEffect } from "react"
import  Navbar  from "@/components/home/navbar"
import  Footer  from "@/components/home/footer"
import { FloatingContact } from "@/components/floating-contact"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ArrowLeft, Heart, Share2, Facebook, Twitter, LinkIcon, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';


export default function ProductDetailPage({ params }) {
  const { slug } = use(params)
  //const product = productsData.find((p) => p.id === slug)
  const [isLiked, setIsLiked] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const[loading,setLoading]=useState(true);

  // if (!product) {
  //   notFound()
  // }

  const [product, setProduct] = useState([])

useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://cornflowerblue-albatross-308247.hostingersite.com/api/get_products.php?id=${slug}`
        );
        if (!res.ok) throw new Error("فشل تحميل البيانات"); // تحقق من حالة HTTP
        const data = await res.json();
        if (data) setProduct(data);
      } catch (err) {
        console.error("حدث خطأ أثناء جلب المنتجات:", err);
        setError(true); // يمكن استخدامه لإظهار رسالة خطأ
      } finally {
        setLoading(false); // سيغلق الـloading مهما حصل
      }
    };

    fetchProducts();
  }, []);


  const handleShare = (platform) => {
    const url = typeof window !== "undefined" ? window.location.href : ""
    const text = `${product.title} - مصنع التكامل للأعلاف`

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
        break
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
          "_blank",
        )
        break
      case "copy":
        navigator.clipboard.writeText(url)
        alert("تم نسخ الرابط!")
        break
    }
    setShowShareMenu(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

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

if(!product || product == null || product.length===0){
  return <div className="dark:bg-[#64312C]">
        <Navbar />
       <div className="flex flex-col items-center justify-center py-40  p-4 text-center ">
      <h1 className="text-5xl font-extrabold text-taka mb-4">😞 المنتج غير موجود</h1>
      <p className="text-lg text-primary mb-6">
        عذرًا، لم نتمكن من العثور على المنتج الذي تبحث عنه. ربما تم حذفه او خطأ في الاتصال بالانترنت أو الرابط غير صحيح.
      </p>
      <Link href="/">
        <Button className="bg-takar hover:bg-blue-700  px-6 py-3">
          العودة للرئيسية
        </Button>
      </Link>
      
  <Button onClick={() => window.location.reload()} className="font-medium rounded-lg px-6 py-3 m-4 transition-colors duration-200">
    تحديث الصفحة
  </Button>   
    </div>
       <Footer />
      </div>
}

  return (
    <div className="flex min-h-screen flex-col dark:bg-[#64312C]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-taka py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              href="/products"
              className="mb-4 inline-flex items-center gap-2 text-primary-foreground hover:underline"
            >
              <ArrowLeft className="h-4 w-4 rotate-180" />
              العودة إلى المنتجات
            </Link>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-primary-foreground lg:text-4xl">{product.title}</h1>
              <Badge className="bg-secondary text-secondary-foreground">{product.badge}</Badge>
            </div>
            <p className="mt-2 text-primary-foreground/80">{product.titleEn}</p>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Product Image Gallery */}
              <div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={`https://cornflowerblue-albatross-308247.hostingersite.com/${product.images[currentImageIndex]}` || "/placeholder.svg"}
                    alt={`${product.title} - صورة ${currentImageIndex + 1}`}
                    className="h-full w-full object-cover"
                  />

                  {/* أزرار التنقل */}
                  {product.images.length > 1 && (
                    <>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full opacity-80 hover:opacity-100"
                        onClick={prevImage}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full opacity-80 hover:opacity-100"
                        onClick={nextImage}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                    </>
                  )}

                  {/* مؤشر الصور */}
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* الصور المصغرة */}
                {product.images.length > 1 && (
                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative aspect-square overflow-hidden rounded-lg ${
                          index === currentImageIndex ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={`https://cornflowerblue-albatross-308247.hostingersite.com/${image}` || "/placeholder.svg"}
                          alt={`صورة ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Like and Share Buttons */}
                <div className="mt-6 flex items-center gap-3">
                  <Button
                    size="lg"
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex-1 gap-2 transition-colors duration-300 ${
                    isLiked
               ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
               }`}
                >
          <Heart
          className={`h-5 w-5 transition-colors duration-300 ${
          isLiked ? "text-white fill-white" : "text-gray-500"
          }`}
        />
        {isLiked ? "تم الإعجاب" : "أعجبني"}
      </Button>     

                  <div className="relative flex-1">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className="w-full gap-2"
                    >
                      <Share2 className="h-5 w-5" />
                      مشاركة
                    </Button>

                    {showShareMenu && (
                      <Card className="absolute top-full left-0 right-0 z-10 mt-2 p-2">
                        <div className="flex flex-col gap-1">
                          <Button
                            variant="ghost"
                            className="w-full justify-start gap-2"
                            onClick={() => handleShare("facebook")}
                          >
                            <Facebook className="h-4 w-4" />
                            فيسبوك
                          </Button>
                          <Button
                            variant="ghost"
                            className="w-full justify-start gap-2"
                            onClick={() => handleShare("twitter")}
                          >
                            <Twitter className="h-4 w-4" />
                            تويتر
                          </Button>
                          <Button
                            variant="ghost"
                            className="w-full justify-start gap-2"
                            onClick={() => handleShare("copy")}
                          >
                            <LinkIcon className="h-4 w-4" />
                            نسخ الرابط
                          </Button>
                        </div>
                      </Card>
                    )}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-taka">وصف المنتج</h2>
                <p className="mb-6 text-muted-foreground leading-relaxed">{product.fullDescription}</p>

                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="mb-3 text-xl font-semibold text-takar">المميزات والفوائد:</h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <Check className="h-5 w-5 shrink-0 text-primary" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Usage */}
                <div className="mb-8 rounded-lg bg-muted/50 p-4">
                  <h3 className="mb-2 font-semibold">الاستخدام المستهدف:</h3>
                  <p className="text-muted-foreground">{product.usage}</p>
                </div>

                <Button asChild size="lg" className="w-full group bg-takar">
                  <Link href="/contact">
                    طلب عرض سعر
                    <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {/* <section className="bg-muted/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-bold">منتجات أخرى قد تهمك</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {product
                .filter((p) => p.id !== product.id)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                    <Card className="group h-full cursor-pointer overflow-hidden transition-all hover:shadow-xl">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={relatedProduct.images[0] || "/placeholder.svg"}
                          alt={relatedProduct.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                          {relatedProduct.badge}
                        </Badge>
                      </div>
                      <div className="p-6">
                        <h3 className="mb-2 text-xl font-bold">{relatedProduct.title}</h3>
                        <p className="text-sm text-muted-foreground">{relatedProduct.titleEn}</p>
                      </div>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
      <FloatingContact />
    </div>
  )
 
}
