import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
//import any sub-components

export default class App extends React.Component {
	constructor(){
		super(),
		this.state = {
			plants: [],
			plantDetail : {}
		}
	}

	async componentDidMount(){
		const plants = (await axios.get('/api/plants')).data
		this.setState({ plants })
	}
	//any lifecycle methods
	//any custom methods
	//render

	render(){
		return (
			<section className='container'>
				{
					this.state.plants.map(plant => {
						return (
							<div className="single-plant">
								<img className="plant-img" src={plant.imgUrl} alt={`A picture of a ${plant.name}`}></img>
								<h2>{plant.name}</h2>
							</div>
						)
					})
				}
			</section>

		)
	}
}
