import React from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Rest from '../../utils/rest'

const baseURL = 'https://mymoney-figormartins.firebaseio.com/'
const { useGet } = Rest(baseURL)

const Meses = () => {
  const data = useGet('meses')

  if (data.loading) {
    return (
      <span>Loading...</span>
    )
  }

  if (Object.keys(data.data).length > 0) {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Mês</th>
            <th>Previsão entrada</th>
            <th>Entrada</th>
            <th>Previsão saída</th>
            <th>Saída</th>
          </tr>
        </thead>
        <tbody>
          {
            Object
              .keys(data.data)
              .map(mes => {
                return (
                  <tr key={mes}>
                    <td><Link to={`/movimentacoes/${mes}`}>{mes}</Link></td>
                    <td>{data.data[mes].previsao_entrada}</td>
                    <td>{data.data[mes].entradas}</td>
                    <td>{data.data[mes].previsao_saida}</td>
                    <td>{data.data[mes].saidas}</td>
                  </tr>
                )
              })
          }
        </tbody>
      </Table>
    )
  }

  return null
}

export default Meses