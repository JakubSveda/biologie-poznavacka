import CelediList from "./components/CelediList";
import {Route, Switch} from "react-router-dom";
import Navigator from "./components/Navigator";
import Tester from "./components/Tester";

function App() {
    return (
        <div>
            <Navigator/>
            <Switch>
                <Route path={'/'} exact>
                    <CelediList/>
                </Route>
                <Route path={'/tester'}>
                    <Tester/>
                </Route>
            </Switch>

        </div>
    )
}

export default App;
