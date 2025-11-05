import Image from "next/image";
import { getProductsByCategory } from "../../../../utils";
import ButtonOne from "@/app/components/ButtonOne";
import ManComp from "@/app/components/ManComp";
import NavSection from "@/app/components/NavSection";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryProducts = getProductsByCategory(category);

  return (
    <div>
      {/* Display product details */}
      <div className="">
        <div className="h-[89px] lg:h-24 border bg-black"></div>
        <div className="py-4  md:pt-[105px] md:pb-[97px] bg-black lg:pt-[98px] text-[28px] tracking-[2px] leading-none font-bold text-center text-white uppercase">
          {category}
        </div>
        <section className="pt-16 md:pt-[120px] lg:pt-40 md:px-5 lg:px-[165px] flex flex-col gap-[120px] pb-[120px] lg:pb-[165px] bg-grayLighter px-3">
          {categoryProducts.map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={product.id}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} lg:gap-[125px]`}
              >
                <div className="h-[352px] mb-3 md:mb-[52px] lg:h-[560px] justify-center lg:w-1/2 flex flex-col items-center bg-grayLight rounded-lg overflow-hidden relative">
                  <Image
                    src={product.image.mobile}
                    alt={product.slug}
                    width={220}
                    height={243}
                    className="md:hidden"
                  />
                  <Image
                    src={product.image.tablet}
                    alt={product.slug}
                    width={202.204}
                    height={243}
                    className="hidden md:block lg:hidden"
                  />
                  <Image
                    src={product.image.desktop}
                    alt={product.slug}
                    width={349.238}
                    height={386}
                    className="hidden lg:block"
                  />
                </div>
                <div className="flex lg:w-1/2 lg:justify-center lg:items-start flex-col items-center lg:text-left text-center">
                  {product.new && (
                    <h1 className="uppercase mb-3 md:mb-2 text-Overline text-primary ">
                      NEW PRODUCT
                    </h1>
                  )}
                  <h1 className="font-bold mb-3 md:mb-4 lg:text-[40px] md:w-1/2 leading-none text-[28px] uppercase">
                    {product.name}
                  </h1>
                  <p className="text-Body mb-3 lg:mb-4 opacity-50">
                    {product.description}
                  </p>
                  <ButtonOne route={`/productDetail/${product.slug}`} />
                </div>
              </div>
            );
          })}
        </section>
        <section className="flex flex-col gap-[120px] lg:gap-40 md:px-5 lg:px-[165px] px-3">
          <NavSection />
          <ManComp />
        </section>
      </div>
    </div>
  );
}
