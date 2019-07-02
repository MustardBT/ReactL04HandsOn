import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
    return <NumberOfStudents />;
};

class NumberOfStudents extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            numberOfStudents: 90,
            waitlistedStudents: 10,
            addStudentAmount: 0,
            addWaitAmount:0
        };
    }

    incrementStudentByOne(){
        this.setState({
            numberOfStudents: this.state.numberOfStudents + 1
        });
    }

    incrementStudentByMany(){
        this.setState({
            numberOfStudents: this.state.numberOfStudents + parseInt(this.state.addStudentAmount)
        });
    }

    incrementWaitByOne(){
        this.setState({
            waitlistedStudents: this.state.waitlistedStudents +1
        });
    }

    incrementWaitByMany(){
        this.setState({
            waitlistedStudents: this.state.waitlistedStudents + parseInt(this.state.addWaitAmount)
        });
    }

    render() {
        return( 
            <div>
                <h1>Number of Enrolled Students: {this.state.numberOfStudents}</h1>
                <button onClick={this.incrementStudentByOne.bind(this)}>Add 1 Enrolled Student</button>
                <h3>Add Multiple Enrolled Students:</h3>
                <input 
                type="number"
                onChange={event => this.setState({ addStudentAmount: event.target.value })}
                value={this.state.addAmount} />
                <button onClick={this.incrementStudentByMany.bind(this)}>Add Students</button>
                
                <h1>Number of Waitlisted Students: {this.state.waitlistedStudents}</h1>
                <button onClick={this.incrementWaitByOne.bind(this)}>Add 1 Waitlisted Student</button>
                <h3>Add Multiple Waitlisted Students:</h3>
                <input 
                type="number"
                onChange={event => this.setState({addWaitAmount: event.target.value})}
                value={this.state.addAmount} />
                <button onClick={this.incrementWaitByMany.bind(this)}>Add Waitlist Students</button>

            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));