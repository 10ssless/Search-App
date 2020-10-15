export interface Quote {
    _id: string;
    quoteText: string;
    quoteAuthor: string;
    quoteGenre?: string;
}

export type Quotes = Array<Quote>;