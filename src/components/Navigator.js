import {Link} from "react-router-dom";
import "../stylesheets/Navigator.css";

const Navigator = () => {
    return(
        <header className={'header'}>
            <nav>
                <Link className={'small-title'} to={'/'}>
                    POZNÁVAČKA
                </Link>
                <text id={'title-spacing'}>||</text>
                <Link className={'small-title'} to={'/tester'}>
                    TESTER
                </Link>
            </nav>
        </header>
    )
}

export default Navigator;