import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

const FlavorTitle = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });
    const secondTextSplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      ease: "power1.out",
      stagger: 0.02,
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });
    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
      },
    });
    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      ease: "power1.out",
      stagger: 0.02,
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 1%",
      },
    });
  });
  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 lg:px-1 first-text-split">
        <h1>we have 6</h1>
      </div>

      <div
        style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown">
          <h2 className="text-milk pb-5 pt-3 2xl:pt-0 2xl:px-5 px-3">
            god damn
          </h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:pt-0 pt-3 2xl:pb-0 pb-3.5 px-1 second-text-split">
        <h1>DELICIOUS FLAVORS</h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
