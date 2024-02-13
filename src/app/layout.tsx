import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import './globals.scss';
import './grid.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Thinkmay',
    description: 'Thinkmay Landingp Page'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.className}>
            <body id="root">
                <Header />
                {children}
                <Footer></Footer>
            </body>
        </html>
    );
}
