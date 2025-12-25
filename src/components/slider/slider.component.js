import './slider.styles.scss';
import { createElement } from '../../utils/create-element';
import robot1 from '@/assets/images/robot1.png';
import robot2 from '@/assets/images/robot2.png';
import robot3 from '@/assets/images/robot3.png';

export function createSlider() {
  let currentSlide = 0;

  const slidesData = [
    {
      title: 'СОБИРАЙ',
      text: 'Не выбрасывай пластиковые крышечки. Собирай их дома, в школе или на работе.',
      imgSrc: robot1,
      imgAlt: 'Пример работы приложения',
    },
    {
      title: 'СДАВАЙ',
      text: 'Отнеси собранные крышки в специальный пункт приёма наших партнёров и отсканируй QR-код.',
      imgSrc: robot2,
      imgAlt: 'Пример работы приложения',
    },
    {
      title: 'ПОЛУЧАЙ',
      text: 'Получай игровую валюту Экоины и трать их на прокачку и развитие своего эко-питомца. Сдал больше — получил больше!',
      imgSrc: robot3,
      imgAlt: 'Пример работы приложения',
    },
  ];

  // ----------------------- DOM -----------------------
  const slider = createElement('section', { attrs: { id: 'slider' } });
  const wrapper = createElement('div', { className: 'slider__wrapper' });
  slider.append(wrapper);

  const sectionTitle = createElement('h2', {
    className: 'slider__title',
    text: 'Стань эко-героем за 3 шага',
  });

  const viewport = createElement('div', { className: 'slider__viewport' });
  const track = createElement('div', { className: 'slider__track' });
  viewport.append(track);

  wrapper.append(sectionTitle, viewport);

  // создание слайдов
  slidesData.forEach((data) => {
    const slide = createElement('div', { className: 'slider__slide' });
    const slideBg = createElement('div', { className: 'slide__bg' });

    const content = createElement('div', { className: 'slide__content' });
    const title = createElement('h3', {
      className: 'slide__title',
      text: data.title,
    });
    const text = createElement('p', {
      className: 'slide__text',
      text: data.text,
    });
    content.append(title, text);
    slideBg.append(content);

    const imageBlock = createElement('div', { className: 'slide__image' });
    const image = createElement('img', {
      attrs: { src: data.imgSrc, alt: data.imgAlt },
    });
    imageBlock.append(image);

    slide.append(slideBg, imageBlock);
    track.append(slide);
  });

  // кнопки навигации
  const btnContainer = createElement('div', { className: 'slider__buttons' });
  const btnPrev = createElement('button', {
    className: 'button button_main',
    text: 'Назад',
  });
  const btnNext = createElement('button', {
    className: 'button button_accent',
    text: 'Далее',
  });
  btnContainer.append(btnPrev, btnNext);
  wrapper.append(btnContainer);

  // дот-навигация
  const dotsContainer = createElement('div', { className: 'slider__dots' });
  const dots = slidesData.map((_, idx) => {
    const dot = createElement('span', {
      className: idx === 0 ? 'slider__dot slider__dot_active' : 'slider__dot',
    });
    dotsContainer.append(dot);
    return dot;
  });
  wrapper.append(dotsContainer);

  // ---------------------- Функцонал ----------------------
  function showSlide(index) {
    if (index < 0) index = slidesData.length - 1;
    if (index >= slidesData.length) index = 0;

    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot) => dot.classList.remove('slider__dot_active'));
    dots[index].classList.add('slider__dot_active');

    currentSlide = index;
  }

  btnPrev.addEventListener('click', () => showSlide(currentSlide - 1));
  btnNext.addEventListener('click', () => showSlide(currentSlide + 1));
  dots.forEach((dot, idx) =>
    dot.addEventListener('click', () => showSlide(idx))
  );

  showSlide(0);

  return slider;
}
