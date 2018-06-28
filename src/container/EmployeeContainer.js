import React, {
    Component
} from 'react';
// import fetch from 'isomorphic-fetch';

import Employee from './Employee';

class EmployeeContainer extends Component {
    constructor() {
        super();
        this.state = {
            employee: []
        };
    }
    componentDidMount() {
        fetch(this.props.todoApi, {
			mode: 'cors',
			cache: 'default',
			method: 'GET',
			credentials: 'same-origin'
        })
		.then((response) => {
			if (response.status === 200) {
				console.log('employee >>> ', response.json());
				return response.json()
					.then((data) => {
						console.log('employee >>> ', data.json());
						return this.setState({
							'employee': data
						});
					})

			}
		})
		.catch((error) => {
			return this.setState({
				'employee': []
			});
		});
    }
    render() {
        const {
            employee
        } = this.state;
        const {
            noResults
        } = this.props;
        return <Employee employee = {
            employee
        }
        noResults = {
            noResults
        }
        />;
    }
}

export default EmployeeContainer;
