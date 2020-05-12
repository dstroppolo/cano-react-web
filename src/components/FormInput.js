import React from 'react';
import './styles/FormInput.css';

const FormInput = ({value, name, onChange}) => {
  return (
    <div className={`input-container`}>
      <input value={value} name={name} onChange={ ({target}) => onChange({[name]: target.value}) } />
    </div>
  )
}

export default FormInput;