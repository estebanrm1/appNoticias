import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import BuscadorNoticias from './components/BuscadorNoticias'


function App() {
  


  return (
    <section className='body1 container mt-3 text-center'>
    <h1 className='p-3 text-bg-secondary rounded border-primary border '>Todo Noticias</h1>
    <hr />
    <div>
      <BuscadorNoticias></BuscadorNoticias>
    </div>
    </section>
  )
}

export default App
