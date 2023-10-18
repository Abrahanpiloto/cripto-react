import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import Error from './Error';
import { monedas } from '../data/monedas';
import {useState, useEffect} from "react";

const InputSubmit = styled.input`
  background-color: #5c61f7;
  border: none;
  width: 100%;
  color: white;
  padding: 10px;
  border-radius: 8px;
  font-family: 'Mohave', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 22px;
  margin-top: 10px;
  transition: background-color .3s ease;
  cursor: pointer;

  &:hover {
    background-color: #4647B9;
  }
`

const Formulario = ({setMonedas}) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas("Selecciona tu Moneda", monedas);
  const [cripto, SelectCripto] = useSelectMonedas("Selecciona tu Criptomoneda", criptos);

 
  useEffect(() => {
    const urlApi = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

    const consultarApi = async () => {
      const respuesta = await fetch(urlApi);
      const resultado = await respuesta.json();
      
      const arrayCriptos = resultado.Data.map((cripto) => {

        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return(objeto)
        
      }) 
      setCriptos(arrayCriptos)
      
    };

    consultarApi();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if([moneda, cripto].includes("")) {
      setError(true)
      return
    }
    setError(false)
    setMonedas({
      moneda,
      cripto
    })
    
  }
  
  return (
    <>
      {error && <Error>Todos los Campos son Obligatorios</Error>}
      <form
        onSubmit={handleSubmit}
      >
        
        <SelectMonedas />
      
        <SelectCripto />

        <InputSubmit type='submit' value="Cotizar"/>
        
      </form>
    </>
    
  );
};

export default Formulario;