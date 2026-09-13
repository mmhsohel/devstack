const faqs = [
  {
    question: "Where can we deploy the site?",
    answer:
      "You can deploy the site anywhere you like, such as Netlify, Vercel, Cloudflare Pages, or any other hosting platform.",
  },
  {
    question: "Do we have to use TypeScript?",
    answer:
      "No. You can use either TypeScript or JavaScript. This project is built using TypeScript.",
  },
  {
    question: "Can we change the title, logo, and colors?",
    answer:
      "Yes. You can change the project title, logo, and color scheme as long as they remain relevant to the project.",
  },
  {
    question: "Where do we get the technology logos and icons?",
    answer:
      "You can use technology icon URLs from different sources. TechIcons is one useful source for clean technology logos.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="max-w-6xl mx-auto px-4 py-7 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Common <span className="brand-gradient-text">FAQ</span>
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Frequently asked questions about Dev Stack.
        </p>
      </div>

     
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="border border-gray-200 rounded-lg p-4"
          >
            <summary className="text-sm font-semibold text-gray-800 cursor-pointer">
              {faq.question}
            </summary>

            <p className="text-xs text-gray-500 leading-5 mt-3">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;