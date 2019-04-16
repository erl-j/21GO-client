import * as React from 'react';
import { useState } from 'react';
import searchIcon from '../img/icons/search.svg';
import userIcon from '../img/icons/user.svg';

const Navbar = ({isCatalog}) => {
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(false);

  const handleSubmit = event => {
    if (isCatalog) {
      event.preventDefault();
      console.log(search);
    } else {
      console.log("Redirecting");
    }
  }

  const handleClick = event => {
    if(visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  return (
    <div className="navbar">
      <div className="nav-content">
        <div className="box1">
          <img className="logo" />
        </div>
        <div className="box2">
          <img src={userIcon} alt="User" onClick={handleClick}/>
          <form className="element-to-display" action="/catalog">
            <input type="search" name="search" placeholder="Search" onChange={e => setSearch(e.target.value)}/>
            <button type="submit" onClick={handleSubmit}>
              <img src={searchIcon} alt="Search" />
            </button>
          </form>
        </div>
      </div>

      <div className={visible ? "nav-account visible" : "nav-account"}>
        <h3>Hi, Alex!</h3>
        <ul>
          <li><a href="/account">Profile</a></li>
          <li><a href="/account">Orders</a></li>
          <li><a href="/account">Superorders</a></li>
        </ul>
      </div>
    </div>
)};

export default Navbar;