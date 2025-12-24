import './hero.styles.scss';
import { createElement } from '../../utils/create-element';

export function createHero() {
  const hero = createElement('section', { attrs: { id: 'hero' } });
  const heroWrapper = createElement('div', { className: 'hero__wrapper' });
  hero.append(heroWrapper);

  const textContainer = createElement('div', { className: 'hero__container' });
  const title = createElement('h1', {
    className: 'hero__title',
    text: 'Помоги планете — получи питомца',
  });
  const content = createElement('p', {
    className: 'hero__content',
    text: `GreenLogic превращает заботу о природе в увлекательную игру. Сортируй мусор, развивай виртуального друга
    и меняй мир к лучшему.`,
  });
  const btn = createElement('button', {
    className: 'button button_accent',
    text: 'Присоединиться к сообществу',
  });
  textContainer.append(title, content, btn);

  const imgContainer = createElement('div', { className: 'hero__image' });
  const img = createElement('img', {
    attrs: { src: '/images/robot.svg', alt: 'Robot' },
  });
  imgContainer.append(img);

  heroWrapper.append(textContainer, imgContainer);

  return hero;
}
