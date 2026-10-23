import { MessageSquare, Phone } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    question: "What time is check-in and check-out?",
    answer:
      "Standard check-in time is 3:00 PM, and check-out is at 11:00 AM. Early check-in or late check-out can be requested and is subject to availability.",
  },
  {
    question: "What is the hotel's cancellation policy?",
    answer:
      "Our standard cancellation policy allows you to cancel your reservation up to 48 hours prior to arrival without penalty. Late cancellations may incur a fee equivalent to one night's stay.",
  },
  {
    question: "Does the hotel have on-site restaurants?",
    answer:
      "Yes, we have three on-site dining options ranging from casual cafe fare to fine dining, all featuring locally sourced ingredients.",
  },
  {
    question: "What types of rooms are available?",
    answer:
      "We offer a variety of rooms including standard guest rooms, deluxe suites with city views, and premium executive suites with separate living areas.",
  },
  {
    question: "Is parking available at the hotel?",
    answer:
      "Yes, we offer both secure underground self-parking and 24/7 valet service for an additional daily fee.",
  },
  {
    question: "Does the hotel have event or meeting spaces?",
    answer:
      "Absolutely. We have over 10,000 square feet of flexible meeting space, including a grand ballroom and intimate boardrooms equipped with modern AV technology.",
  },
];

export function FAQSection() {
  return (
    <div className="bg-muted">
      <section className="container mx-auto max-w-5xl px-4 py-18 sm:px-6">
        <SectionHeader title="FAQS" description="Questions? Look here." />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-8">
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
          </div>

          {/* Right Column: Support Cards */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            {/* Contact Card */}
            <div className="flex flex-col items-center rounded-3xl bg-primary p-10 text-center shadow-md">
              {/* Custom dual-bubble icon representation */}
              <div className="relative mb-6">
                <div className="relative z-10 rounded-full bg-secondary p-4 text-secondary-foreground">
                  <MessageSquare className="h-8 w-8 fill-current" />
                </div>
                <div className="absolute -right-2 -bottom-2 z-0 rounded-full bg-white p-4">
                  <MessageSquare className="h-8 w-8 fill-current text-white" />
                </div>
              </div>

              <h3 className="mb-3 font-heading text-2xl font-bold text-primary-foreground">
                You have different questions?
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-primary-foreground/80">
                Our team will answer all your questions. We ensure a quick
                response.
              </p>

              <Button className="w-full max-w-50 rounded-full bg-secondary px-8 py-6 font-semibold text-secondary-foreground hover:bg-secondary/90">
                Contact Us
              </Button>
            </div>

            {/* 24/7 Service Card */}
            <div className="flex items-center gap-5 rounded-3xl border border-border/50 bg-card p-6 shadow-sm">
              <div className="shrink-0 rounded-full bg-muted p-4 text-primary">
                <Phone className="h-6 w-6 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="mb-0.5 text-sm text-muted-foreground">
                  Your Comfort, Our Priority
                </span>
                <span className="mb-1 font-heading text-xl font-bold text-foreground">
                  24/7 Service
                </span>
                <span className="text-sm text-muted-foreground">
                  (000) 000-0000
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
