// 동적 렌더링 강제 (빌드 시 Clerk 환경 변수 없이도 빌드 가능)
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1EB]">
      {/* 히어로 섹션 */}
      <section className="w-full relative">
        <div className="relative h-[80vh] bg-gradient-to-b from-[#E8DDD0] to-[#F5F1EB] flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-serif tracking-wider text-[#1C1C1C] mb-6">
              LUXURY COLLECTION
            </h1>
            <p className="text-lg md:text-xl text-[#8B7355] font-light tracking-wide mb-8">
              Timeless elegance meets modern sophistication
            </p>
            <button className="px-12 py-4 bg-[#1C1C1C] text-[#F5F1EB] font-light tracking-wider uppercase hover:bg-[#8B7355] transition-colors">
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      {/* 신상품 섹션 - 여성 의상 */}
      <section className="max-w-[1920px] mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif tracking-wider text-[#1C1C1C] mb-4">
            Women's Collection
          </h2>
          <div className="w-24 h-px bg-[#8B7355] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "엘레강트 드레스", price: 890000, icon: "👗" },
            { name: "클래식 코트", price: 1200000, icon: "🧥" },
            { name: "실크 블라우스", price: 450000, icon: "👗" },
            { name: "트렌치 코트", price: 1100000, icon: "🧥" },
            { name: "이브닝 가운", price: 1500000, icon: "👗" },
            { name: "캐시미어 스웨터", price: 680000, icon: "🧶" },
          ].map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative bg-[#E8DDD0] h-[500px] mb-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl opacity-30">{item.icon}</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-light tracking-wider text-[#1C1C1C] mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-[#8B7355] mb-4 font-light">
                  Women's Collection 2024
                </p>
                <p className="text-[#1C1C1C] font-light tracking-wide">
                  ₩{item.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 신상품 섹션 - 남성 의상 */}
      <section className="max-w-[1920px] mx-auto px-6 lg:px-12 py-20 bg-[#F5F1EB]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif tracking-wider text-[#1C1C1C] mb-4">
            Men's Collection
          </h2>
          <div className="w-24 h-px bg-[#8B7355] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "클래식 수트", price: 2500000, icon: "🤵" },
            { name: "가죽 재킷", price: 1800000, icon: "🧥" },
            { name: "옥스포드 셔츠", price: 320000, icon: "👔" },
            { name: "울 코트", price: 1400000, icon: "🧥" },
            { name: "데님 재킷", price: 650000, icon: "🧥" },
            { name: "트위드 재킷", price: 1950000, icon: "🧥" },
          ].map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative bg-[#E8DDD0] h-[500px] mb-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl opacity-30">{item.icon}</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-light tracking-wider text-[#1C1C1C] mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-[#8B7355] mb-4 font-light">
                  Men's Collection 2024
                </p>
                <p className="text-[#1C1C1C] font-light tracking-wide">
                  ₩{item.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 컬렉션 섹션 */}
      <section className="w-full bg-[#1C1C1C] py-20">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-[600px] bg-[#E8DDD0] flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-4xl font-serif tracking-wider text-[#1C1C1C] mb-4">
                  Women's Collection
                </h3>
                <button className="px-8 py-3 border-2 border-[#1C1C1C] text-[#1C1C1C] font-light tracking-wider uppercase hover:bg-[#1C1C1C] hover:text-[#F5F1EB] transition-colors">
                  Discover
                </button>
              </div>
            </div>
            <div className="relative h-[600px] bg-[#8B7355] flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-4xl font-serif tracking-wider text-[#F5F1EB] mb-4">
                  Men's Collection
                </h3>
                <button className="px-8 py-3 border-2 border-[#F5F1EB] text-[#F5F1EB] font-light tracking-wider uppercase hover:bg-[#F5F1EB] hover:text-[#8B7355] transition-colors">
                  Discover
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 추천 상품 - 여성/남성 반반 */}
      <section className="max-w-[1920px] mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif tracking-wider text-[#1C1C1C] mb-4">
            Featured Products
          </h2>
          <div className="w-24 h-px bg-[#8B7355] mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            // 여성 의상 4개
            { name: "미니 드레스", price: 550000, icon: "👗", gender: "여성" },
            { name: "니트 원피스", price: 420000, icon: "👗", gender: "여성" },
            { name: "플리츠 스커트", price: 380000, icon: "👗", gender: "여성" },
            { name: "카디건", price: 290000, icon: "🧶", gender: "여성" },
            // 남성 의상 4개
            { name: "슬랙스", price: 480000, icon: "👖", gender: "남성" },
            { name: "폴로 셔츠", price: 280000, icon: "👔", gender: "남성" },
            { name: "청바지", price: 350000, icon: "👖", gender: "남성" },
            { name: "니트 베스트", price: 320000, icon: "🧥", gender: "남성" },
          ].map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative bg-[#E8DDD0] h-[400px] mb-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl opacity-30">{item.icon}</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
                <div className="absolute top-2 right-2 bg-[#8B7355] text-white text-xs px-2 py-1">
                  {item.gender}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-sm font-light tracking-wider text-[#1C1C1C] mb-2">
                  {item.name}
                </h3>
                <p className="text-[#1C1C1C] font-light text-sm tracking-wide">
                  ₩{item.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 브랜드 스토리 */}
      <section className="w-full bg-[#E8DDD0] py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif tracking-wider text-[#1C1C1C] mb-8">
            Crafted with Excellence
          </h2>
          <p className="text-lg text-[#8B7355] font-light leading-relaxed max-w-2xl mx-auto">
            우리는 전통과 혁신을 결합하여 세대를 초월한 우아함을 만들어냅니다. 
            각 제품은 정교한 장인정신과 최고급 소재로 제작되어 평생을 함께할 가치를 지닙니다.
          </p>
        </div>
      </section>
    </main>
  );
}
