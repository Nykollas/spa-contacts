import React from "react";

import Contact from './Contact';

import ratcliffobershelp from '../helper/ratcliffobershelp';

class Contacts extends React.Component {

	state = {
		data: null
	}

	sortData = () => {
		const { data } = this.state;
		const { filter } = this.props
		
		if(data){
			const sortedData =  data.sort((a, b) => {
				if(filter.ascend){
					const aDelta = ratcliffobershelp(a[filter.filter_attr], filter.value);
					const bDelta = ratcliffobershelp(b[filter.filter_attr], filter.value);
					return aDelta - bDelta;
				}else{
					const aDelta = ratcliffobershelp(a[filter.filter_attr], filter.value);
					const bDelta = ratcliffobershelp(b[filter.filter_attr], filter.value);
					return bDelta - aDelta;
				}
				
			})
			return sortedData;
		}
		return data;
	}


	componentDidMount = () => {
		fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts").then(res => {
			res.json().then(data => {
				this.setState({ data: data });
			})
		})


	}

	render() {
		const data = this.sortData();
		  
		return (
			<div  data-testid="contacts" className="container">
				<section className="contacts">
					<Contact></Contact>
					{data ? data.map((contact, index, arr) => {
						const {
							admissionDate,
							avatar,
							company,
							country,
							department,
							id,
							name,
							phone
						} = contact;

							return <Contact
										admissionDate={admissionDate}
										avatar={avatar}
										company={company}
										country={country}
										department={department}
										name={name}
										phone={phone}
										id={id}></Contact>
						
					})
						: <></>}

				</section>
			</div>
		);
	}
}

export default Contacts;
