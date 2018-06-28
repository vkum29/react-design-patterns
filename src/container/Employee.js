import React, { Component } from 'react';

import './employee.css';

let item, index;
const Employee = (props) => {
	return props.employee ? (
		<ul className={'employees-container'}>
			{
				props.employee.map((item, index) => (
					<li key={index} className={'employee'}>
						{item}
					</li>
				))
			}
		</ul>
	) : (
		<p className={'employees-container no-results'}> {props.noResults} </p>
	);
}

export default Employee;
