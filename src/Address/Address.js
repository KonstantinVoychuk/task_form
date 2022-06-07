import React from "react";
import './Address.css';

function Address(props) {
		return (
			<section className="address">
				<div className="streetaddress1">
					<h2>{props.userForm[2].title}</h2>
					<input type="text" 
						name = 'streetaddress1'
						tabIndex={3}
						value={props.userForm[2].text} 
						onChange={(e) => props.onChangeUserForm(2, e.target.value)} />
					<p className="label">{props.userForm[2].label}</p>
				</div>
				<div className="streetaddress2">
					<h2>{props.userForm[3].title} &nbsp;</h2>
					<input type="text" 
						name = 'streetaddress2'
						tabIndex={4}
						value={props.userForm[3].text} 
						onChange={(e) => props.onChangeUserForm(3, e.target.value)} />
					<p className="label">{props.userForm[3].label}</p>
				</div>
				<section className="citystate">
					<div className="cityaddress">
						<h2>{props.userForm[4].title} &nbsp;</h2>
						<input type="text" 
							name = 'cityaddress'
							tabIndex={5}
							value={props.userForm[4].text} 
							onChange={(e) => props.onChangeUserForm(4, e.target.value)} />
						<p className="label">{props.userForm[4].label}</p>
					</div>
					<div className="stateaddress">
						<h2>{props.userForm[5].title} &nbsp;</h2>
						<input type="text" 
							name = 'stateaddress'
							tabIndex={6}
							value={props.userForm[5].text} 
							onChange={(e) => props.onChangeUserForm(5, e.target.value)} />
						<p className="label">{props.userForm[5].label}</p>
					</div>
				</section>
				<div className="postaladdress">
					<h2>{props.userForm[6].title} &nbsp;</h2>
					<input type="text" 
						name = 'postaladdress'
						tabIndex={7}
						value={props.userForm[6].text} 
						onChange={(e) => props.onChangeUserForm(6, e.target.value)} />
					<p className="label">{props.userForm[6].label}</p>
				</div>
			</section>
			)
}



export default Address;