import React from 'react';

class Filters extends React.Component {



	select = (e) => {
		
		let childrens = e.target.parentElement.children;
		for(let x = 0; x < childrens.length; x ++ ){
			childrens[x].className = childrens[x].className.replace('is-selected','');
		}
		if(e.target.className.includes('is-selected')){
			e.target.className = e.target.className.replace('is-selected', "");
		}else{
			e.target.className += ' is-selected';
		}
	}

	changeDirection = (e) => {
		let children = e.target.children;
		if(children[0].className.includes('fa-sort-down')){
			children[0].className = children[0].className.replace('fa-sort-down', 'fa-sort-up');
		}else{
			children[0].className = children[0].className.replace('fa-sort-up', 'fa-sort-down');
		}
	}

	handleValue = (e) => {
		const { parent } = this.props;
		parent.setState({
			value: e.target.value
		});
	}

	setName = (e) => {
		
		
		this.select(e);
		this.changeDirection(e);
		const { parent } = this.props;
		parent.setState(previousState => {
			return {
				filter_attr: 'name',
				ascend: !previousState.ascend
			}
		})
	}

	setCountry = (e) => {
		this.select(e);
		this.changeDirection(e);
		const { parent } = this.props;
		parent.setState(previousState => {
			return {
				filter_attr: 'country',
				ascend: !previousState.ascend
			}
		})
	}

	setCompany = (e) => {
		this.select(e);
		this.changeDirection(e);
		const { parent } = this.props;
		parent.setState(previousState => {
			return {
				filter_attr: 'company',
				ascend: !previousState.ascend
			}
		})
	}

	setDepartment = (e) => {
		this.select(e);
		this.changeDirection(e);
		const { parent } = this.props;
		parent.setState(previousState => {
			return {
				filter_attr: 'department',
				ascend: !previousState.ascend
			}
		})
	}

	setAdmissionDate = (e) => {

		this.select(e);
		this.changeDirection(e);
		const { parent } = this.props;
		parent.setState(previousState => {
			return {
				filter_attr: 'admissionDate',
				ascend: !previousState.ascend
			}
		})
	}

	render() {
		return (
			<div data-testid="filters" className="container">
				<section className="filters">
					<div className="filters__search">
						<input onChange={this.handleValue} type="text" className="filters__search__input" placeholder="Pesquisar" />
						<button className="filters__search__icon">
							<i className="fa fa-search" />
						</button>
					</div>

					<button onClick={this.setName} className="filters__item is-selected">
						Nome <i className="fas fa-sort-down" />
					</button>

					<button onClick={this.setCountry} className="filters__item">
						País <i className="fas fa-sort-down" />
					</button>

					<button onClick={this.setCompany} className="filters__item">
						Empresa <i className="fas fa-sort-down" />
					</button>

					<button onClick={this.setDepartment} className="filters__item">
						Departamento <i className="fas fa-sort-down" />
					</button>

					<button onClick={this.setAdmissionDate} className="filters__item">
						Data de admissão <i className="fas fa-sort-down" />
					</button>

				</section>
			</div>
		);
	}
}

export default Filters;
