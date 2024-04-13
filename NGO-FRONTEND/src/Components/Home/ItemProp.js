import React from 'react'

const ItemProp = ({img,text,para}) => {
    return (
        <div className="item">
            <div className="item_img">
                <img src={img} height={"150"} />
            </div>
            <div className="item_content">
                <h3>{text}</h3><br />
                <p>{para}</p>
                <br /><br /><br />
            </div>
        </div>
    )
}

export default ItemProp