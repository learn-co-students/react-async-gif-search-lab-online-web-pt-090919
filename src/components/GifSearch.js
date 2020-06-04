import React from 'react'

export default class GifSearch extends React.Component {
	constructor() {
		super()

		this.state = {
			input: ''
		}

		this.handleInput = this.handleInput.bind(this)
		this.valueHandler = this.valueHandler.bind(this)
	}

	handleInput(event) {
		this.setState({input: event.target.value})
	}

	valueHandler(event) {
		event.preventDefault()
		this.props.submitCallBack(this.state.input)
	}

	render() {
		return (
			<div className="form-wrapper">
				<form onSubmit={this.valueHandler}>
					<input type="text" value={this.state.input} onChange={this.handleInput}/>
					<br/>
					<br/>
				</form>
			</div>
			)
	}
}