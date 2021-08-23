import '../stylesheets/ZastupceCard.css';

const ZastupceCard = (props) => {
  return (
      <div className={'zastupce-card'}>
          <img className={'image'} src={props.img} alt={props.jmenoRostliny} width={'auto'} height={500}/>
          <p className={'img-title'}>{props.jmenoRostliny.toString().toUpperCase()}</p>
      </div>
  )
}

export default ZastupceCard;