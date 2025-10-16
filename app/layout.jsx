import "@/styles/globals.scss";

export const metadata = { title: "MinuBox" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
