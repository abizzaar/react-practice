
const questions = [
    'How does React decide when to re-render? How does that algorithm work?',
    'What are the different architectural things to learn about React, such as higher-order components, how to structure state, etc?'
]

export function Questions() {
    return (
        <ul className="list-decimal px-6">
            {questions.map(q => <li key={q}>{q}</li>)}
        </ul>
    )
}