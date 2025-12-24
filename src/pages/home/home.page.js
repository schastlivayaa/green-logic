import './home.styles.scss';
import { createHeader } from '@/components/header/header.component';
import { createHero } from '@/components/hero/hero.component';
import { createAboutUs } from '@/components/about-us/about-us.component';
import { createSlider } from '../../components/slider/slider.component';

export function renderHomePage(root) {
  root.append(createHeader(), createHero(), createAboutUs(), createSlider());
}
