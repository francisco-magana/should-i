export type flow = {
    [key: string]: {
        questions: question[]
    }
}

export type question = {
    id: number;
    text: string;
    answered: boolean;
    chosenYes: boolean | null;
    options: option[];
}

export type option = {
    text: string;
    value: string | boolean;
}