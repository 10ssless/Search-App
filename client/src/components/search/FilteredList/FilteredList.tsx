import React, { FC } from "react"
import {
    Box,
    List,
    Typography,
} from "@material-ui/core";
import { FilteredListProps } from "./types"
import { Quote } from "pages/SearchPage/types";
import _ from "lodash";
import useStyles from "./filteredListStyles";
import { useSelector } from "react-redux";
import { selectAllQuotesLoading } from "pages/SearchPage/searchPageSlice";
import FilteredListItem from "../FilteredListItem/FilteredListItem";


const FilteredList: FC<FilteredListProps> = ({ filter, quotes, copied, selected, handleSelect, handleCopy }) => {
    const classes = useStyles()
    const filteredQuotes = quotes.filter(quote => quote.quoteText.includes(filter))
    const loading = useSelector(selectAllQuotesLoading);

    switch (loading) {
        case "idle":
        case "pending":
            return (
                <Box className={classes.noResults}>
                    <Typography color="textSecondary">
                        Loading...
                    </Typography>
                </Box>
            )
        case "succeeded":
            if (filteredQuotes.length) {
                const sortedQuotes = _.orderBy(filteredQuotes, [(quote: Quote) => quote.quoteText.toLowerCase()], ["asc"])
                return (
                    <List className={classes.list}>
                        {sortedQuotes.map((quote: Quote, i) =>
                            <FilteredListItem
                                key={quote._id}
                                {...quote}
                                isCopied={copied === quote._id}
                                isSelected={selected === quote._id}
                                handleSelect={handleSelect}
                                handleCopy={handleCopy}
                            />
                        )}
                    </List>
                )
            }
            return (
                <Box className={classes.noResults}>
                    <Typography color="textSecondary">
                        No quotes found. Try a different keyword.
                    </Typography>
                </Box>
            )
        case "failed":
        default:
            return (
                <Box className={classes.noResults}>
                    <Typography color="textSecondary">
                        An error occured retrieving quotes.
                    </Typography>
                </Box>
            )
    }
}

export default FilteredList;