import ClipPathTitle from "../components/ClipPathTitle";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import VideoPinSection from "../components/VideoPinSection";
const Benefit = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });
    revealTl
      .to(".benefit-section .first-title", {
        opacity: 1,
        duration: 1,
        ease: "circ.out",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      })
      .to(".benefit-section .second-title", {
        opacity: 1,
        duration: 1,
        ease: "circ.out",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      })
      .to(".benefit-section .third-title", {
        opacity: 1,
        duration: 1,
        ease: "circ.out",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      })
      .to(".benefit-section .fourth-title", {
        opacity: 1,
        duration: 1,
        ease: "circ.out",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });
  });
  return (
    <section className="benefit-section">
      <div className="pt-20 container mx-auto">
        <div className="col-center">
          <p>
            Unlock the Advantages:
            <br />
            Explore the Key Benefits of Choosing SPYLT
          </p>
          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"Shelf stable"}
              color={"#faeade"}
              bg={"#c88e64"}
              className={"first-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Protein + Caffeine"}
              color={"#222123"}
              bg={"#faeade"}
              className={"second-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Infinitely recyclable"}
              color={"#faeade"}
              bg={"#7f3b2d"}
              className={"third-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Lactose free"}
              color={"#2e2d2f"}
              bg={"#fed775"}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>
          <div className="md:mt-0 mt-10">
            <p>And much more ...</p>
          </div>
        </div>
      </div>
      <div className="relative overlay-box">
        <VideoPinSection />
      </div>
    </section>
  );
};

export default Benefit;
