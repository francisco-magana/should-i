export type Question = {
    text: string;
    answered: boolean;
    chosenYes: boolean | null;
    options: option[];
}

export type option = {
    text: string;
    value: string | boolean;
}