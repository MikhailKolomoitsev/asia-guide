export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'uk' }];
}

export default function LangLayout({ children, params }) {
  return children;
}
