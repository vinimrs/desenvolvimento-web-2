'use client';
import React from 'react';
import json from '../../../public/heroItems.json';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const Hero: React.FC = () => {
  const { items } = json;
  return (
    <Carousel
      infiniteLoop={true}
      dynamicHeight={false}
      axis="horizontal"
      emulateTouch={true}
      interval={7000}
      transitionTime={500}
      autoPlay={true}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      {items.map(item => (
        <div
          key={item.id}
          className="h-[520px] relative flex items-center justify-center"
        >
          <Image
            src={item.image}
            alt="Imagem do banner"
            fill={true}
            className="-z-10 absolute object-cover"
          />
          <div className="h-full flex flex-nowrap flex-col md:flex-row items-center justify-center md:justify-between px-2 md:px-0 w-mobile md:w-tablet lg:w-desktop">
            <div className="order-1 md:order-0 text-whitebg mt-8 text-start w-[340px] md:w-[380px] lg:w-[500px]">
              <h2 className="text-base md:text-xl lg:text-4xl font-bold text-whitebg mb-4">
                {item.title}
              </h2>
              <p className="text-xs md:text-sm lg:text-xl font-medium leading-4 md:leading-5 text-justify mb-4">
                {item.description}
              </p>
              <button className="text-xs md:text-sm lg:text-base font-semibold px-6 py-2 ring-2 ring-whitebg ring-inset">
                Saiba mais
              </button>
            </div>
            <div className="order-0 md:order-1 flex">
              {item.equipments.map(
                (equipment: { name: string; image: string }) => (
                  <img
                    key={equipment.name}
                    src={equipment.image}
                    alt={equipment.name}
                    className="h-[152px] md:h-[197px] lg:h-[244px] inline"
                  />
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;

