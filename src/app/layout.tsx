import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Drazen Manojlovic - Software Engineer & Frontend Developer Portfolio",
    template: "%s | Drazen Manojlovic"
  },
  description: "Software Engineer & Frontend Developer specializing in React, Next.js, TypeScript, and Node.js. Building scalable web applications with modern technologies. View my portfolio projects and get in touch.",
  keywords: [
    "Drazen Manojlovic",
    "Software Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Full Stack Developer",
    "Portfolio",
    "Web Development",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "SQL"
  ],
  authors: [{ name: "Drazen Manojlovic" }],
  creator: "Drazen Manojlovic",
  publisher: "Drazen Manojlovic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Drazen Manojlovic - Software Engineer & Frontend Developer",
    description: "Software Engineer & Frontend Developer specializing in React, Next.js, TypeScript, and Node.js. Building scalable web applications with modern technologies.",
    siteName: "Drazen Manojlovic Portfolio",
    images: [
      {
        url: `${siteUrl}/images/japortfolio.jpeg`,
        width: 1200,
        height: 630,
        alt: "Drazen Manojlovic - Software Engineer & Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drazen Manojlovic - Software Engineer & Frontend Developer",
    description: "Software Engineer & Frontend Developer specializing in React, Next.js, TypeScript, and Node.js.",
    images: [`${siteUrl}/images/japortfolio.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    // Add your verification codes when you get them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Drazen Manojlovic",
              jobTitle: "Software Engineer & Frontend Developer",
              description: "Software Engineer & Frontend Developer specializing in React, Next.js, TypeScript, and Node.js. Building scalable web applications with modern technologies.",
              url: siteUrl,
              image: `${siteUrl}/images/japortfolio.jpeg`,
              sameAs: [
                "https://github.com/SpeedyBGD",
                // Add more social media profiles here
                // "https://linkedin.com/in/yourprofile",
                // "https://twitter.com/yourhandle",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Express",
                "MongoDB",
                "SQL",
                "Frontend Development",
                "Backend Development",
                "Web Development"
              ],
              alumniOf: {
                "@type": "Organization",
                name: "Civil Engineering (22 years experience)"
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Drazen Manojlovic Portfolio",
              url: siteUrl,
              description: "Software Engineer & Frontend Developer Portfolio",
              author: {
                "@type": "Person",
                name: "Drazen Manojlovic",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
