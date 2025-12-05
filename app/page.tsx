// 동적 렌더링 강제 (빌드 시 Clerk 환경 변수 없이도 빌드 가능)
export const dynamic = "force-dynamic";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 히어로 섹션 - 잡지 스타일 */}
      <section className="w-full relative">
        <div className="relative h-screen bg-white flex items-center justify-center overflow-hidden border-b border-gray-200">
          {/* 프랑스 테루아 이미지 오버레이 */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop"
              alt="French Terroir"
              fill
              className="object-cover opacity-[0.08] mix-blend-multiply grayscale"
              priority
              sizes="100vw"
            />
          </div>
          <div className="text-center max-w-4xl mx-auto px-6 relative z-10">
            <div className="mb-6">
              <span className="text-gray-500 text-xs tracking-[0.5em] uppercase font-light mb-4 block">
                Premium Wine Collection
              </span>
            </div>
            <h1 className="text-8xl md:text-[12rem] font-serif tracking-tight text-black mb-8 leading-none">
              WINE
          </h1>
            <p className="text-lg text-gray-600 font-light tracking-wide mb-12 max-w-xl mx-auto">
              세계 최고의 와인을 엄선하여 선보입니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-12 py-3 bg-black text-white font-light tracking-[0.2em] uppercase hover:bg-gray-800 transition-all duration-300 text-xs">
                탐험하기
              </button>
              <button className="px-12 py-3 border border-black text-black font-light tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300 text-xs">
                더 알아보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 와인 카테고리 섹션 */}
      <section className="max-w-[1920px] mx-auto px-6 lg:px-12 py-32 bg-white">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-black mb-4">
            Collections
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            {
              title: "Red",
              description: "강렬하고 복합적인 맛",
            },
            {
              title: "White",
              description: "상큼하고 우아한 맛",
            },
            {
              title: "Sparkling",
              description: "축하의 순간을 위한",
            },
            {
              title: "Rosé",
              description: "가볍고 상쾌한 맛",
            },
          ].map((category, index) => (
            <div
              key={index}
              className="text-center border-b border-gray-200 pb-8 hover:border-black transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-3xl font-serif tracking-tight text-black mb-3 group-hover:opacity-70 transition-opacity">
                {category.title}
              </h3>
              <p className="text-sm text-gray-500 font-light tracking-wide uppercase">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 프리미엄 레드 와인 컬렉션 */}
      <section className="max-w-[1920px] mx-auto px-6 lg:px-12 py-24 bg-white border-t border-gray-200">
        <div className="mb-20">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <span className="text-xs text-gray-500 tracking-[0.3em] uppercase font-light block mb-2">
                Premium Selection
              </span>
              <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-black">
                Red Wines
              </h2>
            </div>
            <span className="text-xs text-gray-400 tracking-wide">01</span>
          </div>
          <div className="w-24 h-px bg-black"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {[
            {
              name: "Château Margaux",
              region: "Bordeaux, France",
              year: "2015",
              price: 2500000,
              rating: 4.9,
              description: "보르도 최고의 명품 샤토 중 하나에서 나온 전설적인 와인. 깊고 풍부한 과일 향과 우아한 탄닌이 특징입니다.",
              tasting: "블랙커런트, 체리, 바닐라, 오크의 복합적인 향. 입안에서 우아하고 균형잡힌 맛이 느껴집니다.",
              pairing: "스테이크, 양고기, 숙성 치즈",
            },
            {
              name: "Domaine de la Romanée-Conti",
              region: "Burgundy, France",
              year: "2018",
              price: 8500000,
              rating: 5.0,
              description: "부르고뉴의 전설적인 도메인. 세계에서 가장 비싼 와인 중 하나로, 수집가들의 꿈의 와인입니다.",
              tasting: "복잡하고 우아한 향. 장미, 바이올렛, 미네랄의 섬세한 조화. 입안에서 영원히 지속되는 여운.",
              pairing: "푸아그라, 송로버섯, 고급 치즈",
            },
            {
              name: "Opus One",
              region: "Napa Valley, USA",
              year: "2017",
              price: 1200000,
              rating: 4.8,
              description: "로버트 몬다비와 필립 드 로칠드 남작의 합작품. 캘리포니아 와인의 정점을 보여줍니다.",
              tasting: "검은 과일, 초콜릿, 스파이스의 풍부한 향. 풀바디와 부드러운 탄닌이 인상적입니다.",
              pairing: "그릴드 스테이크, 양고기, 다크 초콜릿",
            },
            {
              name: "Sassicaia",
              region: "Tuscany, Italy",
              year: "2019",
              price: 950000,
              rating: 4.7,
              description: "이탈리아 수퍼 투스칸의 대표작. 보르도 스타일의 이탈리아 와인으로 유명합니다.",
              tasting: "블랙베리, 허브, 미네랄의 조화. 강렬하면서도 우아한 맛이 특징입니다.",
              pairing: "파스타, 이탈리안 치즈, 토마토 기반 요리",
            },
            {
              name: "Penfolds Grange",
              region: "South Australia",
              year: "2016",
              price: 1800000,
              rating: 4.8,
              description: "호주의 국보급 와인. 시라즈 품종의 진수를 보여주는 최고급 와인입니다.",
              tasting: "다크 베리, 후추, 오크의 강렬한 향. 풍부하고 집중된 맛이 인상적입니다.",
              pairing: "바베큐, 그릴드 고기, 강한 치즈",
            },
            {
              name: "Vega Sicilia Único",
              region: "Ribera del Duero, Spain",
              year: "2012",
              price: 2200000,
              rating: 4.9,
              description: "스페인의 최고급 와인. 템프라니요 품종의 진정한 가치를 보여줍니다.",
              tasting: "체리, 담배잎, 가죽의 복합적인 향. 깊고 우아한 맛이 오래 지속됩니다.",
              pairing: "이베리코 햄, 양고기, 스페인 전통 요리",
            },
          ].map((wine, index) => (
            <div
              key={index}
              className="group cursor-pointer border-b border-gray-200 pb-8 hover:border-black transition-all duration-300"
            >
              <div className="mb-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif tracking-tight text-black mb-1">
                      {wine.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-light tracking-wide uppercase mb-2">
                      {wine.region} • {wine.year}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 ml-4">
                    <span className="text-black text-xs">★</span>
                    <span className="text-black text-xs font-light">{wine.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                  {wine.description}
                </p>
                <div className="text-xs text-gray-400 font-light space-y-1 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="italic">{wine.tasting}</p>
                  <p className="mt-2">Pairing: {wine.pairing}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <p className="text-black font-light text-lg tracking-wide">
                  ₩{wine.price.toLocaleString()}
                </p>
                <button className="text-xs text-black font-light tracking-[0.2em] uppercase hover:opacity-60 transition-opacity">
                  상세보기 →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 화이트 와인 컬렉션 */}
      <section className="max-w-[1920px] mx-auto px-6 lg:px-12 py-24 bg-white border-t border-gray-200">
        <div className="mb-20">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <span className="text-xs text-gray-500 tracking-[0.3em] uppercase font-light block mb-2">
                Elegant Selection
              </span>
              <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-black">
                White Wines
              </h2>
            </div>
            <span className="text-xs text-gray-400 tracking-wide">02</span>
          </div>
          <div className="w-24 h-px bg-black"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {[
            {
              name: "Dom Pérignon",
              region: "Champagne, France",
              year: "2012",
              price: 450000,
              rating: 4.9,
              description: "샴페인의 황제. 모에 & 샹동의 최고급 프리미엄 샴페인입니다.",
              tasting: "사과, 배, 미네랄의 섬세한 향. 거품이 부드럽고 우아한 맛이 특징입니다.",
              pairing: "굴, 생선회, 치즈, 디저트",
            },
            {
              name: "Domaine Leflaive Montrachet",
              region: "Burgundy, France",
              year: "2018",
              price: 3200000,
              rating: 5.0,
              description: "부르고뉴 최고의 화이트 와인. 샤르도네의 진정한 정점을 보여줍니다.",
              tasting: "시트러스, 꽃, 미네랄의 복합적인 향. 크리미하고 우아한 질감이 인상적입니다.",
              pairing: "로브스터, 푸아그라, 크림 소스 요리",
            },
            {
              name: "Cloudy Bay Sauvignon Blanc",
              region: "Marlborough, New Zealand",
              year: "2022",
              price: 85000,
              rating: 4.6,
              description: "뉴질랜드의 대표적인 소비뇽 블랑. 상큼하고 생동감 있는 맛이 특징입니다.",
              tasting: "자몽, 패션프루트, 허브의 신선한 향. 깔끔하고 산뜻한 맛이 인상적입니다.",
              pairing: "생선, 해산물, 샐러드, 아시아 요리",
            },
            {
              name: "Kendall-Jackson Chardonnay",
              region: "California, USA",
              year: "2021",
              price: 65000,
              rating: 4.5,
              description: "캘리포니아의 대중적인 샤르도네. 부드럽고 과일향이 풍부합니다.",
              tasting: "복숭아, 바닐라, 오크의 향. 부드럽고 크리미한 질감이 특징입니다.",
              pairing: "치킨, 파스타, 크림 소스 요리",
            },
            {
              name: "Dr. Loosen Riesling",
              region: "Mosel, Germany",
              year: "2021",
              price: 95000,
              rating: 4.7,
              description: "독일 모젤 지역의 프리미엄 리슬링. 달콤하면서도 산뜻한 균형이 뛰어납니다.",
              tasting: "사과, 복숭아, 꽃의 향. 달콤하고 산뜻한 맛이 조화롭게 어우러집니다.",
              pairing: "매운 요리, 아시아 요리, 디저트",
            },
            {
              name: "Veuve Clicquot Yellow Label",
              region: "Champagne, France",
              year: "NV",
              price: 180000,
              rating: 4.8,
              description: "프랑스의 대표적인 샴페인. 풍부하고 균형잡힌 맛이 특징입니다.",
              tasting: "배, 꽃, 빵의 향. 거품이 풍부하고 우아한 맛이 인상적입니다.",
              pairing: "굴, 생선, 치즈, 브런치",
            },
          ].map((wine, index) => (
            <div
              key={index}
              className="group cursor-pointer border-b border-gray-200 pb-8 hover:border-black transition-all duration-300"
            >
              <div className="mb-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif tracking-tight text-black mb-1">
                      {wine.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-light tracking-wide uppercase mb-2">
                      {wine.region} • {wine.year}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 ml-4">
                    <span className="text-black text-xs">★</span>
                    <span className="text-black text-xs font-light">{wine.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                  {wine.description}
                </p>
                <div className="text-xs text-gray-400 font-light space-y-1 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="italic">{wine.tasting}</p>
                  <p className="mt-2">Pairing: {wine.pairing}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <p className="text-black font-light text-lg tracking-wide">
                  ₩{wine.price.toLocaleString()}
                </p>
                <button className="text-xs text-black font-light tracking-[0.2em] uppercase hover:opacity-60 transition-opacity">
                  상세보기 →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 입문용 와인 컬렉션 */}
      <section className="max-w-[1920px] mx-auto px-6 lg:px-12 py-24 bg-white border-t border-gray-200">
        <div className="mb-20">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <span className="text-xs text-gray-500 tracking-[0.3em] uppercase font-light block mb-2">
                Entry Level
              </span>
              <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-black">
                Everyday Wines
              </h2>
            </div>
            <span className="text-xs text-gray-400 tracking-wide">03</span>
          </div>
          <div className="w-24 h-px bg-black"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              name: "Yellow Tail Shiraz",
              region: "Australia",
              year: "2022",
              price: 35000,
              rating: 4.3,
              description: "부드럽고 과일향이 풍부한 호주 와인",
            },
            {
              name: "Barefoot Moscato",
              region: "California, USA",
              year: "2022",
              price: 28000,
              rating: 4.2,
              description: "달콤하고 상큼한 모스카토",
            },
            {
              name: "Carlo Rossi Red",
              region: "California, USA",
              year: "NV",
              price: 32000,
              rating: 4.1,
              description: "일상적인 식사와 함께하기 좋은 레드 와인",
            },
            {
              name: "Sutter Home White Zinfandel",
              region: "California, USA",
              year: "2022",
              price: 30000,
              rating: 4.0,
              description: "가볍고 달콤한 로제 와인",
            },
            {
              name: "Jacob&apos;s Creek Shiraz",
              region: "Australia",
              year: "2021",
              price: 45000,
              rating: 4.4,
              description: "호주의 대표적인 시라즈",
            },
            {
              name: "Gallo Family Chardonnay",
              region: "California, USA",
              year: "2021",
              price: 38000,
              rating: 4.2,
              description: "부드럽고 크리미한 샤르도네",
            },
            {
              name: "Beringer White Zinfandel",
              region: "California, USA",
              year: "2022",
              price: 42000,
              rating: 4.3,
              description: "상큼하고 달콤한 로제",
            },
            {
              name: "Robert Mondavi Private Selection",
              region: "California, USA",
              year: "2020",
              price: 55000,
              rating: 4.5,
              description: "로버트 몬다비의 프리미엄 라인",
            },
          ].map((wine, index) => (
            <div
              key={index}
              className="group cursor-pointer border-b border-gray-200 pb-6 hover:border-black transition-all duration-300"
            >
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-serif tracking-tight text-black mb-1">
                      {wine.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-light tracking-wide uppercase mb-2">
                      {wine.region} • {wine.year}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 ml-2">
                    <span className="text-black text-xs">★</span>
                    <span className="text-black text-xs font-light">{wine.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 font-light leading-relaxed mb-3">
                  {wine.description}
                </p>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <p className="text-black font-light text-base tracking-wide">
                  ₩{wine.price.toLocaleString()}
                </p>
                <button className="text-xs text-black font-light tracking-[0.2em] uppercase hover:opacity-60 transition-opacity">
                  보기 →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 와인 가이드 섹션 */}
      <section className="w-full bg-white py-32 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs text-gray-500 tracking-[0.3em] uppercase font-light block mb-4">
              Wine Knowledge
            </span>
            <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-black mb-8">
              Pairing Guide
            </h2>
            <div className="w-24 h-px bg-black mb-8"></div>
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl">
              음식과 와인의 완벽한 조화는 식사의 경험을 한 차원 높여줍니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              {
                title: "Red Wine",
                foods: "스테이크, 양고기, 파스타, 치즈",
                description: "풍부한 레드 와인은 고기 요리와 완벽한 조화를 이룹니다.",
              },
              {
                title: "White Wine",
                foods: "생선, 해산물, 치킨, 크림 소스",
                description: "상큼한 화이트 와인은 가벼운 요리와 잘 어울립니다.",
              },
              {
                title: "Sparkling",
                foods: "굴, 생선회, 브런치, 디저트",
                description: "스파클링 와인은 특별한 순간을 더욱 빛나게 합니다.",
              },
            ].map((guide, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-serif text-black mb-3">{guide.title}</h3>
                <p className="text-xs text-gray-500 mb-3 font-light uppercase tracking-wide">
                  {guide.foods}
                </p>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {guide.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="max-w-[1920px] mx-auto px-6 lg:px-12 py-32 bg-white border-t border-gray-200">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6">
            <span className="text-xs text-gray-500 tracking-[0.3em] uppercase font-light">
              Discover
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-serif tracking-tight text-black mb-8 leading-tight">
            Start Your<br />Wine Journey
          </h2>
          <p className="text-lg text-gray-600 font-light mb-12 leading-relaxed">
            세계 최고의 와인 컬렉션을 탐험하고 특별한 순간을 만들어보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-16 py-4 bg-black text-white font-light tracking-[0.2em] uppercase hover:bg-gray-800 transition-all duration-300 text-xs">
              컬렉션 둘러보기
            </button>
            <button className="px-16 py-4 border border-black text-black font-light tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300 text-xs">
              상담하기
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
