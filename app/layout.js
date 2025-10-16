import './globals.css';

export const metadata = {
  title: 'Asia Guide',
  description: 'Your comprehensive guide to Asia',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
