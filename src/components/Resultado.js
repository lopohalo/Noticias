import React from 'react';
import Noticia from './Noticia'
import PropTypes from 'prop-types'

const Resultado = ({noticias}) => (
    <div className="row">
    {noticias.map(noticia => (
        <Noticia 
         noticia={noticia}
         key={noticia.url}
        />
    ))}

       
    </div>
)
ListadoNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}
export default Resultado;