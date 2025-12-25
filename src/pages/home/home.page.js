import { createHeader } from '@/components/header/header.component';
import { createHero } from '@/components/hero/hero.component';
import { createAboutUs } from '@/components/about-us/about-us.component';
import { createSlider } from '../../components/slider/slider.component';
import { createFooter } from '../../components/footer/footer.component';
import { createFaq } from '../../components/faq/faq.component';

export function renderHomePage(root) {
  root.append(
    createHeader(),
    createHero(),
    createAboutUs(),
    createSlider(),
    createFaq(),
    createFooter()
  );
}
