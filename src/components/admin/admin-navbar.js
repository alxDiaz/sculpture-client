import React from 'react';
import {NavLink} from 'react-router-dom';

const AdminNavbar = () => {

  const menu = {
    families: 'Families',
    expositions: 'Expositions',
    media: 'Media',
    contact: 'Contact'
  }

  return (
    <div className="admin-navbar">
      <ul>
        <li>
          <NavLink activeClassName="active" className="hover" to="/admin/families">
            {menu.families}
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" className="hover" to="/admin/expositions">
            {menu.expositions}
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" className="hover" to="/admin/media">
            {menu.media}
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" className="hover" to="/admin/contact">
            {menu.contact}
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default AdminNavbar;
