
export default function StudentQuestion() {

    const questionList = [
        {
            username: '',
            question: ''
        },
        {
            username: '',
            question: ''
        },
        {
            username: '',
            question: ''
        }
    ]

    function submitAnswer() {

    }

    return (
        <div>
            {
                questionList.map((item, key) => {
                    <div>{item.name}</div>
                })
            }
        </div>
    )
}