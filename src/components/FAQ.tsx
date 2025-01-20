"use client";

import { Accordion, AccordionItem } from "@heroui/react";
const faqs = [
  {
    question: "Can You Trust Pet Sitters?",
    answer:
      "Absolutely! All sitters go through a strict vetting process, with only 1 in 4 applicants accepted. You can read reviews from other pet owners and filter sitters with police checks for added peace of mind. Every booking is protected by Accident Cover, and payment is released to the sitter only after you confirm your pet is safe and happy.",
  },
  {
    question: "What Can You Expect from a Pet Sitter?",
    answer:
      "Our sitters are experienced animal lovers who treat your pets like family. Whether it’s boarding, house sitting, or dog walking, your pet will receive loving and stress-free care. Sitters tailor their care to your pet’s needs—maintaining your cat’s routine at home or giving your energetic puppy plenty of exercise.",
  },
  {
    question: "Can You Meet a Pet Sitter Before Booking?",
    answer:
      "Yes! Arrange a Meet & Greet to ensure the sitter is the perfect match for your furry friend. This also gives your pet the chance to 'interview' their potential caregiver. If you're still unsure, you can book a trial overnight stay to test the match before committing.",
  },
  {
    question: "What Is Pet Sitting?",
    answer:
      "Pet Sitting is a flexible care service where a trusted sitter looks after your pet in their home or yours. Services can range from overnight stays to extended periods. You can customize the service to suit your needs, whether it’s house sitting, dog boarding, or regular day care.",
  },
  {
    question: "How Much Does Pet Sitting Cost?",
    answer:
      "Pet Sitting rates vary, starting as low as $16 for an overnight stay. Each sitter sets their own fees, so you can browse and choose a care option that fits your budget.",
  },
];
const FAQ = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h3 className="section-title">FAQs</h3>
      <div className="w-full max-w-[1088px] mx-auto  flex items-center justify-between md:flex-row flex-col gap-3">
        <Accordion>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              aria-label={`${faq.question}`}
              title={faq.question}
              className="flex flex-col gap-2 *:*:font-semibold"
            >
              <div className="text-lg font-sofia-extralight font-thin">{faq.answer}</div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
