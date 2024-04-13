import React from "react";
import { Link } from "react-router-dom";

const LinkProp = ({link,props}) => {
    return (
        <>
            <Link to={link} style={{textDecoration:"none" , color:"#383838"}}>{props}</Link>
            
        </>)

}

export default LinkProp