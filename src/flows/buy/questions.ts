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

    },
    {
        text: "Do you already have something similar?",
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