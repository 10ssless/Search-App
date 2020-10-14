import React, { useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SearchPage from "pages/SearchPage/SearchPage";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#d52b1d"
          },
          secondary: {
            main: "#ffbe3d"
          },
          success: {
            main: "#008330"
          },
          error: {
            main: "#ed7000"
          },
          info: {
            main: "#0077b4"
          },
          warning: {
            main: "#ffbc3d"
          },
        }
      }),
    [prefersDarkMode]
  )
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/">
              <SearchPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
