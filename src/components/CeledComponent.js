import '../stylesheets/CeledComponent.css';
import ZastupceList from "./ZastupceList";

const CeledComponent = (props) => {

    return(
        <div className={'celed-component'}>
            <h1>{props.nazev.toString().toUpperCase()}</h1>
            {(props.popis) ? <h2>{props.popis}</h2> : ""}
            {(props.kvety) ? <div><h3 style={{display: "inline-block"}}>Květy:</h3> <h4 style={{display: "inline-block"}}>{props.kvety}</h4>{(props.plody || props.listy || props.koreny) ? <br/> : ""}</div> : ""}
            {(props.plody) ? <div><h3 style={{display: "inline-block"}}>Plody:</h3> <h4 style={{display: "inline-block"}}>{props.plody.join(", ")}</h4>{(props.listy || props.koreny) ? <br/> : ""}</div> : ""}
            {(props.listy) ? <div><h3 style={{display: "inline-block"}}>Listy:</h3> <h4 style={{display: "inline-block"}}>{props.listy}</h4>{(props.koreny) ? <br/> : ""}</div> : ""}
            {(props.koreny) ? <div><h3 style={{display: "inline-block"}}>Kořeny:</h3> <h4 style={{display: "inline-block"}}>{props.koreny}</h4></div> : ""}

            {props.podceledi.map((podceled, key) => {
                if (!podceled.nazev) {
                    return(
                        <div key={key}>
                            {(podceled.zastupci) ? <div> <h3>Zástupci:</h3> <br/> <ZastupceList zastupci={podceled.zastupci} fontSize={'h3'}/> </div> : "" }
                        </div>
                    )
                } else {
                    return(
                        <div className={'podceled-component'} key={key}>
                            <br/><br/>
                            <h2>{podceled.nazev.toString().toUpperCase()}</h2>
                            {(podceled.popis) ? <h3>{podceled.popis}</h3> : ""}
                            {(podceled.kvety) ? <div><h4 style={{display: "inline-block"}}>Květy:</h4> <h5 style={{display: "inline-block"}}>{podceled.kvety}</h5>{(podceled.plody || podceled.listy || props.koreny || props.zastupci) ? <br/> : ""}</div> : ""}
                            {(podceled.plody) ? <div><h4 style={{display: "inline-block"}}>Plody:</h4> <h5 style={{display: "inline-block"}}>{podceled.plody.join(", ")}</h5>{(podceled.listy || props.koreny || props.zastupci) ? <br/> : ""}</div> : ""}
                            {(podceled.listy) ? <div><h4 style={{display: "inline-block"}}>Listy:</h4> <h5 style={{display: "inline-block"}}>{podceled.listy}</h5>{(props.koreny || props.zastupci) ? <br/> : ""}</div> : ""}
                            {(props.koreny) ? <div><h4 style={{display: "inline-block"}}>Kořeny:</h4> <h5 style={{display: "inline-block"}}>{props.koreny}</h5>{(props.zastupci) ? <br/> : ""}</div> : ""}
                            {(podceled.zastupci) ? <div><h4 style={{display: "inline-block"}}>Zástupci:</h4> <br/> <ZastupceList zastupci={podceled.zastupci} fontSize={'h4'}/></div> : ""}
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default CeledComponent
