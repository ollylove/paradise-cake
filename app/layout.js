import { Miss_Fajardose, Akaya_Kanadaka } from 'next/font/google';
import './style/style.css'

const font = Miss_Fajardose({
  subsets: ['latin'],
  weight: '400'
})

const font2 = Akaya_Kanadaka({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: "Paradise Cake",
  description: "Treat yourself any day, enjoy at any time!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
