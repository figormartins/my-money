import React from 'react'
import Rest from './rest'

const baseURL = 'https://mymoney-figormartins.firebaseio.com/'
const { useGet, usePost, useDelete } = Rest(baseURL)

function App() {
  const data = useGet('movimentacoes/2019-08')
  const [postData, post] = usePost('movimentacoes/2019-08')
  const [deleteData, remove] = useDelete()

  const doRemove = () => {
    remove('movimentacoes/2019-08/-LoSliht1PK5gdqoghL7')
  }

  const saveNew = () => {
    post({ valor: 10, descricao: 'olá' })
  }

  return (
    <div>
      <h1>My money</h1>
      {JSON.stringify(data)}
      {data.loading && <p>Loading...</p>}
      <pre><button onClick={saveNew}>Salvar</button></pre>
      <pre>{JSON.stringify(postData)}</pre>
      <pre><button onClick={doRemove}>Delete</button></pre>
      <pre>{JSON.stringify(deleteData)}</pre>
    </div>
  )
}

export default App
