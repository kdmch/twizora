import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: '青空文庫をTwitterっぽく表示するやつ',
  description: '青空文庫の作品をTwitterのスレッド風に表示する非公式ビューア。ツイ廃向け。',
  manifest: '/manifest.json',
  icons: '/icon-192.png',
  openGraph: {
    title: '青空文庫をTwitterっぽく表示するやつ',
    description: '青空文庫の作品をTwitterのスレッド風に表示する非公式ビューア。ツイ廃向け。',
    url: 'https://twizora.mitori.me/',
    siteName: '青空文庫をTwitterっぽく表示するやつ',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/pw/AP1GczOgYDPBofbDogGE0NXKrpiO8vlC64WNQmoPN4EuDF-OZpkudiPnorfEGdSZBxz1g2Fith4_ArOEAAHWJegfkfX102MyYyqF9Ntfjt7my-xT3cgs_4VtylpgB02MfKDgYaAG_SoszlKmlYwiVbpALkRn=w1200-h630-s-no',
        width: 1200,
        height: 630,
        alt: 'twizora OGP',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '青空文庫をTwitterっぽく表示するやつ',
    description: '青空文庫の作品をTwitterのスレッド風に表示する非公式ビューア。ツイ廃向け。',
    images: ['https://lh3.googleusercontent.com/pw/AP1GczOgYDPBofbDogGE0NXKrpiO8vlC64WNQmoPN4EuDF-OZpkudiPnorfEGdSZBxz1g2Fith4_ArOEAAHWJegfkfX102MyYyqF9Ntfjt7my-xT3cgs_4VtylpgB02MfKDgYaAG_SoszlKmlYwiVbpALkRn=w1200-h630-s-no'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  )
}
