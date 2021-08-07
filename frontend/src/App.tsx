import React from "react";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import "./App.css";

import {Link, Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import {urls} from "./Utils/urls";
import {TasksPage} from "./pages/TasksPage";
import {LabelsPage} from "./pages/LabelsPage";
import {TrackingsPage} from "./pages/TrackingsPage";

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
                        <ul className= "LinkList">
                            <li>
                                <Link className="a"to={urls.tasks}>Tasks</Link>
                            </li>
                            <li>
                                <Link to={urls.labels}>Labels</Link>
                            </li>
                            <li>
                                <Link to={urls.trackings}>Trackings</Link>
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
                    <Route path={urls.trackings}>
                        <TrackingsPage/>
                    </Route>
                    <Route>
                        <Redirect to={urls.tasks}/>
                    </Route>
                </Switch>
            </ApolloProvider>
        </BrowserRouter>
    );
}

export default App;
