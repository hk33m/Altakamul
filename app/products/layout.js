export const dynamic = "force-dynamic"

import { Suspense } from "react"

export const metadata = {
  title: "منتجاتنا | مصنع التكامل للأعلاف",
  description: "اكتشف منتجات مصنع التكامل للأعلاف عالية الجودة للدواجن والماشية، بما في ذلك الأعلاف المدعمة بالفيتامينات والتغذية المتوازنة.",
  keywords: ["أعلاف", "منتجات", "دواجن", "ماشية", "تغذية الحيوانات", "أعلاف عضوية", "أعلاف مدعمة"],
};

export default function RootLayout({ children }) {
  return (
    <>
    <Suspense fallback={null}>
        {children}
    </Suspense>
    </>
  );
}