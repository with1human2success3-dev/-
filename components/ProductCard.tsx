"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  region: string;
  year: string;
  price: number;
  rating: number;
  description: string;
  tasting?: string;
  pairing?: string;
  imageUrl?: string;
  variant?: "default" | "compact";
}

export default function ProductCard({
  name,
  region,
  year,
  price,
  rating,
  description,
  tasting,
  pairing,
  imageUrl,
  variant = "default",
}: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  // 와인 이미지 URL (기본값)
  const defaultImageUrl =
    imageUrl ||
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop";

  const cardClasses = [
    "group",
    "bg-white",
    "rounded-lg",
    "border",
    "border-black/5",
    "p-4",
    "shadow-sm",
    // 모바일: 터치 시, PC: hover 시 동일한 효과
    "active:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]",
    "active:-translate-y-2",
    "active:scale-[1.03]",
    "hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]",
    "hover:-translate-y-2",
    "hover:scale-[1.03]",
    "active:scale-[0.97]",
    "transition-all",
    "duration-[350ms]",
    "ease-out",
    "cursor-pointer",
    "flex",
    "flex-col",
    "relative",
    "overflow-hidden",
    variant === "compact" ? "w-[75vw] sm:w-full flex-shrink-0" : "w-full",
  ].join(" ");

  return (
    <div className={cardClasses}>
      {/* 상품 이미지 */}
      <div className="relative w-full aspect-[3/4] mb-4 rounded-md overflow-hidden bg-gray-100">
        {!imageError ? (
          <Image
            src={defaultImageUrl}
            alt={name}
            fill
            className="object-cover transition-all duration-[350ms] ease-out group-active:brightness-110 group-active:scale-105 group-hover:brightness-110 group-hover:scale-105"
            onError={() => setImageError(true)}
            sizes={variant === "compact" ? "75vw" : "(max-width: 768px) 75vw, 33vw"}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
            <span className="text-sm">이미지 없음</span>
          </div>
        )}
      </div>

      {/* 상품명 */}
      <h3
        className={`font-serif tracking-tight text-black mb-2 ${
          variant === "compact" ? "text-lg" : "text-xl"
        }`}
      >
        {name}
      </h3>

      {/* 산지 / 연도 / 평점 */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs text-gray-500 font-light tracking-wide uppercase">
          {region} • {year}
        </p>
        <div className="flex items-center gap-1">
          <span className="text-black text-xs">★</span>
          <span className="text-black text-xs font-light">{rating}</span>
        </div>
      </div>

      {/* 간단한 설명 */}
      <p
        className={`text-gray-600 font-light leading-relaxed mb-4 flex-1 ${
          variant === "compact" ? "text-xs" : "text-sm"
        }`}
      >
        {description}
      </p>

      {/* 테이스팅 노트 & 페어링 (항상 표시) */}
      {(tasting || pairing) && (
        <div className="text-xs text-gray-400 font-light space-y-1 mb-4 opacity-100">
          {tasting && <p className="italic">테이스팅 노트: {tasting}</p>}
          {pairing && <p className="mt-2">페어링 추천: {pairing}</p>}
        </div>
      )}

      {/* 가격 및 버튼 */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
        <p
          className={`text-black font-light tracking-wide ${
            variant === "compact" ? "text-base" : "text-lg"
          }`}
        >
          ₩{price.toLocaleString()}
        </p>
        <button className="text-xs text-black font-light tracking-[0.2em] uppercase hover:opacity-60 transition-opacity">
          상세보기 →
        </button>
      </div>
    </div>
  );
}

