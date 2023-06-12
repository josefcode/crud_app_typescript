import React, { MouseEventHandler } from 'react';
import './styleEllipseAddButton.css'

interface MyButtonProps {
  popupClick: () => void;
}

const EllipseAddButton = ({popupClick}: MyButtonProps) => {
  return <button className='ellipse-button' onClick = {popupClick}>+</button>;
};

export default EllipseAddButton;