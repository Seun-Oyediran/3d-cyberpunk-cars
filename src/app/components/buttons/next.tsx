import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ButtonRectangle, Next } from "../svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface IProps {
  handleNext: () => void;
  nextDisabled: boolean;
}

const originalWord = "rNext";
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const NextButton = (props: IProps) => {
  const { handleNext, nextDisabled } = props;
  const container = useRef<HTMLDivElement | null>(null);
  const tl = useRef<GSAPTimeline>();
  const { contextSafe } = useGSAP({ scope: container });
  const [_isReplacing, setIsReplacing] = useState(false);
  const [currentLetters, setCurrentLetters] = useState(originalWord.split(""));
  const shouldPlay = useRef(true);

  const generateRandomText = () =>
    characters.charAt(Math.floor(Math.random() * characters.length));

  const replaceLettersRandomly = () => {
    setIsReplacing(true);
    let currentIndex = 0;

    const replaceLetter = () => {
      const randomText = generateRandomText();

      setCurrentLetters((prevLetters) => {
        const updatedLetters = [...prevLetters];
        updatedLetters[currentIndex] = randomText;
        return updatedLetters;
      });

      currentIndex++;

      if (currentIndex < originalWord.length) {
        setTimeout(replaceLetter, 50);
      } else {
        setTimeout(() => {
          restoreOriginalLetters(0);
        }, 50);
      }
    };

    replaceLetter();
  };

  const restoreOriginalLetters = (index: any) => {
    if (index < originalWord.length) {
      setTimeout(() => {
        setCurrentLetters((prevLetters) => {
          const updatedLetters = [...prevLetters];
          updatedLetters[index] = originalWord.charAt(index);
          return updatedLetters;
        });

        restoreOriginalLetters(index + 1);
      }, 50);
    } else {
      setIsReplacing(false);
    }
  };

  useLayoutEffect(() => {
    replaceLettersRandomly();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // const xValue = isHovered ? "100%" : "0";
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          paused: true,
          defaults: {
            duration: 0.4,
            ease: "power1.inOut",
          },
        })
        .from(".white__bg", { xPercent: -100 })
        .call(() => {
          !shouldPlay.current && tl!.current!.pause();
        })
        .to(".white__bg", { xPercent: 200 });
    }, container);
    return () => ctx.revert();
  }, []);

  const onMouseEnter = contextSafe(() => {
    shouldPlay.current = false;
    tl?.current!.restart();
    gsap.to(".next__text", {
      color: "#0000000",
    });
    gsap.to(".rect__svg__path", {
      stroke: "#0000000",
    });
  });

  const onMouseLeave = contextSafe(() => {
    shouldPlay.current = true;
    tl?.current!.play();
    gsap.to(".next__text", {
      color: "#ffffff",
    });
    gsap.to(".rect__svg__path", {
      stroke: "#ffffff",
    });
  });

  return (
    <div className="button__con" ref={container}>
      <div className="white__bg"></div>
      <button
        className="next"
        onClick={handleNext}
        onMouseOver={replaceLettersRandomly}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        disabled={nextDisabled}
      >
        <span className="next__text">
          {currentLetters.join("").slice(1, currentLetters.length - 1)}
        </span>
        <div>
          <Next />
          <Next />
        </div>
        <div className="rectangle">
          <ButtonRectangle />
        </div>
      </button>
    </div>
  );
};

export default NextButton;
