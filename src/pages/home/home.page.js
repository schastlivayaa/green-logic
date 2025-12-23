import './home.styles.scss'
import { createHeader } from "@/components/header/header.component";

export function renderHomePage(root) {
  root.append(createHeader());
}