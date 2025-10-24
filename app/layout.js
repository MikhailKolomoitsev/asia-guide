import './globals.css';
import './home.css';
import ScrollHandler from './components/ScrollHandler';

export const metadata = {
  title: 'Asia Guide',
  description: 'Your comprehensive guide to Asia',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ScrollHandler />
        {children}
      </body>
    </html>
  );
}
