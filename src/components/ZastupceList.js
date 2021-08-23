import ZastupceCard from "./ZastupceCard";

const ZastupceList = (props) => {
    return (
        <div>
            {props.zastupci.map((zastupce, key) => {
                return <ZastupceCard key={key} jmenoRostliny={zastupce.jmenoRostliny} img={zastupce.img} font-size={props.fontSize}/>
            })}
        </div>
    )
}

export default ZastupceList;