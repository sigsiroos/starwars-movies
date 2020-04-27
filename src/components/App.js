import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import "./App.css";
import Toolbar from "./Toolbar";
import List from "./List";
import Show from "./Show";
import LeadText from "./LeadText";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Toolbar/>
                <div className="d-flex flex-grow-1 flex-column flex-md-row">
                    <div className="d-flex flex-grow-1 flex-column flex-basis-50 border-right">
                        <List/>
                    </div>
                    <div className="d-flex flex-grow-1 flex-column flex-basis-50">
                        <Switch>
                            <Route exact path="/">
                                <LeadText text="No movie selected" />
                            </Route>
                            <Route path="/:slug">
                                <Show />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
