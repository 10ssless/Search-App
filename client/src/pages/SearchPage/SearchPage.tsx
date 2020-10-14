import { CssBaseline, Container } from "@material-ui/core";
import { AppDispatch } from "app/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuotesAction, selectAllQuotesData, selectAllQuotesError, selectAllQuotesLoading } from "./searchPageSlice";
import { Quote } from "./types";
import useStyles from "./searchPageStyles";

const SearchPage = () => {
    const dispatch: AppDispatch = useDispatch();
    const classes = useStyles()
    const quotesData = useSelector(selectAllQuotesData);
    const quotesLoading = useSelector(selectAllQuotesLoading);
    const quotesError = useSelector(selectAllQuotesError);

    useEffect(() => {
        const allQuotesPromise = dispatch(getAllQuotesAction());
        return () => {
            allQuotesPromise.abort()
        }
    }, [dispatch])

    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                <Container maxWidth="lg" className={classes.container}>
                    {quotesData.map((quote: Quote, i) => {
                        return <p><strong>{quote.quoteAuthor || "Unknown"}</strong>: {quote.quoteText}</p>
                    })}
                </Container>
            </main>
        </div>
    )
}

export default SearchPage;