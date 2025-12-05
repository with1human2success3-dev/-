// 동적 렌더링 강제 (빌드 시 Clerk 환경 변수 없이도 빌드 가능)
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1EB]">
      {/* 히어로 섹션 */}
      <section className="w-full relative">
        <div className="relative h-screen bg-gradient-to-b from-[#E8DDD0] to-[#F5F1EB] flex items-center justify-center">
          <div className="text-center max-w-5xl mx-auto px-6">
            <h1 className="text-6xl md:text-8xl font-serif tracking-wider text-[#1C1C1C] mb-6 animate-fade-in">
              LUXURY COLLECTION
            </h1>
            <p className="text-xl md:text-2xl text-[#8B7355] font-light tracking-wide mb-12 max-w-2xl mx-auto">
              Timeless elegance meets modern sophistication
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-12 py-4 bg-[#1C1C1C] text-[#F5F1EB] font-light tracking-wider uppercase hover:bg-[#8B7355] transition-all duration-300 transform hover:scale-105 text-lg">
                Shop Now
              </button>
              <button className="px-12 py-4 border-2 border-[#1C1C1C] text-[#1C1C1C] font-light tracking-wider uppercase hover:bg-[#1C1C1C] hover:text-[#F5F1EB] transition-all duration-300 text-lg">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="max-w-[1920px] mx-auto px-6 lg:px-12 py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif tracking-wider text-[#1C1C1C] mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-px bg-[#8B7355] mx-auto mb-4"></div>
          <p className="text-lg text-[#8B7355] font-light max-w-2xl mx-auto">
            세대를 초월한 우아함과 최고급 품질을 제공합니다
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: "✨",
              title: "Premium Quality",
              description: "최고급 소재와 정교한 장인정신으로 제작된 제품들",
            },
            {
              icon: "🎨",
              title: "Timeless Design",
              description: "세대를 초월하는 클래식하고 우아한 디자인",
            },
            {
              icon: "💎",
              title: "Exclusive Collection",
              description: "한정판 컬렉션과 독점 디자인을 만나보세요",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 hover:bg-[#F5F1EB] transition-all duration-300 rounded-lg"
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-serif tracking-wider text-[#1C1C1C] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#8B7355] font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 신상품 섹션 - 여성 의상 */}
      <section className="max-w-[1920px] mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif tracking-wider text-[#1C1C1C] mb-4">
            Women&apos;s Collection
          </h2>
          <div className="w-24 h-px bg-[#8B7355] mx-auto mb-4"></div>
          <p className="text-lg text-[#8B7355] font-light">
            우아함과 세련됨이 만나는 여성 컬렉션
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "엘레강트 드레스", price: 890000, icon: "👗" },
            { name: "클래식 코트", price: 1200000, icon: "🧥" },
            { name: "실크 블라우스", price: 450000, icon: "👗" },
          ].map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative bg-[#E8DDD0] h-[500px] mb-4 overflow-hidden rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl opacity-30 group-hover:opacity-50 transition-opacity">
                    {item.icon}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-full py-3 bg-[#1C1C1C] text-[#F5F1EB] font-light tracking-wider uppercase hover:bg-[#8B7355] transition-colors">
                    View Details
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-light tracking-wider text-[#1C1C1C] mb-2">
                  {item.name}
                </h3>
                <p className="text-[#1C1C1C] font-light tracking-wide text-xl">
                  ₩{item.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-12 py-4 border-2 border-[#1C1C1C] text-[#1C1C1C] font-light tracking-wider uppercase hover:bg-[#1C1C1C] hover:text-[#F5F1EB] transition-all duration-300">
            View All Women&apos;s Collection
          </button>
        </div>
      </section>

      {/* 신상품 섹션 - 남성 의상 */}
      <section className="max-w-[1920px] mx-auto px-6 lg:px-12 py-20 bg-[#F5F1EB]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif tracking-wider text-[#1C1C1C] mb-4">
            Men&apos;s Collection
          </h2>
          <div className="w-24 h-px bg-[#8B7355] mx-auto mb-4"></div>
          <p className="text-lg text-[#8B7355] font-light">
            클래식한 우아함과 현대적 세련미의 조화
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "클래식 수트", price: 2500000, icon: "🤵" },
            { name: "가죽 재킷", price: 1800000, icon: "🧥" },
            { name: "옥스포드 셔츠", price: 320000, icon: "👔" },
          ].map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative bg-[#E8DDD0] h-[500px] mb-4 overflow-hidden rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl opacity-30 group-hover:opacity-50 transition-opacity">
                    {item.icon}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-full py-3 bg-[#1C1C1C] text-[#F5F1EB] font-light tracking-wider uppercase hover:bg-[#8B7355] transition-colors">
                    View Details
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-light tracking-wider text-[#1C1C1C] mb-2">
                  {item.name}
                </h3>
                <p className="text-[#1C1C1C] font-light tracking-wide text-xl">
                  ₩{item.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-12 py-4 border-2 border-[#1C1C1C] text-[#1C1C1C] font-light tracking-wider uppercase hover:bg-[#1C1C1C] hover:text-[#F5F1EB] transition-all duration-300">
            View All Men&apos;s Collection
          </button>
        </div>
      </section>

      {/* 브랜드 스토리 섹션 */}
      <section className="w-full bg-[#1C1C1C] py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-serif tracking-wider text-[#F5F1EB] mb-8">
            Crafted with Excellence
          </h2>
          <p className="text-xl text-[#E8DDD0] font-light leading-relaxed max-w-3xl mx-auto mb-12">
            우리는 전통과 혁신을 결합하여 세대를 초월한 우아함을 만들어냅니다.
            각 제품은 정교한 장인정신과 최고급 소재로 제작되어 평생을 함께할 가치를 지닙니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              { number: "50+", label: "Years of Excellence" },
              { number: "100K+", label: "Happy Customers" },
              { number: "500+", label: "Premium Products" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-serif text-[#F5F1EB] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#E8DDD0] font-light tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="max-w-[1920px] mx-auto px-6 lg:px-12 py-32 bg-gradient-to-b from-[#F5F1EB] to-[#E8DDD0]">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif tracking-wider text-[#1C1C1C] mb-6">
            Start Your Luxury Journey
          </h2>
          <p className="text-xl text-[#8B7355] font-light mb-12 leading-relaxed">
            지금 바로 프리미엄 컬렉션을 둘러보고 특별한 스타일을 완성하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-16 py-5 bg-[#1C1C1C] text-[#F5F1EB] font-light tracking-wider uppercase hover:bg-[#8B7355] transition-all duration-300 transform hover:scale-105 text-lg">
              Shop Collection
            </button>
            <button className="px-16 py-5 border-2 border-[#1C1C1C] text-[#1C1C1C] font-light tracking-wider uppercase hover:bg-[#1C1C1C] hover:text-[#F5F1EB] transition-all duration-300 text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
