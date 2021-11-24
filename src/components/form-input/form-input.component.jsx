import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input type="text" className="form-input" onChange={handleChange} {...otherProps} />
      {
        label ?
        (
          <label className={`form-input-label 
            ${otherProps.value.length ? 'shrink' : ''}
          `}>
            {label}
          </label>
        ) : ''
      }
    </div>
  );
};

export default FormInput;