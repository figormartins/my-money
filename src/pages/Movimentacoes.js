import React from 'react'
import { Table } from 'react-bootstrap';
import Rest from '../utils/rest'

const baseURL = 'https://mymoney-figormartins.firebaseio.com/'
const { useGet } = Rest(baseURL)

const Movimentacoes = (props) => {
  const data = useGet(`movimentacoes/${props.match.params.data}`)

  return (
    <div className='container'>
      <h2>Movimentações</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {
            data.data &&
            Object
              .keys(data.data)
              .map(movimentacao => {
                return (
                  <tr>
                    <td>{data.data[movimentacao].descricao}</td>
                    <td>{data.data[movimentacao].valor}</td>
                  </tr>
                )
              })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Movimentacoes