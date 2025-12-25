import './faq.styles.scss';
import { createElement } from '../../utils/create-element';

export function createFaq() {
  const faqData = [
    {
      question: 'Где и как сдавать крышки?',
      answer: `Открой в приложении карту «Эко-карта» (иконка с меткой на главном экране).
      Ты увидишь все партнёрские пункты приёма рядом с тобой — это могут быть специальные 
      фандоматы, эко-точки в университетах или магазинах-партнёрах. Приди и сдай крышки.
      На каждом нашем пункте есть уникальный QR-код для подтверждения сдачи.`,
    },
    {
      question: 'Можно ли сдать не только крышки, но и другое сырьё?',
      answer: `Сейчас мы фокусируемся на пластиковых крышечках по нескольким причинам:
      их легко собирать и хранить, они на 100% перерабатываются, а наши партнёры 
      (например, фонд «Крышечки ДоброТЫ») гарантируют, что средства от их переработки 
      идут на помощь. Это позволяет нам создавать простой и понятный игровой процесс.
      Мы рассматриваем идею с другими видами вторсырья для будущих обновлений.`,
    },
    {
      question: 'Что будет с питомцем, если я его забуду?',
      answer: `Если ты долго не заходишь в игру питомец станет грустным и вялым,
      его базовые показатели (сытость, настроение) упадут. Чтобы вернуть его в бодрое 
      состояние, потребуется немного больше внимания и заботы (покормить, поиграть).
      В крайнем случае, если не заходить очень долго, питомец может «уйти в лес» 
      (исчезнуть с главного экрана). Но его всегда можно вернуть, выполнив 
      специальное тёплое задание (например, сдать небольшую порцию крышек), 
      что символизирует твоё возвращение к заботе о нём и планете.`,
    },
    {
      question: 'Можно ли играть без крышек?',
      answer: `Да, играть можно и без крышек! Мы даём три пути получения игровой валюты (Экоинов):
      1. «Зелёный» путь (самый эффективный): Сдача крышек. 1 крышка = 10 Экоинов.
      2. Путь «Времени»: Просмотр рекламы. За один ролик ты получишь 2 Экоина.
      3. Путь «Удобства»: Покупка Экоинов за донат.
      Будем честны: если ты хочешь быстро прокачивать питомца, открывать редкие предметы 
      и участвовать в топовых рейтингах, то только рекламы будет недостаточно. Просмотр 
      рекламы — это хорошая поддержка на старте или способ докупить немного валюты, но 
      основой прогресса мы задумывали именно реальное действие.
      Наша философия: Игра должна вознаграждать реальную пользу. Поэтому «зелёный» 
      путь — самый выгодный. Но выбор всегда за тобой!`,
    },
  ];

  const faq = createElement('section', { attrs: { id: 'faq' } });
  const wrapper = createElement('div', { className: 'faq__wrapper' });
  faq.append(wrapper);

  const title = createElement('h2', {
    className: 'faq__title',
    text: 'FAQ',
  });
  wrapper.append(title);

  faqData.forEach(({ question, answer }) => {
    const details = createElement('details', { className: 'faq__item' });

    const summary = createElement('summary', { className: 'faq__question' });
    const summaryText = createElement('span', {
      className: 'faq__question__text',
      text: question,
    });
    const summaryIcon = createElement('span', {
      className: 'faq__question__icon',
    });
    summary.append(summaryText, summaryIcon);

    const answerEl = createElement('p', {
      className: 'faq__answer',
      text: answer,
    });

    details.append(summary, answerEl);
    wrapper.append(details);
  });

  wrapper.addEventListener(
    'toggle',
    (event) => {
      if (event.target.tagName !== 'DETAILS') return;

      if (event.target.open) {
        wrapper.querySelectorAll('details[open]').forEach((details) => {
          if (details !== event.target) details.removeAttribute('open');
        });
      }
    },
    true
  );

  return faq;
}
