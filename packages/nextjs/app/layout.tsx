import "@rainbow-me/rainbowkit/styles.css";
import { Metadata } from "next";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import "~~/styles/globals.css";
import Menu from "~~/components/Menu";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : `http://localhost:${process.env.PORT}`;
const imageUrl = `${baseUrl}/thumbnail.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Alimon",
    template: "%s | Scaffold-ETH 2",
  },
  description: "Built with 🏗 Scaffold-ETH 2",
  openGraph: {
    title: {
      default: "Scaffold-ETH 2 App",
      template: "%s | Scaffold-ETH 2",
    },
    description: "Built with 🏗 Scaffold-ETH 2",
    images: [
      {
        url: imageUrl,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [imageUrl],
    title: {
      default: "Scaffold-ETH 2",
      template: "%s | Scaffold-ETH 2",
    },
    description: "Built with 🏗 Scaffold-ETH 2",
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "32x32", type: "image/png" }],
  },
};



const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <style>
          {`
            @font-face {
              font-family: 'ChakraPetchRegular';
              src: url('../fonts/ChakraPetch-Regular.ttf') format('truetype'); /* Path to regular font file */
              font-weight: normal;
            }
  
            @font-face {
              font-family: 'ChakraPetchMedium';
              src: url('../fonts/ChakraPetch-Medium.ttf') format('truetype'); /* Path to regular font file */
              font-weight: 300;
            }
  
            @font-face {
              font-family: 'ChakraPetchBold';
              src: url('../fonts/ChakraPetch-Bold.ttf') format('truetype'); /* Path to bold font file */
              font-weight: bold; /* Specify the font weight */
            }
  
            @font-face {
              font-family: 'ChakraPetchSemiBold';
              src: url('../fonts/ChakraPetch-SemiBold.ttf') format('truetype'); /* Path to italic font file */
              font-style: 500; /* Specify the font style */
            }
  
            @font-face {
              font-family: 'ChakraPetchLight';
              src: url('../fonts/ChakraPetch-Light.ttf') format('truetype'); /* Path to italic font file */
              font-style: 200; /* Specify the font style */
            }
          `}
        </style>
      </head>
      <body>
        <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
