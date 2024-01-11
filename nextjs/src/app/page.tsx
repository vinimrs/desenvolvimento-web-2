import React from 'react';
import { Metadata } from 'next';
import Hero from './_components/Hero';

export const metadata: Metadata = {
  title: 'MV Bombas - Home',
  description: 'Página inicial',
};

const Home: React.FC = () => {
  return (
    // <!-- Conteúdo principal da pagina -->
    <main className="max-w-full">
      {/* <!-- Hero --> */}
      <Hero />
      {/* <!-- Seções principais --> */}
      <div className="w-screen max-w-full flex justify-center">
        <div className="inline-flex flex-col flex-wrap gap-20 pt-14 max-w-full w-mobile md:w-tablet lg:w-desktop">
          {/* <!-- Principais produtos --> */}
          <section className="max-w-full w-mobile md:w-tablet lg:w-desktop">
            {/* <!-- Cabeçalho da seção --> */}
            <header className="mb-14 md:w-[475px] lg:w-[600px]">
              <h2 className="font-display text-xs md:text-base font-bold text-blue uppercase tracking-[0.3rem] pl-0.5 -mb-1.5">
                Produtos
              </h2>
              <h1 className="font-display text-2xl md:text-3xl font-semibold">
                Principais produtos
              </h1>
              <p className="text-xs md:text-base w-[290px] md:w-full">
                Vendemos os produtos mais confiáveis para resolver suas
                necessidades.
              </p>
            </header>
            {/* <!-- Lista de produtos --> */}
            <div className="flex flex-nowrap pl-10 gap-4 justify-center">
              {/* <!-- Produto --> */}
              <div className="flex flex-col gap-4 pb-4 w-[240px]">
                <img
                  src="/products/gardening/grass-cutter-trapp-list.png"
                  className="self-center h-[160px]"
                />
                <div className="flex gap-1.5">
                  <button className="bg-whitebg text-blue font-bold text-xs px-4 py-[5px] rounded-lg hover:bg-blue hover:text-whitebg transition duration-50 ease-linear">
                    Jardim
                  </button>
                  <button className="bg-whitebg text-blue font-bold text-xs px-4 py-[5px] rounded-lg hover:bg-blue hover:text-whitebg transition duration-50 ease-linear">
                    Elétrico
                  </button>
                </div>
                <h3 className="font-bold leading-5">
                  Cortador de Grama Elétrico Trapp MC-50E
                </h3>
                <button className="self-center font-bold text-blue text-sm bg-transparent ring-2 ring-blue ring-inset px-20 py-3 rounded-xl hover:bg-blue hover:text-whitebg transition duration-50 ease-linear">
                  Leia Mais
                </button>
              </div>
              <div className="hidden md:flex flex-col gap-4 pb-4 w-[240px]">
                <img
                  src="/products/pumps/small-pump-schineider-list.png"
                  className="self-center h-[160px]"
                />
                <div className="flex gap-1.5">
                  <button className="bg-whitebg text-blue font-bold text-xs px-4 py-[5px] rounded-lg hover:bg-blue hover:text-whitebg transition duration-50 ease-linear">
                    Motobomba
                  </button>
                  <button className="bg-whitebg text-blue font-bold text-xs px-4 py-[5px] rounded-lg hover:bg-blue hover:text-whitebg transition duration-50 ease-linear">
                    Elétrico
                  </button>
                </div>
                <h3 className="font-bold leading-5">
                  Motobomba autoaspirante residencial ASP-98
                </h3>
                <button className="self-center font-bold text-blue text-sm bg-transparent ring-2 ring-blue ring-inset px-20 py-3 rounded-xl hover:bg-blue hover:text-whitebg transition duration-50 ease-linear">
                  Leia Mais
                </button>
              </div>
              <div className="hidden lg:flex flex-col gap-4 pb-4 w-[240px]">
                <img
                  src="/products/motor-pumps/submersible-motor-pump-schineider-list.png"
                  className="self-center h-[160px]"
                />
                <div className="flex gap-1.5">
                  <button className="bg-whitebg text-blue font-bold text-xs px-4 py-[5px] rounded-lg hover:bg-blue hover:text-whitebg transition duration-50 ease-linear">
                    Submersa
                  </button>
                  <button className="bg-whitebg text-blue font-bold text-xs px-4 py-[5px] rounded-lg hover:bg-blue hover:text-whitebg transition duration-50 ease-linear">
                    Elétrico
                  </button>
                </div>
                <h3 className="font-bold leading-5">
                  Motobomba Submersa Schineider SUB 50
                </h3>
                <button className="self-center font-bold text-blue text-sm bg-transparent ring-2 ring-blue ring-inset px-20 py-3 rounded-xl hover:bg-blue hover:text-whitebg transition duration-50 ease-linear">
                  Leia Mais
                </button>
              </div>
            </div>
          </section>

          {/* <!-- Assistências técnicas --> */}
          <section className="max-w-full w-mobile md:w-tablet lg:w-desktop">
            <header className="mb-14 md:w-[475px] lg:w-[600px]">
              <h2 className="font-display text-xs md:text-base font-bold text-blue uppercase tracking-[0.3rem] pl-0.5 -mb-1.5">
                Assistência
              </h2>
              <h1 className="font-display text-2xl md:text-3xl font-semibold">
                Nossas assistências técnicas
              </h1>
              <p className="text-xs md:text-base w-[290px] md:w-full">
                Oferecemos assistência técnica para as principais marcas do
                mercado.
              </p>
            </header>

            <div className="flex gap-8 justify-center">
              <div className="bg-gradient-to-br from-blue w-[300px] h-[142px] p-[1px] rounded-xl">
                <div className="bg-white rounded-xl px-2 flex justify-center w-full h-full">
                  <img src="/brands/schineider.svg" className="w-[220px]" />
                </div>
              </div>

              <div className="hidden md:block bg-gradient-to-br from-blue w-[300px] h-[142px] p-[1px] rounded-xl">
                <div className="bg-white rounded-xl px-2 flex justify-center w-full h-full">
                  <img src="/brands/buffalo.svg" className="w-[220px]" />
                </div>
              </div>

              <div className="hidden lg:block bg-gradient-to-br from-blue w-[300px] h-[142px] p-[1px] rounded-xl">
                <div className="bg-white rounded-xl px-2 flex justify-center w-full h-full">
                  <img src="/brands/toyama.svg" className="w-[220px]" />
                </div>
              </div>

              <div className="hidden bg-gradient-to-br from-blue w-[300px] h-[142px] p-[1px] rounded-xl">
                <div className="bg-white rounded-xl px-2 flex justify-center w-full h-full">
                  <img src="/brands/tramontina.svg" className="w-[220px]" />
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Dados de confiança --> */}
          <section className="max-w-full w-mobile md:w-tablet lg:w-desktop">
            <header className="mb-14 md:w-[475px] lg:w-[600px]">
              <h2 className="font-display text-xs md:text-base font-bold text-blue uppercase tracking-[0.3rem] pl-0.5 -mb-1.5">
                Confiança
              </h2>
              <h1 className="font-display text-2xl md:text-3xl font-semibold">
                Confiança construída em anos
              </h1>
              <p className="text-xs md:text-base w-[290px] md:w-full">
                Confiada por centenas de clientes e várias multinacionais,
                construídas em anos de serviços prestados para todas as
                necessidades.
              </p>
            </header>

            <div className="md:w-auto flex flex-row flex-wrap gap-8 justify-center">
              <div className="bg-gradient-to-br from-blue w-[320px] h-[240px] p-[1px] rounded-xl">
                <div className="bg-white rounded-xl grid content-center px-6 h-full w-full">
                  <div className="flex flex-row items-center gap-1 mb-4">
                    <img
                      src="/icons/more-blue.svg"
                      className="pr-2 h-[30px] w-[30px]"
                    />
                    <h2 className="text-xl font-bold">de 10 anos de mercado</h2>
                  </div>
                  <p className="text-justify">
                    Mais de uma década atuando no ramo de equipamentos
                    motorizados na região de Maceió-AL.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue w-[320px] h-[240px] p-[1px] rounded-xl">
                <div className="bg-white rounded-xl grid content-center px-6 h-full w-full">
                  <div className="flex flex-row items-center gap-1 mb-4">
                    <img
                      src="/icons/target-blue.svg"
                      className="pr-2 h-[30px] w-[30px]"
                    />
                    <h2 className="text-xl font-bold">Excelente localização</h2>
                  </div>
                  <p className="text-justify">
                    Sua localização central é perfeita para conseguir atender os
                    clientes de todos os bairros da cidade.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue w-[320px] h-[240px] p-[1px] rounded-xl">
                <div className="bg-white rounded-xl grid content-center px-6 h-full w-full">
                  <div className="flex flex-row items-center gap-1 mb-4">
                    <img
                      src="/icons/more-blue.svg"
                      className="pr-2 h-[30px] w-[30px]"
                    />
                    <h2 className="text-xl font-bold">
                      de 5 multinacionais parceiras!
                    </h2>
                  </div>
                  <p className="text-justify">
                    Prestamos assistência para as principais marcas do mercado
                    no setor.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Serviços --> */}
          <section className="max-w-full w-mobile md:w-tablet lg:w-desktop">
            <header className="mb-14 md:w-[475px] lg:w-[600px]">
              <h2 className="font-display text-xs md:text-base font-bold text-blue uppercase tracking-[0.3rem] pl-0.5 -mb-1.5">
                Serviços
              </h2>
              <h1 className="font-display text-2xl md:text-3xl font-semibold">
                Excedemos as expectativas
              </h1>
              <p className="text-xs md:text-base w-[290px] md:w-full">
                Prestamos serviços de qualidade e rapidez para solucionar o seu
                problema.
              </p>
            </header>

            <div className="lg:pl-12">
              <div className="gap-8 flex flex-row flex-wrap justify-center lg:justify-normal">
                <div className="bg-gradient-to-br from-blue w-[320px] h-[364px] p-[1px] rounded-xl">
                  <div className="bg-white px-6 py-8 rounded-xl flex flex-col gap-5 w-full h-full">
                    <div className="bg-whitebgOpacity rounded-lg h-[70px] w-[70px]">
                      <img
                        src="/icons/tools.svg"
                        className="h-[34px] w-[34px] ml-[18px] mt-[18px]"
                      />
                    </div>

                    <h2 className="font-bold">
                      Manutenção de equipamentos motorizados
                    </h2>
                    <p className="text-justify text-xs leading-4">
                      Nós realizamos manutenção de praticamente todo equipamento
                      motorizado, incluindo para jardinagem, bombeamento de
                      fluidos e de propósito geral.
                    </p>
                    <button className="font-semibold w-[160px] h-[54px] bg-yellow rounded-lg">
                      <span className="align-middle">Saiba Mais</span>
                      <img
                        src="/icons/black-arrow-right.svg"
                        className="h-[24px] w-[24px] inline ml-2.5"
                      />
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue w-[320px] h-[364px] p-[1px] rounded-xl">
                  <div className="bg-white px-6 py-8 rounded-xl flex flex-col gap-5 w-full h-full">
                    <div className="bg-whitebgOpacity rounded-lg h-[70px] w-[70px]">
                      <img
                        src="/icons/deal.svg"
                        className="h-[34px] w-[34px] ml-[18px] mt-[18px]"
                      />
                    </div>

                    <h2 className="font-bold">
                      Assistência técnica autorizada
                    </h2>
                    <p className="text-justify text-xs leading-4">
                      Somos autorizados pelos principais fabricantes para
                      manutenção dos equipamentos ainda no prazo da garantia
                      legal ou garantia contratual, sem custo para o cliente.
                    </p>
                    <button className="font-semibold w-[160px] h-[54px] bg-yellow rounded-lg">
                      <span className="align-middle">Saiba Mais</span>
                      <img
                        src="/icons/black-arrow-right.svg"
                        className="h-[24px] w-[24px] inline ml-2.5"
                      />
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue w-[320px] h-[364px] p-[1px] rounded-xl">
                  <div className="bg-white px-6 py-8 rounded-xl flex flex-col gap-5 w-full h-full">
                    <div className="bg-whitebgOpacity rounded-lg h-[70px] w-[70px]">
                      <img
                        src="/icons/enginer-thinking.svg"
                        className="h-[34px] w-[34px] ml-[18px] mt-[18px]"
                      />
                    </div>

                    <h2 className="font-bold">Rebobinamento de motores</h2>
                    <p className="text-justify text-xs leading-4">
                      Temos profissionais especialistas no rebobinamento de
                      motores elétricos. Através dela é possível trocar toda a
                      bobinagem do motor, fazendo a mudança para fios de melhor
                      qualidade.
                    </p>
                    <button className="font-semibold w-[160px] h-[54px] bg-yellow rounded-lg">
                      <span className="align-middle">Saiba Mais</span>
                      <img
                        src="/icons/black-arrow-right.svg"
                        className="h-[24px] w-[24px] inline ml-2.5"
                      />
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue w-[320px] h-[364px] p-[1px] rounded-xl">
                  <div className="bg-white px-6 py-8 rounded-xl flex flex-col gap-5 w-full h-full">
                    <div className="bg-whitebgOpacity rounded-lg h-[70px] w-[70px]">
                      <img
                        src="/icons/homework.svg"
                        className="h-[34px] w-[34px] ml-[18px] mt-[18px]"
                      />
                    </div>

                    <h2 className="font-bold">Limpeza de poços artesianos</h2>
                    <p className="text-justify text-xs leading-4">
                      Somos especialistas em limpeza de poços artesianos
                      tubulares residenciais e empresariais, utilizamos
                      equipamentos de última linha.
                    </p>
                    <button className="font-semibold w-[160px] h-[54px] bg-yellow rounded-lg">
                      <span className="align-middle">Saiba Mais</span>
                      <img
                        src="/icons/black-arrow-right.svg"
                        className="h-[24px] w-[24px] inline ml-2.5"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Maps --> */}
          <section className="max-w-full w-mobile md:w-tablet lg:w-desktop">
            <div>
              <img src="/maps.png" className="w-full" />
            </div>
          </section>

          {/* <!-- Orçamentos --> */}
          <section className="max-w-full w-mobile md:w-tablet lg:w-desktop">
            <header className="mb-14 md:w-[475px] lg:w-[600px]">
              <h2 className="font-display text-xs md:text-base font-bold text-blue uppercase tracking-[0.3rem] pl-0.5 -mb-1.5">
                Orçamento
              </h2>
              <h1 className="font-display text-2xl md:text-3xl font-semibold">
                Solicite um orçamento
              </h1>
              <p className="text-xs md:text-base w-[290px] md:w-full">
                Nos envie o seu problema que iremos analisar e encontrar a
                melhor solução.
              </p>
            </header>

            <div className="flex items-end md:items-center pb-6 md:pb-0 pl-5 md:pl-12 lg:pl-16 text-whitebg bg-cover bg-center bg-[url('/banners/banner-orcamento-mobile.png')] md:bg-[url('/banners/banner-orcamento-tablet.png')] lg:bg-[url('/banners/banner-orcamento-desktop.png')] h-[425px] md:h-[296px] lg:h-[406px]">
              <div className="w-5/6 md:w-4/6 lg:w-1/2">
                <h3 className="font-bold lg:text-2xl mb-6">
                  Planeje quanto recurso será necessário para solucionar seu
                  problema.
                </h3>
                <ul className="text-sm mb-6 flex flex-col gap-2">
                  <li className="flex gap-2 font-medium items-center">
                    <img src="/icons/check.svg" className="h-[14px] w-[19px]" />
                    Previsão de entrega
                  </li>
                  <li className="flex gap-2 font-medium items-center">
                    <img src="/icons/check.svg" className="h-[14px] w-[19px]" />
                    Assistência técnica
                  </li>
                  <li className="flex gap-2 font-medium items-center">
                    <img src="/icons/check.svg" className="h-[14px] w-[19px]" />
                    Produtos de qualidade
                  </li>
                  <li className="flex gap-2 font-medium items-center">
                    <img src="/icons/check.svg" className="h-[14px] w-[19px]" />
                    Garantia
                  </li>
                </ul>
                <button className="text-sm lg:text-base px-6 py-2.5 ring-2 ring-whitebg ring-inset rounded-xl flex items-center gap-2 font-bold hover:bg-whitebg hover:text-blue transition duration-50 ease-linear">
                  Solicite um orçamento
                  <img src="/icons/angled-arrow.svg" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;

