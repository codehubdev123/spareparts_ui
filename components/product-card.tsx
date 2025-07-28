"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useCart } from "@/contexts/cart-context";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviews?: number;
  discount?: number;
  inStock?: boolean;
}

export default function ProductCard({
  id,
  name,
  nameAr,
  price,
  originalPrice,
  image,
  rating = 5,
  reviews = 24,
  discount,
  inStock = true,
}: ProductCardProps) {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      nameAr,
      price,
      image,
      inStock,
    });
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={language === "ar" ? nameAr : name}
          className="w-full h-48 object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-500 transform-gpu"
          style={{
            transformStyle: "preserve-3d",
          }}
        />
        {discount && (
          <div
            className={`absolute top-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold ${
              language === "ar" ? "left-4" : "right-4"
            }`}
          >
            -{discount}%
          </div>
        )}
        <div
          className={`absolute top-4 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold ${
            language === "ar" ? "right-4" : "left-4"
          }`}
        >
          {t(inStock ? "in.stock" : "out.of.stock")}
        </div>
      </div>
      <CardContent className="p-4">
        <Link href={`/product/${id}`}>
          <h3 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors cursor-pointer hover:underline">
            {language === "ar" ? nameAr : name}
          </h3>
        </Link>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
            />
          ))}
          <span
            className={`text-sm text-gray-500 ${language === "ar" ? "mr-2" : "ml-2"}`}
          >
            ({reviews})
          </span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-lg font-bold text-blue-600">
              {price} {t("price.currency")}
            </span>
            {originalPrice && (
              <span
                className={`text-sm text-gray-500 line-through ${language === "ar" ? "mr-2" : "ml-2"}`}
              >
                {originalPrice} {t("price.currency")}
              </span>
            )}
          </div>
        </div>
        <Button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700"
          disabled={!inStock}
        >
          {t("add.to.cart")}
        </Button>
      </CardContent>
    </Card>
  );
}
