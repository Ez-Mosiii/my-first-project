import { cards } from "../constants";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Testimonials = () => {
  useGSAP(() => {
    gsap.set(".testimonials-section", { marginTop: "-140vh" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: true,
      },
    });

    tl.to(".testimonials-section .first-title", { xPercent: 70 })
      .to(".testimonials-section .second-title", { xPercent: 25 }, "<")
      .to(".testimonials-section .third-title", { xPercent: -50 }, "<");

    const vidTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "10% percent",
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
      <div className="absolute size-full flex flex-col items-center pt-[5vw] 2xl:mt-[-5vw] ">
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown second-title">Everyone</h1>
        <h1 className="text-black third-title">Talking</h1>
      </div>
      <div className="pin-box">
        {cards.map((cards, index) => (
          <div
            key={index}
            className={`vd-card ${cards.translation} ${cards.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={cards.src}
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
