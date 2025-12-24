import './about-us.styles.scss';
import { createElement } from '../../utils/create-element';

export function createAboutUs() {
  const aboutUs = createElement('section', { attrs: { id: 'about-us' } });
  const aboutUsWrapper = createElement('div', {
    className: 'about-us__wrapper',
  });
  aboutUs.append(aboutUsWrapper);

  const title = createElement('h2', {
    className: 'about-us__title',
    text: 'Зачем мы это делаем?',
  });

  const contentContainer = createElement('div', {
    className: 'about-us__content',
  });

  const ecoInterestValue = createElement('span', {
    className: 'about-us__percent',
    text: '65%',
  });
  const ecoActionValue = createElement('span', {
    className: 'about-us__percent',
    text: '15%',
  });

  const statsText = createElement('p', { className: 'about-us__text' });

  statsText.append(
    ecoInterestValue,
    document.createTextNode(' россиян хотят жить экологичнее, но только '),
    ecoActionValue,
    document.createTextNode(' действуют систематически.')
  );

  const descriptionText = createElement('p', {
    className: 'about-us__text',
    text: `Мы создаем инструмент, который превращает полезные привычки в игру.  
          Наша цель — сделать заботу о планете простой, понятной и по-настоящему увлекательной.`,
  });

  contentContainer.append(statsText, descriptionText);

  aboutUsWrapper.append(title, contentContainer);

  return aboutUs;
}
