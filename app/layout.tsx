import "./globals.css";
import { Roboto, Comic_Neue } from "next/font/google";
import { EXAMPLE_PATH, CMS_NAME } from "@/lib/constants";

export const metadata = {
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
};

const roboto = Roboto({
  variable: "--font-roboto", 
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"]
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <section className="min-h-screen">
          <main>{children}</main>
        </section>
      </body>
    </html>
  );
}
