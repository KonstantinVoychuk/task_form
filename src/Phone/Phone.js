import React from "react";
import './Phone.css'

function Phone(props) {
		return (
			<div className="phone">
					<h2>{props.userForm[7].title}</h2>
					<input type="tel" 
						name = 'phone'
						placeholder="(000) 000-0000"
						tabIndex={8}
						value={props.userForm[7].text} 
						onChange={(e) => props.onChangeUserForm(7, e.target.value)}/>
			</div>
			)
}

export default Phone;