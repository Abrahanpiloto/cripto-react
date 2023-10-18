import styled from '@emotion/styled';
import React from 'react'

const Aviso = styled.div`
  background-color: #ff3333;
  padding: 12px;
  text-align: center;
  color: white;
  border-radius: 8px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
`

const Error = ({children}) => {
  return (
    <Aviso>{children}</Aviso>
  )
}

export default Error;