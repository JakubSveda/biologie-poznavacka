import './App.css';
import CelediList from "./components/CelediList";
import {Route, Switch} from "react-router-dom";
import Navigator from "./components/Navigator";

function App() {
    return (
        <div>
            <Navigator/>
            <Switch>
                <Route path={'/'} exact>
                    <CelediList/>
                </Route>
                <Route path={'/tester'}>

                </Route>
            </Switch>

        </div>
    )
}

export default App;
