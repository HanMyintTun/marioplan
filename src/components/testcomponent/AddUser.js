import React, { Component } from 'react'


class AddUser extends Component {
    state = {
        name: '',
        age: ''
    }
 
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        //to api data pass
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value 
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label>name</label>
                        <input type="text" id="name" onChange={this.handleChange} value={this.state.name} />
                    </div>
                    <div className="input-field">
                        <label>age</label>
                        <input type="number" id="age" onChange={this.handleChange} value={this.state.age}/>

                    </div>
                    <button className="btn pink">Submit</button>
                </form>
            </div>
        )
    }
}


export default AddUser