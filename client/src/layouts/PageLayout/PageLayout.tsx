import React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import useStyles from "./pageLayoutStyles";
import SearchPage from "pages/SearchPage/SearchPage";

const PageLayout = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                <Container maxWidth="lg" className={classes.container}>
                    <SearchPage />
                </Container>
            </main>
        </div>
    )
}

export default PageLayout;