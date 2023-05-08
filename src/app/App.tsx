import React from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { ErrorPage, Home, MyNetwork } from "./loadable";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/mynetwork" component={MyNetwork} />
                <Route
                    exact
                    path="/NotFound"
                    render={(props: RouteComponentProps<any>) => (
                        <ErrorPage
                            type="404"
                            history={props.history}
                            location={props.location}
                            match={props.match}
                        />
                    )}
                />
                <Route
                    exact
                    path="/Unauthorized"
                    render={(props: RouteComponentProps<any>) => (
                        <ErrorPage
                            type="403"
                            history={props.history}
                            location={props.location}
                            match={props.match}
                        />
                    )}
                />
                <Route
                    exact
                    path="/Error"
                    render={(props: RouteComponentProps<any>) => (
                        <ErrorPage
                            type="500"
                            history={props.history}
                            location={props.location}
                            match={props.match}
                        />
                    )}
                />

                <Redirect to="/NotFound" />
            </Switch>
        </ThemeProvider>
    );
};

export default App;
