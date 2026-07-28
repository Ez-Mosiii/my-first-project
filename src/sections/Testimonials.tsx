import { cards } from "../constants";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { useMemo } from "react";

const Testimonials = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // Limit cards on mobile for performance (fewer videos to load)
  const displayCards = useMemo(
    () => (isMobile ? cards.slice(0, 4) : cards),
    [isMobile],
  );

  useGSAP(() => {
    // Only apply negative margin on desktop where there's enough room
    if (!isMobile) {
      gsap.set(".testimonials-section", { marginTop: "-140vh" });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: isMobile ? "bottom top" : "200% top",
        scrub: true,
      },
    });

    tl.to(".testimonials-section .first-title", {
      xPercent: isMobile ? 15 : 70,
    })
      .to(
        ".testimonials-section .second-title",
        { xPercent: isMobile ? 5 : 25 },
        "<",
      )
      .to(
        ".testimonials-section .third-title",
        { xPercent: isMobile ? -10 : -50 },
        "<",
      );

    if (!isMobile) {
      // Desktop: pin and animate cards up
      const vidTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "10% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });
      vidTl.from(".vd-card", {
        yPercent: 150,
        stagger: 0.2,
        ease: "power1.inOut",
      });
    } else {
      // Mobile: simple reveal without pinning
      gsap.from(".vd-card", {
        yPercent: 50,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out",
        duration: 0.8,
        scrollTrigger: {
          trigger: ".pin-box",
          start: "top 85%",
        },
      });
    }
  });

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (index: number) => {
    const video = videoRefs.current[index];
    video?.play();
  };
  const handlePause = (index: number) => {
    const video = videoRefs.current[index];
    video?.pause();
  };
  return (
    <section className="testimonials-section">
      <div className="md:absolute relative md:size-full w-full flex flex-col items-center pt-[5vw] 2xl:mt-[-5vw] ">
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown second-title">Everyone</h1>
        <h1 className="text-black third-title">Talking</h1>
      </div>
      <div className="pin-box">
        {displayCards.map((card, index) => (
          <div
            key={index}
            className={`vd-card ${!isMobile ? card.translation : ''} ${!isMobile ? card.rotation : ''}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={card.src}
              muted
              loop
              playsInline
              className="size-full object-cover"
            ></video>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
