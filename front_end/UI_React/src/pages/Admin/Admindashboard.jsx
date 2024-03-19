// AdminDashboard.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from '../../components/Admin/Sidebar';
import CoursesPage from './Coursespage';
import InstitutesPage from './Institutespage';
import StudentsPage from './Studentspage';

const AdminDashboard = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar/>
        <div className="flex-1 p-4">
          <Switch>
            <Route path="/admin/courses" component={CoursesPage} />
            <Route path="/admin/institutes" component={InstitutesPage} />
            <Route path="/admin/students" component={StudentsPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AdminDashboard;
