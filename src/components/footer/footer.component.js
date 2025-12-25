import './footer.styles.scss';
import { createElement } from '../../utils/create-element';

export function createFooter() {
  const footer = createElement('footer', { className: 'footer' });
  const wrapper = createElement('div', { className: 'footer__wrapper' });
  footer.append(wrapper);

  const contactContainer = createElement('div', { className: 'contacts' });

  const socialMedia = createElement('div', { className: 'contacts__media' });

  const email = createElement('a', {
    className: 'contacts__link contacts__link_email',
    text: 'contact@greenlogic.ru',
    attrs: { href: 'mailto:contact@greenlogic.ru' },
  });
  const phone = createElement('a', {
    className: 'contacts__link',
    text: '+7 (XXX) XXX-XX-XX',
    attrs: { href: 'tel:+7 (XXX) XXX-XX-XX' },
  });

  socialMedia.append(email, phone);

  const socialLinks = createElement('div', { className: 'contacts__links' });

  const telegram = createElement('a', {
    className: 'contacts__link',
    text: 'telegram-канал',
    attrs: { href: '/' },
  });
  const vk = createElement('a', {
    className: 'contacts__link',
    text: 'ВКонтакте',
    attrs: { href: '/' },
  });
  const yt = createElement('a', {
    className: 'contacts__link',
    text: 'YouTube',
    attrs: { href: '/' },
  });

  socialLinks.append(telegram, vk, yt);
  contactContainer.append(socialMedia, socialLinks);

  const rights = createElement('div', { className: 'footer__rights' });
  const rightsText = createElement('p', {
    className: 'footer__rights__text',
    text: '2025 GreenLogic. Все права защищены.',
  });
  rights.append(rightsText);

  wrapper.append(contactContainer);
  footer.append(rights);

  return footer;
}
