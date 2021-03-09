import React from 'react'

export default props => (
    <input {...props.input} // Redux form passa váris propriedades
        className='form-control'
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type} />
)