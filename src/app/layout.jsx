import "./globals.css";

export const metadata = {
  title: "Arya Kumar Shastree",
  description: "Full Stack Developer Portfolio",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}