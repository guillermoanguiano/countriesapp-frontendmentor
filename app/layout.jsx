import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ColorMode from "@/theme/colorMode";
import ContainerNav from "@/components/Container";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Countries",
  description: "Paises",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ColorMode>
            <ContainerNav>
              <Container>{children}</Container>
            </ContainerNav>
          </ColorMode>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
