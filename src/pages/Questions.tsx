
const questions = [
    'How does React decide when to re-render? How does that algorithm work?',
    'What are the different architectural things to keep in mind about React, such as higher-order components, how to structure state, etc?',
    'What is the clear difference between `type` and `interface` in Typescript?',
    'How do generics and other type concepts work in Typescript?',
    'How to use the React Developer Tools profiler to see performance of app?',
    'How to think about React performance when dealing with large amounts of data / API queries / live updates? To think about CPU / memory? Could be good to work on a representative app here generated by ChatGPT.',
    'What are the best practices for setting variables with Tailwind, for a design system?',
    'What is the "data-[state=checked]" pattern?',
    'What are best practices for forms in React?',
    'What accessibility considerations are important for the web?',
    'Why does Radix organize its classes as it does? What is its design philosophy?',
    'What is the idiomatic way to manage variables with dark mode?'
]

export function Questions() {
    return (
        <ul className="list-decimal px-6">
            {questions.map(q => <li key={q}>{q}</li>)}
        </ul>
    )
}