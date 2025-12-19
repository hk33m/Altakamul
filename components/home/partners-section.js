const partners = [
  { name: "الصندوق الصناعي  ", logo: "/saudibox.png" },
  { name: "وزارة البيئة والزراعة  ", logo: "/env.png" },
  { name: "وزارة التجارة  ", logo: "/commercepng.png" },
 
]

export function PartnersSection() {
  return (
    <section className="bg-muted/30 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10 text-center">
          {/* <span className="mb-4 inline-block text-sm font-semibold text-takar">شركاء النجاح</span> */}
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl text-taka"> شركاء النجاح </h2>
          {/* <p className="mx-auto max-w-xl text-muted-foreground">نفخر بشراكاتنا مع كبرى المزارع والشركات في المملكة</p> */}
        </div>

        <div className="grid grid-cols-2 items-center  gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-lg dark:bg-white p-6  transition-all hover:grayscale-0"
            >
              <img src={partner.logo || "https://cornflowerblue-albatross-308247.hostingersite.com/images/placeholder.svg"} alt={partner.name} className="h-12 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
