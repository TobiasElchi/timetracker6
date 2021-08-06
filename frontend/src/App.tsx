import React from "react";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import "./App.css";
import CreateLabel from "./Components/CreateLabel";
import ListOfLabels from "./Components/ListOfLabels";

import {Link, Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import {urls} from "./Utils/urls";
import {TasksPage} from "./pages/TasksPage";
import {LabelsPage} from "./pages/LabelsPage";

function App() {
    const client = new ApolloClient({
        uri: "http://localhost:3001/graphql",
        cache: new InMemoryCache(),
    });

    return (
        <BrowserRouter>
            <ApolloProvider client={client}>
                <header className="App-header">
                    <h1>Task Manager</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to={urls.tasks}>Tasks</Link>
                            </li>
                            <li>
                                <Link to={urls.labels}>Labels</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path={urls.tasks}>
                        <TasksPage/>
                    </Route>
                    <Route path={urls.labels}>
                        <LabelsPage/>
                    </Route>
                    <Route>
                        <Redirect to={urls.labels}/>
                    </Route>
                </Switch>
            </ApolloProvider>
        </BrowserRouter>
    );
}

export default App;
