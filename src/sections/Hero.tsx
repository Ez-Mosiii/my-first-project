import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(SplitText);

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", { type: "chars" });
    gsap.set(".hero-content-animation", { opacity: 0, y: 50 });
    const tl = gsap.timeline({ delay: 1 });

    tl.to(".hero-content-animation ", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
      stagger: 0.15,
    });
    tl.to(
      ".hero-text-scroll",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
        duration: 1,
      },
      "-=0.7",
    ).from(
      titleSplit.chars,
      {
        yPercent: 200,
        ease: "power2.out",
        stagger: 0.02,
      },
      "-=0.5",
    );
    const heroTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTL.to(".hero-container", {
      rotate: 7,
      yPercent: 20,
      ease: "power1.inOut",
      scale: 0.9,
    });
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        {isTablet ? (
          <>
            {isMobile && (
              <img
                src="/images/hero-bg.png"
                className="absolute bottom-40 size-full object-cover"
              />
            )}
            <img
              src="/images/hero-img.png"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"
            />
          </>
        ) : (
          <video
            src="/videos/hero-bg.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover "
          ></video>
        )}

        <div className="hero-content ">
          <div className="overflow-hidden px-1 pt-1">
            <h1 className="hero-title hero-content-animation">
              Super Delicious
            </h1>
          </div>
          <div
            className="hero-text-scroll "
            style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
          >
            <div className="hero-subtitle 2xl:px-3 ">
              <h1>Protein + Caffine</h1>
            </div>
          </div>
          <h2 className="hero-content-animation">
            Live life to the fullest with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>
          <div className="hero-button hero-content-animation">Chug a Spylt</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
