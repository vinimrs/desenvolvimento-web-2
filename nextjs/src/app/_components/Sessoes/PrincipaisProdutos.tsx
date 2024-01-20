'use client';
import React, { useState } from 'react';
import Sessao from '../Sessao';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { useSwipeable } from 'react-swipeable';

interface Produto {
  id: number;
  image: string;
  categories: string[];
  name: string;
}

const list: Produto[] = [
  {
    id: 1,
    image: '/products/gardening/grass-cutter-trapp-list.png',
    categories: ['Jardim', 'Elétrico'],
    name: 'Cortador de Grama Elétrico Trapp MC-50E',
  },
  {
    id: 2,
    image: '/products/pumps/small-pump-schineider-list.png',
    categories: ['Motobomba', 'Elétrico'],
    name: 'Motobomba autoaspirante residencial ASP-98',
  },
  {
    id: 3,
    image: '/products/motor-pumps/submersible-motor-pump-schineider-list.png',
    categories: ['Submersa', 'Elétrico'],
    name: 'Motobomba Submersa Schineider SUB 50',
  },
  {
    id: 4,
    image: '/products/gardening/grass-cutter-trapp-list.png',
    categories: ['Jardim', 'Elétrico'],
    name: 'Cortador de Grama Elétrico Trapp MC-50E',
  },
  {
    id: 5,
    image: '/products/pumps/small-pump-schineider-list.png',
    categories: ['Motobomba', 'Elétrico'],
    name: 'Motobomba autoaspirante residencial ASP-98',
  },
  {
    id: 6,
    image: '/products/motor-pumps/submersible-motor-pump-schineider-list.png',
    categories: ['Submersa', 'Elétrico'],
    name: 'Motobomba Submersa Schineider SUB 50',
  },
  {
    id: 7,
    image: '/products/motor-pumps/submersible-motor-pump-schineider-list.png',
    categories: ['Submersa', 'Elétrico'],
    name: 'Motobomba Submersa Schineider SUB 501',
  },
  {
    id: 8,
    image: '/products/motor-pumps/submersible-motor-pump-schineider-list.png',
    categories: ['Submersa', 'Elétrico'],
    name: 'Motobomba Submersa Schineider SUB 502',
  },
];

const PrincipaisProdutos: React.FC = () => {
  const [scrollx, setScrollx] = useState(0);
  const { width } = useWindowDimensions();

  const handleLeftArrow = () => {
    let x = scrollx + 240 + 12;
    if (x > 0) {
      x = 0;
    }
    setScrollx(x);
  };

  const handleRightArrow = () => {
    const over = width < 769 ? 0 : width < 1024 ? 1 : 3;
    const jump = 240 + 12;
    console.log(jump);

    let x = scrollx - jump;
    const listWidth = list.length * 240;
    console.log(
      'x',
      x,
      'listWidth',
      listWidth,
      'width',
      width,
      'result',
      listWidth - over * jump
    );
    if (-x > listWidth - over * jump) {
      x += jump;
    }
    setScrollx(x);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleRightArrow(),
    onSwipedRight: () => handleLeftArrow(),
    // preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Sessao
      subtitle="Produtos"
      title="Principais produtos"
      description="Vendemos os produtos mais confiáveis para resolver suas necessidades."
    >
      {/* <!-- Lista de principais produtos --> */}
      <div className="relative w-[252px] md:w-[496px] lg:w-[998px] m-auto">
        <div className="overflow-x-hidden w-[252px] md:w-[496px] lg:w-[998px]">
          <div
            className="overflow-x-hidden transition-all ease-out duration-300"
            style={{ marginLeft: scrollx }}
          >
            <div {...handlers} className="flex items-center gap-3">
              {list.map(produto => (
                <div
                  key={produto.id}
                  className="flex flex-col gap-4 pb-4 min-w-[240px]"
                >
                  <img src={produto.image} className="self-center h-[160px]" />
                  <div className="flex gap-1.5">
                    {produto.categories.map(category => (
                      <button
                        key={category}
                        className="bg-whitebg dark:bg-whitebglight3 text-blue font-bold text-xs px-4 py-[5px] rounded-lg dark:hover:bg-blue hover:bg-blue hover:text-whitebg transition duration-50 ease-linear"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                  <h3 className="font-bold leading-5">{produto.name}</h3>
                  <button className="self-center w-full font-bold text-blue text-sm bg-transparent ring-2 ring-blue ring-inset px-20 py-3 rounded-xl hover:bg-blue hover:text-whitebg transition duration-50 ease-linear">
                    Leia Mais
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          className="absolute -left-16 top-0 bottom-0 my-auto mx-0 text-blue bg-whitebg dark:bg-whitebglight3 dark:text-whitebg rounded-full w-12 h-12 flex items-center justify-center"
          onClick={handleLeftArrow}
        >
          <BiLeftArrow />
        </button>
        <button
          className="absolute -right-14 top-0 bottom-0 my-auto mx-0 text-blue bg-whitebg dark:bg-whitebglight3 dark:text-whitebg rounded-full w-12 h-12 flex items-center justify-center"
          onClick={handleRightArrow}
        >
          <BiRightArrow />
        </button>
      </div>
    </Sessao>
  );
};

export default PrincipaisProdutos;

