import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ButtonRectangle, Next } from "../svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface IProps {
  handlePrev: () => void;
  prevDisabled: boolean;
}

const Prev = (props: IProps) => {
  const { handlePrev, prevDisabled } = props;
  const container = useRef<HTMLDivElement | null>(null);
  const tl = useRef<GSAPTimeline>();
  const { contextSafe } = useGSAP({ scope: container });
  const originalWord = "gPrevious";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const [_isReplacing, setIsReplacing] = useState(false);
  const [currentLetters, setCurrentLetters] = useState(originalWord.split(""));

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
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ paused: true, repeat: 0 })
        .to(".white__bg", { translateX: "0%" });
    }, container);
    return () => ctx.revert();
  }, []);

  const onMouseEnter = contextSafe(() => {
    tl.current?.play();

    gsap.to(".next__text", {
      color: "#0000000",
    });
    gsap.to(".rect__svg__path", {
      stroke: "#0000000",
    });
  });

  const onMouseLeave = contextSafe(async () => {
    gsap.to(".next__text", {
      color: "#ffffff",
    });
    gsap.to(".rect__svg__path", {
      stroke: "#ffffff",
    });
    tl.current?.reverse();
  });

  return (
    <div className="button__con" ref={container}>
      <div className="white__bg"></div>
      <button
        className="prev"
        onClick={handlePrev}
        onMouseOver={replaceLettersRandomly}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        disabled={prevDisabled}
      >
        <div>
          <Next />
          <Next />
        </div>
        <span className="next__text">
          {" "}
          {currentLetters.join("").slice(1, currentLetters.length - 1)}
        </span>
        <div className="rectangle">
          <ButtonRectangle />
        </div>
      </button>
    </div>
  );
};

export default Prev;
