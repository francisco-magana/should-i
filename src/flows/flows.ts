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
                noNextQuestionID: 3
            },
            {
                id: 3,
                text: "Is it within your spending allowance?",
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
                yesNextQuestionID: 7,
                noNextQuestionID: 4
            },
            {
                id: 4,
                text: "Can you make ends meet this month?",
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
                yesNextQuestionID: 5,
                noNextQuestionID: -1
            },
            {
                id: 5,
                text: "Is it essential?",
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
                yesNextQuestionID: 6,
                noNextQuestionID: -1
            },
            {
                id: 6,
                text: "Is it the best option? (quality/price)",
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
                yesNextQuestionID: 0,
                noNextQuestionID: -1
            },
            {
                id: 7,
                text: "Do you need it?",
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
                yesNextQuestionID: 10,
                noNextQuestionID: 8
            },
            {
                id: 8,
                text: "Are you buying for yourself?",
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
                noNextQuestionID: 9
            },
            {
                id: 9,
                text: "Is it a gift or for a good cause?",
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
                yesNextQuestionID: 6,
                noNextQuestionID: -1
            },
            {
                id: 10,
                text: "Do you feel positive about it?",
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
                yesNextQuestionID: 11,
                noNextQuestionID: -1
            },
            {
                id: 11,
                text: "Do you need something else more?",
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
                yesNextQuestionID: 12,
                noNextQuestionID: 6
            },
            {
                id: 12,
                text: "Can you afford both?",
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
                yesNextQuestionID: 6,
                noNextQuestionID: -1
            },
        ],
        positiveEnd: {
            text: "Buy It."
        },
        negativeEnd: {
            text: "Don't buy it."
        }
    }
}