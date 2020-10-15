import {
    Card,
    CardContent,
    CssBaseline,
    Container,
    Grid,
    List,
    ListItem,
    ListItemText,
    TextField,
    Typography,
    useTheme,
} from "@material-ui/core";
import { AppDispatch } from "app/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllQuotesAction,
    selectAllQuotesData,
    selectAllQuotesError,
    selectAllQuotesLoading
} from "./searchPageSlice";
import { Quote } from "./types";
import useStyles from "./searchPageStyles";
import FilteredList from "components/search/FilteredList/FilteredList";
import { currentColorFromTheme } from "app/helpers";

const SearchPage = () => {
    const dispatch: AppDispatch = useDispatch();
    const classes = useStyles()
    const theme = useTheme()
    const [selected, setSelected] = useState("")
    const [filterText, setFilterText] = useState("")

    const quotesData = useSelector(selectAllQuotesData);
    const quotesError = useSelector(selectAllQuotesError);

    useEffect(() => {
        const allQuotesPromise = dispatch(getAllQuotesAction());
        return () => {
            allQuotesPromise.abort()
        }
    }, [dispatch])

    const handleSelect = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => {
        setSelected(id)
    }

    const handleFilterChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { value } = event.target
        setFilterText(value)
        setSelected("")
    }

    return (
        <>
            <Grid container xs={12}>
                <Grid item xs={12} sm={10}>
                    <Typography
                        className={classes.title}
                        component="h2"
                        variant="h3"
                        gutterBottom
                    >
                        Find The Perfect Quote.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <TextField
                        className={classes.searchBar}
                        InputProps={{
                            classes: {
                                input: classes.inputFont
                            }
                        }}
                        name="filter"
                        value={filterText}
                        onChange={(e) => handleFilterChange(e)}
                        placeholder="Filter quotes by keyword"
                        color={currentColorFromTheme(theme.palette.type)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={10} lg={8}>
                    <FilteredList
                        filter={filterText}
                        quotes={quotesData}
                        selected={selected}
                        handleSelect={handleSelect}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default SearchPage;