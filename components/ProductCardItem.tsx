"use client";

import { useState } from "react";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";
import { useCart } from "@/contexts/cart-context";
import HeartSolidIcon from "./icons/HeartSolidIcon";
import ShoppingCart from "./icons/ShoppingCart";
import { Star } from "lucide-react";

type Props = {
  product: any;
};
const ProductCardItem = ({ product }: Props) => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCarted, setIsCarted] = useState(false);
  const handleAddToCart = () => {
    setIsCarted(!isCarted);
    addToCart({
      id: product.id,
      name: product.name,
      nameAr: product.nameAr,
      price: product.price,
      image: product.image,
      inStock: product.inStock,
    });
  };

  const handleOnTitleClick = () => {
    router.push(`/product/${product.id}`);
    // /product/${id}
  };
  return (
    <a className="shadow-xl">
      <div className="card border-4 border-white">
        <div className="wrapper">
          <img src={product.image} className="cover-image" />
        </div>
        <img src={product.imageActive} className="character" />
      </div>
      <div className="bg-white p-3">
        <div className="flex justify-between items-center">
          <h5 className="text-gray-500">الفلاتر</h5>
          <div className=" bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold right-4">
            متوفر
          </div>
        </div>
        <h1
          className="text-lg font-bold cursor-pointer hover:text-blue-600 transition"
          onClick={() => handleOnTitleClick()}
        >
          {language === "ar" ? product.nameAr : product.name}
        </h1>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
            />
          ))}
          <span
            className={`text-sm text-gray-500 ${language === "ar" ? "mr-2" : "ml-2"}`}
          >
            ({product.reviews})
          </span>
        </div>
        <div className="flex justify-between flex-row">
          <span className="flex gap-x-2  items-center">
            <span className="text-lg font-bold text-blue-600">
              {product.price} {t("price.currency")}
            </span>
            {product.originalPrice && (
              <span
                className={`text-sm text-gray-500 line-through ${language === "ar" ? "mr-2" : "ml-2"}`}
              >
                {product.originalPrice} {t("price.currency")}
              </span>
            )}
          </span>
          <span className="flex gap-x-2">
            <button onClick={handleAddToCart}>
              <ShoppingCart isActive={isCarted} />
            </button>
            <button onClick={() => setIsFavorite(!isFavorite)}>
              <HeartSolidIcon isActive={isFavorite} />
            </button>
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProductCardItem;
