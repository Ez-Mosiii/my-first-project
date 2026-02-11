import React, { useEffect, useState } from "react";
import { nutrientLists } from "../constants";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

const Nutrition = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [lists, setLists] = useState(nutrientLists);
  useEffect(() => {
    if (isMobile) {
      setLists(nutrientLists.slice(0, 3));
    } else {
      setLists(nutrientLists);
    }
  }, [isMobile]);

  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title", { type: "chars" });
    const paragraphSplit = SplitText.create(".nutrition-section p", {
      type: "words , lines",
      linesClass: "paragraph-line",
    });
    const contentTl = gsap.timeline({
      scrollTrigger: { trigger: ".nutrition-section", start: "top center" },
    });
    contentTl
      .from(titleSplit.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: "power2.out",
      })
      .from(paragraphSplit.lines, {
        yPercent: 300,
        rotate: 3,
        duration: 1,
        stagger: 0.01,
        ease: "power1.inOut",
      });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 80%",
      },
    });

    titleTl.to(".nutrition-text-scroll", {
      duration: 1,
      opacity: 1,
      ease: "power1.inOut",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });
  });
  return (
    <section className="nutrition-section">
      <img src="/images/slider-dip.png" className="object-cover w-full" />
      <img src="/images/big-img.png" className="big-img" />
      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 md:mt-0 mt-14">
        <div className="inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col justify-center items-center gap-24 ">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title">It still does</h1>
            </div>
            <div
              style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
              className="place-self-start nutrition-text-scroll"
            >
              <div className="bg-yellow-brown">
                <h2 className="text-milk-yellow pb-5 pt-3 px-3 md:pt-0 md:px-5 inline-block">
                  body good
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:justify-center itemscenter translate-y-5">
          <div className="max-w-md md:max-w-xs">
            <p className="text-lg md:text-right text-balance font-paragraph">
              Milk contains a wide array of nutrients, including vitamins,
              minerals and protein, and it is lactose free
            </p>
          </div>
        </div>
        <div className="nutrition-box">
          <div className="list-wrapper">
            {lists.map((nutrient, index) => (
              <div key={index} className="relative flex-1 col-center">
                <div>
                  <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                  <p className="font-paragraph text-sm mt-2">up to</p>
                  <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                    {nutrient.amount}
                  </p>
                </div>
                {index !== lists.length - 1 && (
                  <div className="spacer-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;
