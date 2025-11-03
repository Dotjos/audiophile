import BackBtn from "@/app/components/BackBtn";
import { getProductBySlug } from "../../../../utils";
import Image from "next/image";
import AddToCartBtn from "@/app/components/AddToCartBtn";
import { QuantitySelector } from "@/app/components/QuantitySelector";
import { ImageGallery } from "@/app/components/ImageGallery";
import ButtonOne from "@/app/components/ButtonOne";

interface ProductDetailProps {
  params: Promise<{ productName: string }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailProps) {
  const { productName } = await params;
  const productDetail = await getProductBySlug(productName);
  return (
    <>
      <div className="bg-black h-[89px]"></div>
      <div className="bg-grayLighter px-3 md:px-[38px] lg:px-[165px] pt-2 md:pt-[33px] lg:pt-[79px]">
        <BackBtn />
        <section className="mt-3 lg:mt-14 md:flex md:items-center md:gap-[69.5px] lg:gap-[125px]">
          <div className="h-[327px] md:h-[480px] lg:h-[560px] lg:w-1/2 md:w-[281px] rounded-lg mb-4 bg-grayLight flex items-center justify-center flex-col">
            <Image
              alt={`${productDetail.slug}-image`}
              height={201}
              width={181}
              src={productDetail.image.mobile}
              className="md:hidden"
            />
            <Image
              alt={`${productDetail.slug}-image`}
              height={238}
              width={263}
              src={productDetail.image.tablet}
              className="hidden md:block lg:hidden"
            />
            <Image
              alt={`${productDetail.slug}-image`}
              height={381}
              width={421}
              src={productDetail.image.desktop}
              className="hidden lg:block"
            />
          </div>
          <div className="md:w-xs lg:w-lg">
            {productDetail.new && (
              <h1 className="uppercase text-Overline md:font-[12px] text-primary ">
                NEW PRODUCT
              </h1>
            )}

            <h1 className="my-3 md:mt-[17px] md:mb-8 text-[28px] lg:text-[44px] lg:mt-2 font-bold  text-H4 uppercase ">
              {productDetail.name}
            </h1>
            <p className="opacity-50 md:mb-4">{productDetail.description}</p>
            <p className="mt-3 mb-[31px] lg:mb-[47px] font-bold text-H6">
              ${productDetail.price}
            </p>

            <div className="flex gap-2 ">
              <QuantitySelector />
              <AddToCartBtn />
            </div>
          </div>
        </section>
        <section className="my-[88px] md:my-[120px] lg:my-40 flex flex-col lg:flex-row md:gap-[120px] gap-[113px] lg:gap-[125px]">
          <div className=" lg:w-xl">
            <h1 className="mb-3 lg:mb-4 md:mb-[32px] md:w-1/2 lg:w-fit md:text-[32px] md:font-bold leading-9 tracking-[1.143px] font-bold text-H5">
              FEATURES
            </h1>
            <div className="">
              {productDetail.features.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-Body opacity-50 ${index > 0 ? "pt-3" : ""}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:gap-4 md:flex-row lg:flex-col lg:w-xs">
            <h1 className="font-bold md:w-1/2 text-H5 md:text-[32px] lg:w-fit md:font-bold leading-9 tracking-[1.143px]">
              IN THE BOX
            </h1>
            <ul className="flex flex-col lg:gap-1">
              {productDetail.includes.map((item, index) => {
                return (
                  <li key={index} className="flex gap-[21px] text-Body">
                    <span className="text-primary font-bold">
                      {item.quantity}x
                    </span>
                    <span className="font-normal opacity-50">{item.item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="mb-[120px] ">
          <ImageGallery
            imageOne={productDetail.gallery.first.mobile}
            imageTwo={productDetail.gallery.second.mobile}
            imageThree={productDetail.gallery.third.mobile}
          />
        </section>
        <section>
          <h1 className="text-center text-[24px] lg:mb-16 lg:text-[32px] lg:tracking-[1.143px] tracking-[0.857px] leading-9 font-bold mb-[40px]">
            YOU MAY ALSO LIKE
          </h1>
          <div className="flex flex-col gap-14 md:flex-row md:gap-[11px] lg:gap-[30px] w-full justify-between">
            {productDetail.others.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center flex-col w-full gap-4"
                >
                  <div className="w-full bg-grayLight rounded-lg flex flex-col items-center">
                    <div className="flex relative  w-[200px] md:w-full h-[120px] md: md:h-[318px] lg:h-[318px] items-center">
                      <Image
                        src={item.image.mobile}
                        fill
                        alt={`${item.slug}-image`}
                        className="rounded-lg md:hidden"
                      />
                      <Image
                        src={item.image.tablet}
                        fill
                        alt={`${item.slug}-image`}
                        className="rounded-lg md:block"
                      />
                      <Image
                        src={item.image.desktop}
                        fill
                        alt={`${item.slug}-image`}
                        className="rounded-lg md:block"
                      />
                    </div>
                  </div>
                  <h1 className="text-[24px] uppercase font-bold leading-none tracking-[1.714px]">
                    {item.name}
                  </h1>
                  <ButtonOne />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

const page = () => {};

// export default page;
