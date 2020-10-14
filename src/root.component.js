import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "./components/navbar";
// import theme from "./theme";

export default function Root(props) {
  const [darkMode, setDarkMode] = React.useState(true);
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light"
        }
      }),
    [darkMode]
  );

  // TODO - This needs to be handled a bit differently I guess
  // adding this causes the client side to break
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      //   jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar
        title={"Pokedex SSR"}
        themeChange={() => setDarkMode(!darkMode)}
      />
    </ThemeProvider>
  );
}
