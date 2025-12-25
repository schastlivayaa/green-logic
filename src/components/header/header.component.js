import './header.styles.scss';
import { createElement } from '../../utils/create-element';
import logo from '/images/logo.svg';

export function createHeader() {
  const header = createElement('header', { className: 'header' });
  const headerWrapper = createElement('div', { className: 'header__wrapper' });
  header.append(headerWrapper);

  const logoLink = createElement('a', {
    className: 'header__logo',
    attrs: { href: '/' },
  });
  const logoImg = createElement('img', {
    attrs: { src: logo, alt: 'GreenLogic logo' },
  });
  logoLink.append(logoImg);

  const nav = createElement('nav', { className: 'header__nav' });
  const ul = createElement('ul', { className: 'navigation' });

  const navItems = [
    {
      text: 'Для инвесторов',
      href: '/',
    },
    {
      text: 'FAQ',
      href: '#faq',
    }
  ];
  navItems.forEach(({ text, href }) => {
    const li = createElement('li', { className: 'navigation__item' });
    const link = createElement('a', { className: 'navigation__link', attrs: { href }, text });
    li.append(link);
    ul.append(li);
  });

  nav.append(ul);
  headerWrapper.append(logoLink, nav);

  return header;
}
