"use client";

import { useState } from "react";
import Icon from "./Icon";
import { FAQS } from "@/lib/faqs";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {FAQS.map((faq, i) => (
        <div className="faq-item reveal" key={faq.q}>
          <button
            className="faq-trigger"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="faq-question">{faq.q}</span>
            <span className={`faq-chevron${open === i ? " open" : ""}`}>
              <Icon name="chevron" size={22} />
            </span>
          </button>
          <div className={`faq-body${open === i ? " open" : ""}`}>
            <div className="faq-body-inner">
              {faq.a.map((para, j) => <p key={j}>{para}</p>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
