// HomePage.tsx (Next.js, TailwindCSS, full marketing-focused layout)

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './home.css';

export default function HomePage() {
  const [language, setLanguage] = useState < 'en' | 'uk' > ('uk');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'uk' : 'en'));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900">
      {/* Language Switcher */}
      <div className="flex justify-end p-4">
        <button
          onClick={toggleLanguage}
          className="text-sm px-4 py-2 border rounded-md hover:bg-gray-100"
        >
          {language === 'en' ? 'Українська' : 'English'}
        </button>
      </div>

      {/* Hero Section */}
      <section className="text-center px-4 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          ✨ DreamNomad: {language === 'en' ? 'Your Global Guide to Freedom & Life Abroad' : 'Глобальний Гайд для Твого Життя-Мрії'}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          {language === 'en'
            ? 'DreamNomad isn’t just a guide. It’s your tool for freedom: to move, to grow, to experience the world from the inside.'
            : 'DreamNomad — це не просто гід. Це твій інструмент свободи: переїхати, спробувати нове життя, побачити світ зсередини.'}
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/register">
            <a className="px-6 py-3 text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg shadow-lg hover:opacity-90">
              {language === 'en' ? 'Get Access Now' : 'Отримати доступ'}
            </a>
          </Link>
          <Link href="#how-it-works">
            <a className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
              {language === 'en' ? 'How It Works' : 'Як це працює'}
            </a>
          </Link>
        </div>
      </section>

      {/* Core Idea */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">🧭 {language === 'en' ? 'Core Idea' : 'Основна ідея'}</h2>
          <p className="mb-4">
            {language === 'en'
              ? 'A universal guide to visiting and living in your Dream Country.'
              : 'Універсальний гайд, як відвідати та прожити в Країні Твоєї Мрії'}
          </p>
          <ul className="text-left space-y-3 text-lg">
            <li>• {language === 'en' ? 'Step-by-step self-discovery & country selection framework.' : 'Чіткий покроковий план, як зрозуміти себе і обрати країну.'}</li>
            <li>• {language === 'en' ? 'Verified contacts, links, tools, and agencies that work.' : 'База перевірених контактів, посилань, ресурсів, які реально працюють.'}</li>
            <li>• {language === 'en' ? 'Reusable in any country – again and again.' : 'Інструмент, який можна застосовувати в будь-якій країні — знову і знову.'}</li>
          </ul>
        </div>
      </section>

      {/* Dream Journey Plan Section */}
      <section id="how-it-works" className="bg-blue-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center">🧠 {language === 'en' ? 'Discovery Cycle Through Countries' : 'Цикл самовідкриття через країни'}</h2>
          <ol className="space-y-6 text-lg">
            <li><strong>0.</strong> {language === 'en' ? 'Honestly answer: what do I really want?' : 'Чесно відповісти: що я хочу?'}
              <ul className="ml-6 list-disc text-gray-700">
                <li>{language === 'en' ? 'Why am I going? Escape, grow, explore?' : 'Для чого я їду? Втекти, знайти, вирости, відчути?'}</li>
                <li>{language === 'en' ? 'City/nature, loud/quiet, solo/community?' : 'Який стиль життя я шукаю: місто/природа, шум/спокій, комʼюніті/усамітнення?'}</li>
              </ul>
            </li>
            <li><strong>1.</strong> {language === 'en' ? 'Research without rosy glasses' : 'Дослідити країну без рожевих окулярів'}
              <ul className="ml-6 list-disc text-gray-700">
                <li>{language === 'en' ? 'Minimal research: prices, visa, culture' : 'Мінімальний ресерч: ціни, віза, культура'}</li>
                <li>{language === 'en' ? 'Facts only — no expectations' : 'Без очікувань — лише факти й open mind'}</li>
              </ul>
            </li>
            <li><strong>2.</strong> {language === 'en' ? 'Make and commit to the decision' : 'Прийняти рішення і зафіксувати його'}
              <ul className="ml-6 list-disc text-gray-700">
                <li>{language === 'en' ? 'Buy ticket, start visa, plan budget' : 'Купити квитки, зробити візу, спланувати бюджет'}</li>
                <li>“Done is better than perfect”</li>
              </ul>
            </li>
            <li><strong>3.</strong> {language === 'en' ? 'Go meet your new reality' : 'Поїхати на зустріч своєму щастю'}
              <ul className="ml-6 list-disc text-gray-700">
                <li>{language === 'en' ? 'Experience it fully' : 'Відкрити себе в новій реальності'}</li>
                <li>{language === 'en' ? 'Stay in flow, not clinging to plans' : 'Бути в потоці, не чіплятись за плани'}</li>
              </ul>
            </li>
            <li><strong>4.</strong> {language === 'en' ? 'Check: does this place fit me?' : 'На місці розібратись — це моє?'}
              <ul className="ml-6 list-disc text-gray-700">
                <li>{language === 'en' ? 'Evaluate after 2 weeks / month' : 'Аналіз через 2 тижні/місяць: як відчувається?'}</li>
                <li>{language === 'en' ? 'What does it give or take?' : 'Що дає ця країна? Що забирає?'}</li>
              </ul>
            </li>
            <li><strong>5.</strong> {language === 'en' ? 'Repeat with a new country' : 'Повторити з новою країною'}</li>
          </ol>
        </div>
      </section>

      {/* Regions + Features section will stay below and be reused */}
    </main>
  );
}