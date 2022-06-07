import React from "react";
import './Emeil.css'

function Emeil(props) {
		return (
			<div className="emeil">
					<h2>{props.userForm[8].title}</h2>
					<input type="email" 
						name = 'phone'
						placeholder="ex: emeil@yahoo.com"
						tabIndex={9}
						value={props.userForm[8].text} 
						onChange={(e) => props.onChangeUserForm(8, e.target.value)} />
					<p className="label">{props.userForm[8].label} &nbsp;</p>
			</div>
			)
}

export default Emeil;