import React from 'react'

import { Button, Form, Col } from 'react-bootstrap';

const AdicionarMes = () => {
  return (
    <>
      <h2>Adicionar mês</h2>
      <Form.Row>
        <Form.Group as={Col} md="1">
          <Form.Control as="select" size="sm" custom>
            <option>2019</option>
            <option>2020</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="1">
          <Form.Control as="select" size="sm" custom>
            <option>01</option>
            <option>01</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Button variant="primary" size="sm">Adicionar</Button>
        </Form.Group>
      </Form.Row>
    </>
  )
}

export default AdicionarMes

