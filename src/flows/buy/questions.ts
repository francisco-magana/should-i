import { Question } from "../../types/types";

export const questions: Question[] = [
    {
        text: "Can you borrow it from a friend?",
        answered: false,
        chosenYes: null,
        options: [
            {
                text: "No",
                value: false
            },
            {
                text: "Yes",
                value: true
            }
        ]

    }
]