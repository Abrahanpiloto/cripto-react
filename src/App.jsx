import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import imageCripto from "./img/imagen-criptos.png";
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';


// STYLES COMPONENTS:

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  /* border: 1px solid white; */
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    colunm-gap: 2rem;
  
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  
  font-family: 'Mohave', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;


  &::after {
    content: "";
    width: 174px;
    height: 6px;
    background-color:#5c61f7;
    display: block;
    margin: 4px auto;
    border-radius: 8px;

    @media (max-width: 992px) {
      width: 200px;
      margin: 4px auto;
    }
  }
`
// END STYLES COMPONENTS 

function App() {
  
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({})

  useEffect(() => {
   if(Object.keys(monedas).length > 0) {
    
    const cotizarCripto = async () => {
      setResultado({})
      const {moneda, cripto} = monedas
      const urlApi = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
      
      const respuesta = await fetch(urlApi)
      const resultado = await respuesta.json()
      
      setResultado(resultado.DISPLAY[cripto][moneda])
    }
    cotizarCripto();
   }
  }, [monedas])
  
  

  return (
    <Container>
      <Imagen 
        src={imageCripto}
        alt='imagen criptomonedas'
      />

      <div>
        <Heading>Consulta el Valor de tu Criptomoneda</Heading>

        <Formulario 
          setMonedas={setMonedas}
        />

        {resultado.PRICE && <Resultado resultado={resultado}/>}
      </div>
      
    </Container>
    
  )
}

export default App;
