import styled from "@emotion/styled";

const Container = styled.div`
  color: #FFF;
  display: flex;
  align-items: center;
  gap: 2rem;
  
`
const Texto = styled.p`
  font-size: 18px;
  span {
    color: green;
    font-weight: 700;
  }
`
const Precio = styled.p`
  font-size: 25px;
  span {
    font-weight: 700;
    color: #4040fa;
  }
`

const Imagen = styled.img`
  width: 120px;
  display: block;
`
const Resultado = ({resultado}) => {
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL} = resultado;
  return (
    <Container>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`}/>
      <div>
        <Precio>Precio: <span>{PRICE}</span></Precio>
        <Texto>Precio más <span style={{color: 'green'}}>alto</span> del día: {HIGHDAY}</Texto>
        <Texto>Precio más <span style={{color: 'red'}}>bajo</span> del día: {LOWDAY}</Texto>
        <Texto>Variacion últimas 24 horas: {CHANGEPCT24HOUR}</Texto>
        <Texto>Última actualización: {LASTUPDATE}</Texto>
      </div>
      
    </Container>
  )
 
  
}

export default Resultado;