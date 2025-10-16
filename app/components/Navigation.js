'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from '../i18n/client';

const Navigation = ({ lang }) => {
  const { t, i18n } = useTranslation(lang);
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (newLang) => {
    const currentPath = pathname.split('/').slice(2).join('/') || '';
    router.push(`/${newLang}/${currentPath}`);
  };

  const isActive = (path) => {
    const fullPath = `/${lang}${path}`;
    return pathname === fullPath ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href={`/${lang}`} className="nav-logo">
          🌴 Asia Explorer
        </Link>

        <div className="nav-menu">
          <Link href={`/${lang}`} className={isActive('/')}>
            {t('navigation.home')}
          </Link>
          <Link href={`/${lang}/thailand`} className={isActive('/thailand')}>
            {t('navigation.thailand')}
          </Link>
          <Link href={`/${lang}/vietnam`} className={isActive('/vietnam')}>
            {t('navigation.vietnam')}
          </Link>
          <Link href={`/${lang}/bali`} className={isActive('/bali')}>
            {t('navigation.bali')}
          </Link>
          <Link href={`/${lang}/kuala-lumpur`} className={isActive('/kuala-lumpur')}>
            {t('navigation.kualaLumpur')}
          </Link>
        </div>

        <div className="language-switcher">
          <span>{t('navigation.language')}: </span>
          <button
            onClick={() => changeLanguage('en')}
            className={lang === 'en' ? 'lang-btn active' : 'lang-btn'}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('uk')}
            className={lang === 'uk' ? 'lang-btn active' : 'lang-btn'}
          >
            УК
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
