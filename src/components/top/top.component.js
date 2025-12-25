import './top.styles.scss';
import { createElement } from '../../utils/create-element';

export function createTop() {
  const top = createElement('section', { attrs: { id: 'top' } });
  const wrapper = createElement('div', { className: 'top__wrapper' });
  top.append(wrapper);

  const title = createElement('h2', {
    className: 'top__title',
    text: 'Топ защитников планеты',
  });

  const table = createElement('table', { className: 'top__table' });
  const thead = createElement('thead');
  const headerRow = createElement('tr');
  thead.append(headerRow);

  ['Место', 'Имя', 'Баллы'].forEach((text) => {
    const th = createElement('th', { text });
    headerRow.append(th);
  });

  const tbody = createElement('tbody');
  for (let i = 0; i < 3; i += 1) {
    const row = createElement('tr');
    [i + 1, '?', '?'].forEach((text) => {
      const td = createElement('td', { text });
      row.append(td);
    });
    tbody.append(row);
  }

  table.append(thead, tbody);

  wrapper.append(title, table);

  return top;
}
