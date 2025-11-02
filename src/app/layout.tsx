import { Poppins, Kaisei_Tokumin, Roboto } from 'next/font/google';
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const kaiseiTokumin = Kaisei_Tokumin({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-kaisei',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

const header = (
  <header className="md:flex justify-center  w-full fixed bg-[#00000033] hidden py-5 px-30 top-0 z-50">
    <div className="max-w-[1440px] w-full">
      <h1 className="text-[22px] text-[#FFFFFF]">6037 Venture Partnership</h1>
    </div>
  </header>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className} ${kaiseiTokumin.className} ${roboto.className} overflow-x-hidden`}
    >
      <body cz-shortcut-listen="true">
        {header}
        {children}
      </body>
    </html>
  );
}
