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
    <div className={isCatalog? "navbar" : "navbar border"}>
      <div className="nav-content">
        <div className="box1">
          <a href="/catalog"><img className="logo"/></a>
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
        <ul>
          <li><a href="/account/profile">Profile</a></li>
          <li><a href="/account/orders">Orders</a></li>
          <li><a href="/account/superorders">Superorders</a></li>
        </ul>
      </div>
    </div>
)};

export default Navbar;
