import React from "react";
import './FullName.css';

function FullName(props) {
		return (
			<section className="fullname">
				<div className="firstname">
					<h2>{props.userForm[0].title}</h2>
					<input type="text" 
						name = 'firstName'
						tabIndex={1}
						value={props.userForm[0].text} 
						onChange={(e) => props.onChangeUserForm(0, e.target.value)} />
					<p className="label">{props.userForm[0].label}</p>
				</div>
				<div className="lastname">
					<h2>{props.userForm[1].title} &nbsp;</h2>
					<input type="text" 
						name = 'lastName'
						tabIndex={2}
						value={props.userForm[1].text} 
						onChange={(e) => props.onChangeUserForm(1, e.target.value)} />
					<p className="label">{props.userForm[1].label}</p>
				</div>
			</section>
			)
}

export default FullName;