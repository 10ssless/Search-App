import React, { FC } from "react"
import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@material-ui/core";
import { FilteredListProps } from "./types"
import { Quote } from "pages/SearchPage/types";
import _ from "lodash";
import useStyles from "./filteredListStyles";
import { useSelector } from "react-redux";
import { selectAllQuotesLoading } from "pages/SearchPage/searchPageSlice";


const FilteredList: FC<FilteredListProps> = ({ filter, quotes, selected, handleSelect }) => {
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
                        {sortedQuotes.map((quote: Quote, i) => {
                            const { _id, quoteAuthor, quoteText } = quote
                            if (selected === _id) {
                                return (
                                    <ListItem
                                        button
                                        onClick={(e) => handleSelect(e, _id)}
                                        selected={selected === _id}
                                    >
                                        <Box className={classes.selected}>
                                            <Typography variant="h5" component="h2">
                                                {quoteText}
                                            </Typography>
                                            <Typography color="textSecondary">
                                                {quoteAuthor || "Unknown"}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                )
                            }
                            return (
                                <>
                                    <ListItem
                                        button
                                        onClick={(e) => handleSelect(e, _id)}
                                    >
                                        <ListItemText secondary={quoteText} />
                                    </ListItem>
                                    <Divider />
                                </>
                            )
                        })}
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