import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MV Bombas - Home',
  description: 'Pãgina inicial do site institucional',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-white max-w-full flex flex-col items-center text-black">
        {/* <!-- Cabeçalho --> */}
        <header className="flex flex-col justify-center items-center md:items-start lg:items-center pt-10 pb-4 max-w-full w-mobile md:w-tablet lg:w-desktop">
          {/* <!-- Primeira seção --> */}
          <div className="flex flex-col w-full flex-wrap md:flex-row lg:flex-nowrap justify-between items-center mb-6 lg:mb-10">
            {/* <!-- Logo --> */}
            <a href="/">
              <img src="/logo.svg" className="w-64 h-7" />
            </a>

            {/* <!-- Barra de pesquisa --> */}
            <div className="w-full order-2 text-center mt-8 lg:mt-0 lg:order-1 lg:w-auto">
              <form className="inline-block text-center lg:flex lg:items-center">
                <input
                  type="text"
                  placeholder="O que você deseja..."
                  className="px-3 py-2.5 border-2 border-r-0 border-whitebg align-middle w-60 text-xs placeholder:text-graytext placeholder:text-xs focus:border-whitebg focus:border-transparent focus:ring-0"
                />
                <button
                  type="submit"
                  className="w-10 h-10 align-middle bg-whitebg"
                >
                  <img src="/icons/loupe.svg" className="w-5 h-5 m-auto" />
                </button>
              </form>
            </div>

            {/* <!-- Contatos da empresa --> */}
            <address className="mt-8 md:mt-0 font-medium text-sm not-italic text-center lg:order-2">
              <div className="flex flex-row mb-3">
                <div className="mr-4">
                  <img
                    src="/icons/phone.svg"
                    className="w-3.5 h-3.5 inline mr-1"
                  />
                  <a href="tel:+558233166531" className="align-middle">
                    (82) 3316-6531
                  </a>
                </div>
                <img src="/icons/divider.svg" />
                <div className="text-center ml-4">
                  <img
                    src="/icons/whatsapp.svg"
                    className="w-4 h-4 inline mr-1"
                  />
                  <a href="tel:+5582993165234" className="align-middle">
                    (82) 9 9316-5234
                  </a>
                </div>
              </div>

              <div>
                <img src="/icons/target.svg" className="w-3 h-4 inline mr-2" />
                <a href="mail:" className="align-middle">
                  Av. Muniz Falcão, 2** B Maceió - AL
                </a>
              </div>
              <div></div>
            </address>
          </div>

          {/* <!-- Segunda seção --> */}
          {/* <!-- Menu de navegação tablet e smartphone --> */}
          <div className="lg:hidden">
            <button className="bg-blue w-menu text-left inline box-border px-4 py-3">
              <img src="/icons/menu.svg" className="h-5 mr-6 inline" />
              <span className="text-whitebg font-semibold text-base align-middle">
                Menu
              </span>
            </button>

            {/* <!-- Menu --> */}
            <div className="bg-whitebg px-5 py-8">
              <nav className="flex flex-col justify-center gap-8">
                <ol className="flex flex-col gap-7 mr-4 font-bold text-sm uppercase">
                  <li className="text-blue cursor-pointer">
                    <a href="/">Página Inicial</a>
                  </li>
                  <li className="flex items-center cursor-pointer">
                    <a href="#" className="mr-2">
                      Produtos
                    </a>
                    <img src="/icons/down-arrow.svg" />
                  </li>
                  <li className="flex items-center cursor-pointer">
                    <a href="#" className="mr-2">
                      Serviços
                    </a>
                    <img src="/icons/down-arrow.svg" className="rotate-180" />
                  </li>
                  {/* <!-- Subnav --> */}
                  <li className="ml-4">
                    <ol className="flex flex-col gap-7">
                      <li>Serviço 1</li>
                      <li>Serviço 2</li>
                      <li>Serviço 3</li>
                    </ol>
                  </li>
                  <li className="cursor-pointer">
                    <a href="#">Assistência Técnica</a>
                  </li>
                  <li className="cursor-pointer">
                    <a href="/quem-somos">Quem somos</a>
                  </li>
                  <li className="cursor-pointer">
                    <a target="#">Contate-nos</a>
                  </li>
                </ol>
                <img src="/toggle.png" className="h-[32px] w-[104px]" />
              </nav>
            </div>
          </div>

          {/* <!-- Barra de navegação desktop --> */}
          <nav className="hidden lg:flex justify-center items-center">
            <ol className="flex flex-row mr-4 font-bold text-sm uppercase">
              <li className="mr-6 text-blue cursor-pointer">
                <a href="/">Página Inicial</a>
              </li>
              <li className="flex items-center mr-6 cursor-pointer">
                <a href="#" className="mr-2">
                  Produtos
                </a>
                <img src="/icons/down-arrow.svg" />
              </li>
              <li className="flex items-center mr-6 cursor-pointer">
                <a href="#" className="mr-2">
                  Serviços
                </a>
                <img src="/icons/down-arrow.svg" />
              </li>
              <li className="mr-6 cursor-pointer">
                <a href="#">Assistência Técnica</a>
              </li>
              <li className="mr-6 cursor-pointer">
                <a href="/quem-somos">Quem somos</a>
              </li>
              <li className="mr-6 cursor-pointer">
                <a href="#">Contate-nos</a>
              </li>
            </ol>
            <img src="/toggle.png" />
          </nav>
        </header>

        {/* Recebe o componente filho */}
        {children}

        {/* <!-- Rodapé --> */}
        <footer className="mt-12 border-t border-text m-auto pt-14 pb-20 md:px-8 lg:px-0 flex flex-row flex-wrap gap-10 lg:justify-between items-start max-w-full w-mobile md:w-tablet lg:w-desktop">
          <div>
            <a href="/">
              <img src="/logo.svg" className="w-64 h-7" />
            </a>
            <address className="mt-8 font-medium text-sm not-italic lg:order-2">
              <div className="flex flex-row mb-3">
                <div className="mr-4">
                  <img
                    src="/icons/phone.svg"
                    className="w-3.5 h-3.5 inline mr-1"
                  />
                  <a href="tel:+558233166531" className="align-middle">
                    (82) 3316-6531
                  </a>
                </div>
                <img src="/icons/divider.svg" />
                <div className="text-start ml-4">
                  <img
                    src="/icons/whatsapp.svg"
                    className="w-4 h-4 inline mr-1"
                  />
                  <a href="tel:+5582993165234" className="align-middle">
                    (82) 9 9316-5234
                  </a>
                </div>
              </div>

              <div>
                <img src="/icons/target.svg" className="w-3 h-4 inline mr-2" />
                <a className="align-middle">
                  Av. Muniz Falcão, 2** B Maceió - AL
                </a>
              </div>
            </address>
          </div>
          <div>
            <span className="uppercase font-bold block pb-4">Produtos</span>
            <ul className="flex flex-col gap-3">
              <li>
                <a className="font-medium text-sm cursor-pointer">
                  Link categoria 1
                </a>
              </li>
              <li>
                <a className="font-medium text-sm cursor-pointer">
                  Link categoria 2
                </a>
              </li>
              <li>
                <a className="font-medium text-sm cursor-pointer">
                  Link categoria 3
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className="uppercase font-bold block pb-4">Serviços</span>
            <ul className="flex flex-col gap-3">
              <li>
                <a className="font-medium text-sm cursor-pointer">
                  Link categoria 1
                </a>
              </li>
              <li>
                <a className="font-medium text-sm cursor-pointer">
                  Link categoria 2
                </a>
              </li>
              <li>
                <a className="font-medium text-sm cursor-pointer">
                  Link categoria 3
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className="uppercase font-bold block pb-4">
              Institucional
            </span>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/" className="font-medium text-sm cursor-pointer">
                  Página inicial
                </a>
              </li>
              <li>
                <a className="font-medium text-sm cursor-pointer">
                  Assistência técnica
                </a>
              </li>
              <li>
                <a
                  href="/quem-somos"
                  className="font-medium text-sm cursor-pointer"
                >
                  Quem somos
                </a>
              </li>
              <li>
                <a className="font-medium text-sm cursor-pointer">Orçamentos</a>
              </li>
            </ul>
          </div>
          <div>
            <span className="uppercase font-bold block pb-4">
              Redes Sociais
            </span>
            <ul className="flex gap-2">
              <li>
                <a className="font-medium text-sm cursor-pointer">
                  <img src="/icons/instagram.svg" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}

