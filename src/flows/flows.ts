import { flow } from "../types/types";

export const flows: flow = {
    "buy": {
        questions: [
            {
                id: 1,
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
                ],
                yesNextQuestionID: -1,
                noNextQuestionID: 2
            },
            {
                id: 2,
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
                ],
                yesNextQuestionID: -1,
                noNextQuestionID: 0
            }
        ],
        positiveEnd: {
            text: "Buy It."
        },
        negativeEnd: {
            text: "Don't buy it."
        }
    }
}