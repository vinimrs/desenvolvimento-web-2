import type { Metadata } from 'next';
import './globals.css';
import Cabecalho from './_components/Cabecalho';

export const metadata: Metadata = {
  title: 'MV Bombas - Home',
  description: 'Pãgina inicial do site institucional',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-white max-w-full flex flex-col items-center text-black">
        {/* <!-- Cabeçalho --> */}
        <Cabecalho />

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

