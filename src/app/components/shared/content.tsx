import React, { useEffect, useRef, useState } from "react";
import { ArrowUp } from "../svg";
import { NextButton, PreviousButton } from "../buttons";
import { carData } from "@/utils/static";

interface IProps {
  handleNext: () => void;
  handlePrev: () => void;
  index: number;
}

const Content = (props: IProps) => {
  const { handleNext, handlePrev, index } = props;
  const [showContent, setShowContent] = useState(false);
  const [activeIndex, setActiveIndex] = useState(index);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    setShowContent(false);
    const timeout = setTimeout(() => {
      setShowContent(true);
      setActiveIndex(index);
    }, 2600);

    return () => {
      clearTimeout(timeout);
    };
  }, [index]);

  return (
    <div className={`app__content__wrapper ${showContent ? "show" : ""}`}>
      <div className="app__top__content">
        <div className="app__top__content__box">
          <div className="app__top__content__box__left">
            <h2>{carData[activeIndex].name}</h2>

            <p>{carData[activeIndex].description}</p>
          </div>

          <div className="app__top__content__box__right">
            <div className="flex__con">
              <h2>Cyberpunk</h2>

              <ArrowUp />
            </div>
            <p>
              People are constantly restricted and controlled in this developed
              city, where the boundary between virtual and real worlds becomes
              increasingly blurred.
            </p>
          </div>
        </div>

        <div className="app__top__chinese">
          <p>
            在赛博朋克的世界里，高科技和黑暗势力共存。人们身处于发达的城市中，但生活却一直受到巨大的限制和控制。虚拟世界和现实世界之间的界限愈来愈模糊，让人们感到困惑和迷失。
          </p>
        </div>
      </div>

      <div className="app__middle__content" ref={container}>
        <div className="app__middle__content__button__con">
          <PreviousButton handlePrev={handlePrev} prevDisabled={!showContent} />
          <NextButton handleNext={handleNext} nextDisabled={!showContent} />
        </div>
      </div>

      <div className="app__bottom__content">
        <div className="app__bottom__content__left">
          <p>{carData[activeIndex].story}</p>
        </div>

        <div className="app__bottom__content__right">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/bottom_right.png" alt="content" />
        </div>

        <p className="designed_by">DESIGNED-BY-SEUN-OYEDIRAN</p>
      </div>
    </div>
  );
};

export default Content;
