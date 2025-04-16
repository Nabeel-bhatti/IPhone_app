import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useRef } from "react";

const HowItWorks = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.to(".hiw-video", {
      scrollTrigger: {
        trigger: ".hiw-video",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="scree-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col item-center">
          <h2 className="hiw-title">
            A17 Pro chip <br />A monster win for gaming
          </h2>
          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
                className="  pointer-events-none"
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
        </div>
        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              A17 pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">best perfonmace by far</span>.
            </p>

            <p className="hiw-text g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              , with incredible detailed environments and charactores.
          </div>
          <div className="flex flex-1 justify-center flex-col g_fadeIn">
            <p className="hiw-text">new</p>
            <p className="hiw-bigtext">Pro-Class</p>
            <p className="hiw-text">with 6 cores</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
