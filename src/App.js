import CelediList from "./components/CelediList";
import {Route, Switch} from "react-router-dom";
import Navigator from "./components/Navigator";
import {dvoudelozneKrytosemenneRostliny} from "./data/DvoudelozneKrytosemenneRostliny";
import {jednodelozneKrytosemenneRostliny} from "./data/JednodelozneKrytosemenneRostliny";
import {zastupci} from "./data/Zastupci";
import Tester from './components/Tester';

function App() {
    return (
        <div>
            <Navigator/>
            <Switch>
                <Route path={'/'} exact>
                    <CelediList jednodelozneKrytosemenneRostliny={jednodelozneKrytosemenneRostliny} dvoudelozneKrytosemenneRostliny={dvoudelozneKrytosemenneRostliny}/>
                </Route>
                <Route path={'/tester'}>
                    <Tester zastupci={zastupci}/>
                </Route>
            </Switch>
        </div>
    )
}

export default App;
