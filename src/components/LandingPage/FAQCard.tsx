import { useState } from "react";

type FAQ = { id: number; question: string; answer: string };

function FAQCard({ item }: { item: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
        aria-expanded={open}
        aria-controls={`faq-panel-${item.id}`}
      >
        <span className="font-semibold text-gray-900">{item.question}</span>
        <span
          className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300"
          aria-hidden="true"
        >
          {open ? "–" : "+"}
        </span>
      </button>

      {/* Collapsible panel */}
      <div
        id={`faq-panel-${item.id}`}
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-4 pr-10 text-sm text-gray-600">{item.answer}</p>
      </div>
    </div>
  );
}

export default FAQCard;

// export default function FAQList() {
//   return (
//     <section className="mx-auto w-full max-w-2xl rounded-xl bg-white p-4 shadow">
//       <h2 className="mb-2 text-2xl font-extrabold">FAQs</h2>
//       <div className="divide-y divide-gray-100">
//         {faqs.map((f) => (
//           <FAQItem key={f.id} item={f} />
//         ))}
//       </div>
//     </section>
//   );
// }
