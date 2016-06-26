import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import EmployeesList from './components/employee_list'

const App = () => {
  return(
    <div>
        <EmployeesList/>
    </div>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<App/>, document.querySelector('.container'));
})
