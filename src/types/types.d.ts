export type flow = {
    [key: string]: flow_data
}

export type flow_data = {
    questions: question[],
    positiveEnd: flowEnd,
    negativeEnd: flowEnd
}

export type question = {
    id: number;
    text: string;
    answered: boolean;
    chosenYes: boolean | null;
    options: option[];
    yesNextQuestionID: number;
    noNextQuestionID: number;
}

export type option = {
    text: string;
    value: string | boolean;
}

export type flowEnd = {
    text: string;
}