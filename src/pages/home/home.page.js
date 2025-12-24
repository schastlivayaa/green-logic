import './home.styles.scss'
import { createHeader } from "@/components/header/header.component";
import { createHero } from "@/components/hero/hero.component";

export function renderHomePage(root) {
  root.append(createHeader(), createHero());
}