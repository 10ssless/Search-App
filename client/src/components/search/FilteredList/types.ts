import { Quotes } from "pages/SearchPage/types";

export type FilteredListProps = {
    filter: string;
    quotes: Quotes;
    selected: string;
    handleSelect: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => void
}