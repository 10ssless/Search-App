import React, { useMemo } from "react";
import "./App.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PageLayout from "layouts/PageLayout/PageLayout";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#ff1e43"
          },
          secondary: {
            main: "#ffbe3d"
          }
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
              <PageLayout />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
