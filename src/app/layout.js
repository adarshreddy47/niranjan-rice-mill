
import "./globals.css";

export const metadata = {
  title: "Niranjan Rice Mill | Adhireddy Rice Mill",
  description:
    "Niranjan Rice Mill, also known as Adhireddy Rice Mill, near Rayachoty, Andhra Pradesh. Explore our rice processing machinery, products, facilities and contact details.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
