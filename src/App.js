import React, { useState } from 'react';
import './App.css';
import FullName from './FullName/FullName';
import Address from './Address/Address';
import Phone from './Phone/Phone'; 
import Emeil from './Emeil/Emeil'

function App() {
	const [userForm, setUserForm] = useState([
		{'title': 'Full Name', 'label': 'First Name', 'text': ''},
		{'title': '', 'label': 'Last Name', 'text': ''},
		{'title': 'Address', 'label': 'Strit Addres', 'text': ''},
		{'title': '', 'label': 'Strit Addres Line2', 'text': ''},
		{'title': '', 'label': 'Sity', 'text': ''},
		{'title': '', 'label': 'State / Province', 'text': ''},
		{'title': '', 'label': 'Postal / Zip Code', 'text': ''},
		{'title': 'Phone Number', 'label': '', 'text': ''},
		{'title': 'E-meil', 'label': 'Exemple@exemple.com', 'text': ''},
	]);
		const handlerChangeUserForm = (objIndex, text) => { 
			setUserForm(
					userForm.map((unitUserInfo, index) => {
						if (index === objIndex) {
							return { 
								...unitUserInfo,
								text,
							}
						}
					return unitUserInfo;
					})
			) 
		};
		function OutLog() {
			console.log(userForm);
			userForm.map((unitUserInfo, index) => 
			console.log('Введенный текст поля ',index, ': ', unitUserInfo.text)
			)
			
			
		}
	return (
		<>
			<div className="app">
				<FullName userForm={userForm} onChangeUserForm={handlerChangeUserForm}/>
				<Address userForm={userForm} onChangeUserForm={handlerChangeUserForm}/>
				<Phone userForm={userForm} onChangeUserForm={handlerChangeUserForm}/>
				<Emeil userForm={userForm} onChangeUserForm={handlerChangeUserForm}/>
				<button onClick={OutLog}>Submit</button>
			</div>
		</>
	)	
}

export default App;