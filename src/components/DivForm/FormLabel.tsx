import "./index.css";
import plus from "../../assets/plus.svg";

import {useState } from 'react';

interface FormLabelProps {
  onFormSubmit: (inputValue: string) => void;
}

function FormLabel(props: FormLabelProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    props.onFormSubmit(inputValue);
    setInputValue('');
  };

  return (
    <div className="divForm">
      <input
        type="text"
        name=""
        id="formTect"
        placeholder="Adicione uma nova tecnologia"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="buttonConfirm" onClick={handleSubmit}>
        Criar <img src={plus}/>
      </button>
    </div>
  );
}

export default FormLabel;