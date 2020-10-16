import React, { FC } from "react";
import {
    Button,
    Divider,
    Grid,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@material-ui/core";
import CopyToClipboard from 'react-copy-to-clipboard';
import { currentColorFromTheme } from "app/helpers";
import { FilteredListItemProps } from "./types";
import useStyles from "./filteredListItemStyles";

const FilteredListItem: FC<FilteredListItemProps> = ({ _id, quoteText, quoteAuthor, isCopied, isSelected, handleSelect, handleCopy }) => {
    const theme = useTheme()
    const classes = useStyles()
    const author = quoteAuthor || "Unknown Author"
    const formattedQuote = `"${quoteText}" ~${author}`
    if (isSelected) {
        return (
            <ListItem
                button
                onClick={(e) => handleSelect(e, _id)}
                selected={isSelected}
            >
                <Grid container xs={12} className={classes.selected}>
                    <Grid item xs={12} md={10}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            "{quoteText}"
                        </Typography>
                        <Typography color="textSecondary">
                            ~ {author}
                        </Typography>
                    </Grid>
                    <Grid container justify="flex-end" xs={12} md={2}>
                        <CopyToClipboard text={formattedQuote}>
                            <Button color={currentColorFromTheme(theme.palette.type)} onClick={(e) => handleCopy(e, _id)}>
                                {isCopied ? "Copied!" : "Copy Quote"}
                            </Button>
                        </CopyToClipboard>
                    </Grid>
                </Grid>
            </ListItem>
        )
    }
    return (
        <>
            <ListItem
                button
                onClick={(e) => handleSelect(e, _id)}
            >
                <ListItemText secondary={`"${quoteText}"`} />
            </ListItem>
            <Divider />
        </>
    )
}

export default FilteredListItem;