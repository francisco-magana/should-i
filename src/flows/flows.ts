import { question, flow } from "../types/types";

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
                ]
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
                ]
            }]
    }
}