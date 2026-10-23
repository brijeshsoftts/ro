import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqs } from "../public.mock";

import { SectionHeader } from "./SectionHeader";

export function FAQSection() {
  return (
    <div className="bg-muted">
      <section className="container mx-auto max-w-5xl px-4 py-18 sm:px-6">
        <SectionHeader title="FAQS" description="Questions? Look here." />

        <Accordion className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              className="group overflow-hidden rounded-2xl border-none bg-card shadow-sm transition-colors duration-300 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground"
              key="{index}"
              value={`item-${index}`}
            >
              <AccordionTrigger
                className={`[&">svg]:hidden flex items-center justify-between px-6 py-5 font-heading text-lg font-semibold text-foreground group-data-[state=open]:text-primary-foreground hover:no-underline`}
              >
                <span className="text-left">{faq.question}</span>
                <div className="ml-4 shrink-0"></div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-0 pb-6">
                <div className="border-t border-primary-foreground/20 pt-4 text-base leading-relaxed">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
