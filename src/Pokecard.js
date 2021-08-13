import './Pokecard.css';

function Pokecard(props) {
	return (
		<div className="Pokecard">
			<center>
				<h4>{props.name}</h4>
			</center>
			<img src={props.img} alt={props.name} />
			<br />
			<center>Type: {props.type}</center>
			<br />
			<center>EXP: {props.exp}</center>
		</div>
	);
}

export default Pokecard;
