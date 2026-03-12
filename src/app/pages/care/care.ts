import {Component} from '@angular/core';
import {Section} from '../../components/section/section';
import {TranslationService} from '../../services/translation/translation.service';
import {Panel} from 'primeng/panel';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from 'primeng/accordion';

@Component({
  selector: 'app-care',
  imports: [Section, Panel, Accordion, AccordionPanel, AccordionHeader, AccordionContent],
  templateUrl: './care.html',
})
export class Care {
  constructor(public t: TranslationService) {}

  getFaqs(key: string): { question: string; answer: string[] }[] {
    const lines = this.t.translateArray(key);
    const faqs: { question: string; answer: string[] }[] = [];
    let current: { question: string; answer: string[] } | null = null;

    for (const line of lines) {
      if (line.endsWith('?')) {
        if (current) faqs.push(current);
        current = { question: line, answer: [] };
      } else if (current) {
        current.answer.push(line);
      }
    }

    if (current) faqs.push(current);
    return faqs;
  }
}
