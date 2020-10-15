import { Quotes } from "pages/SearchPage/types";

export type FilteredListProps = {
    filter: string;
    quotes: Quotes;
    copied: string;
    selected: string;
    handleSelect: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => void
    handleCopy: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => void
}