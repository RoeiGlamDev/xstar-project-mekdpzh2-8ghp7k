import React from 'react';
import './Button.css'; // Importing CSS for styling

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button 
      className={`luxury-button ${disabled ? 'disabled' : ''}`} 
      onClick={disabled ? undefined : onClick} 
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;