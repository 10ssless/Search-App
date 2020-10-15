import { Quote } from "pages/SearchPage/types";

export interface FilteredListItemProps extends Quote {
    isCopied: boolean;
    isSelected: boolean;
    handleSelect: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => void;
    handleCopy: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => void;
}