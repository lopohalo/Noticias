import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'

function App() {

  const [categoria, setcategoria] = useState('')
  const [noticias, setnoticias] = useState([])

  useEffect(() => {
     const consultarAPI = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=a0f26e135951483b9f151ec2a9eaccc4`
    const resultado = await fetch(url)
    const noticias = await resultado.json()
      setnoticias(noticias.articles)
     }
     consultarAPI()

  }, [categoria])
  return (
   <Fragment>
     <Header
      titulo='Buscador de Noticias'
     />

     <div className="container white">
       <Formulario 
       setcategoria={setcategoria}
       />
       <Resultado
         noticias={noticias}
       />
     </div>
   </Fragment>
  );
}

export default App;
