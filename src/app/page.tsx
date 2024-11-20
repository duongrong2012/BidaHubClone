import React from "react";

import Carousel from "@/components/Carousel";
import IntroBar from "@/components/IntroBar";
import SponsorSlider from "@/components/SponsorSlider";
import CategorySlider from "@/components/CategorySlider";
import FeaturedProduct from "@/components/FeaturedProduct";
import TopSellerProduct from "@/components/TopSellerProduct";
import CategoryService from "@/services/category";
import ProductService from "@/services/product";

export default async function Home() {

  const categories = await CategoryService.getCategories()

  const products = await ProductService.getProducts()

  return (
    <div className="">
      <Carousel />
      <IntroBar />
      <TopSellerProduct products={products} />
      <div className="container px-4 tb:px-8 mx-auto">
        <CategorySlider category={categories} />
        <FeaturedProduct products={products} />
        <SponsorSlider />
      </div>
    </div>
  );
}
