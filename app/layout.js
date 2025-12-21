import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "مصنع التكامل للأعلاف | Al-Takamul Feed Factory",
  description:
    "مصنع التكامل للأعلاف في المملكة العربية السعودية - الشريك الموثوق لإنتاج أعلاف الدواجن والماشية عالية الجودة بقدرة إنتاجية تصل إلى 120 طن في الساعة. نقدم منتجات أعلاف عضوية ومدعمة بالفيتامينات لتغذية أفضل لمزارع الدواجن والماشية.",
  keywords: [
    "أعلاف",
    "أعلاف دواجن",
    "أعلاف ماشية",
    "منتجات أعلاف",
    "feed",
    "poultry feed",
    "livestock feed",
    "مصنع أعلاف",
    "Al-Takamul Factory",
    "مصنع الأعلاف السعودية",
    "أعلاف عالية الجودة",
    "أعلاف للحيوانات",
    "أعلاف الدواجن في السعودية",
    "تغذية الماشية",
    "مزارع الدواجن",
    "مزارع الماشية",
    "منتجات أعلاف",
    "أعلاف عضوية",
    "أعلاف مدعمة بالفيتامينات",
    "إنتاج الأعلاف",
    "توريد الأعلاف",
    "أعلاف المملكة العربية السعودية",
    "دواجن",
    "ماشية",
    "مزارع",
    "تربية الدواجن",
    "تربية الماشية",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" }, // Favicon للتبويب والمتصفح
    ],
    apple: "/180-01.png", // iPhone/iPad Home Screen
    android: "/192.png", // Android Home Screen / PWA
    shortcut: "/512-01.png", // PWA عالية الجودة
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body dir="rtl">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
