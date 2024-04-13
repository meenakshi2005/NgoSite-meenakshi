import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';

const Button = ({props,clr,fnt,link}) => {

let text=props;

  return (
    <>  <Link to={link}>
        <button className="row1" style={{backgroundColor:clr ,color:fnt }}>{text}</button>
        </Link>
    </>
  ) 
}

export default Button