import styled from "@emotion/styled";
import {useState} from "react";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Mohave', sans-serif;
  font-size: 24px;
  font-weight: 400;
  
`
const Select = styled.select`
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 25px;
`

// Custom Hook:
const useSelectMonedas = (label, opciones) => {
  
  const [state, setState] = useState("");

  const selectMonedas = () => (
    <>
      <Label>{label}</Label>

      <Select
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="">Seleccione</option>
        {opciones.map(option => (
          <option
            key={option.id}
            value={option.id}
          >{option.nombre}</option>
        ))}
      </Select>
    </>
    
  )
  return [state, selectMonedas]
}

export default useSelectMonedas;