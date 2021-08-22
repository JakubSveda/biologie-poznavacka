import {dvoudelozneKrytosemenneRostliny} from "../data/DvoudelozneKrytosemenneRostliny";
import {jednodelozneKrytosemenneRostliny} from "../data/JednodelozneKrytosemenneRostliny";
import CeledComponent from "./CeledComponent";
import "../stylesheets/CelediList.css";

const CelediList = () => {
    return(
      <div className={'celed-list'}>
          <div className={'jednodelozne-list'}>
              <p className={'title'}>JEDNODĚLOŽNÉ KRYTOSEMENNÉ ROSTLINY</p>

              {jednodelozneKrytosemenneRostliny.map((celed, i) => {
                  return <CeledComponent key={i} nazev={celed.nazev} popis={celed.popis} kvety={celed.kvety} plody={celed.plody} listy={celed.listy} koreny={celed.koreny} podceledi={celed.podceledi}/>
              })}

              <br/><br/>
          </div>

          <div className={'dvoudelozne-list'}>
              <p className={'title'}>DVOUDĚLOŽNÉ KRYTOSEMENNÉ ROSTLINY</p>

              {dvoudelozneKrytosemenneRostliny.map((celed, i) => {
                  return <CeledComponent key={i} nazev={celed.nazev} popis={celed.popis} kvety={celed.kvety} plody={celed.plody} listy={celed.listy} koreny={celed.koreny} podceledi={celed.podceledi}/>
              })}
          </div>
      </div>
  )
}

export default CelediList;