import FAQCard from "./FAQCard";

type FAQ = { id: number; question: string; answer: string };

const faqs: FAQ[] = [
  { id: 1, question: "What is Owcha?", answer: "Owcha is a social event platform that helps you discover and attend events." },
  { id: 2, question: "Is it free to use?", answer: "Browsing is free. Some premium features and tickets may have a cost." },
  { id: 3, question: "Can I cancel a ticket?", answer: "Yes, depending on the organizer’s policy shown at checkout." },
];

const FAQ = () => {
    return(
        <section className="mx-auto w-[90%] mr-[1rem] ml-[1rem] mt-[5rem] bg-white p-4">
            <h2 className="mb-2 text-2xl font-extrabold">Frequestly Asked Questions</h2>
            <p className="text-[#475467] mt-[1rem]">Everything you need to know about Owcha.</p>
            <p className="text-[#C398EE] ">Please chat to our friendly team.</p>
            <div className="divide-y divide-gray-100 mt-[3rem]">
                {faqs.map((f) => (
                <FAQCard key={f.id} item={f} />
                ))}
            </div>
        </section>
    )
}

export default FAQ;