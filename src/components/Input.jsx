import React from "react";


const Input = ({ value, onChange } ) => {

    return (
        <div>
            <input type="text" value={value} onChange={onChange} />
        </div>
    )

}

export default Input;
