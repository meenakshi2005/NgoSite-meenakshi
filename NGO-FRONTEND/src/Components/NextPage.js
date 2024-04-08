import React from 'react'

const NextPage = () => {
    return (
        <>
            <div className="row1" style={{ display: 'flex', justifyContent: "center", padding: "32px", margin: "32px" }}>
                <label htmlFor="Check the Box If You want to volunteer"></label>
                <input type="checkbox" name="volunteer" id="volunteer" />Volunteer
            </div>
            <div className="choice">
                 <input type="radio" name="courier" id="courier" />Courier
                 <input type="radio" name="pickup" id="pickup" />Pickup       
            </div>
        </>
    )
}

export default NextPage