import React from "react";
import PropTypes from "prop-types";

export class ToDoList extends React.Component {
	//Sets initial state for webpage
	constructor() {
		super();
		this.state = {
			tasks: ["Laundry", "Groceries", "C.R.E.A.M."],
			input: ""
		};
	}
	//adding the user's task into the ToDoList
	enterFunction = e => {
		if (e.key === "Enter") {
			var userInput = document.getElementById("listInput").value;
			//console.log(userInput);
			let userCreatedArrayValue = this.state.tasks;
			userCreatedArrayValue.push(userInput);
			this.setState({ tasks: userCreatedArrayValue });
		}
	};

	//delete whatever task from the ToDoList
	deleteElementFunction = index => {
		let removeUserCreatedArrayValue = this.state.tasks;
		removeUserCreatedArrayValue.splice(index, 1);
		this.setState({ tasks: removeUserCreatedArrayValue });
	};

	render() {
		return (
			<div className="row justify-content-center">
				<div className="centeredContent col-8 justify-content-center text-center">
					<div className="title">
						<h1>ToDo</h1>
					</div>
					<div className="inputForm">
						<input
							id="listInput"
							size="110"
							onKeyPress={this.enterFunction}
							placeholder="What do you want to do?"
						/>
					</div>
					<ul className="Unordered List">
						{this.state.tasks.map((elem, index) => {
							return (
								<li
									className="d-flex justify-content-between"
									key={index}>
									{elem}
									<span
										onClick={() =>
											this.deleteElementFunction(index)
										}
										id="x">
										x
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}
ToDoList.propTypes = {
	key: PropTypes.number
};
