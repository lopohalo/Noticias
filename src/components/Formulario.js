import React from 'react';
import styles from './Formulario.module.css'
import useSelect from '../Hooks/useSelect'
import PropTypes from 'prop-types';


const Formulario = ({setcategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entrenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnologia'}
    ]

    const[state, SelectNoticias] = useSelect('general', OPCIONES)

     const BuscarCategoria = e => {
         e.preventDefault()
         setcategoria(state)
     }
    return (  
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                onSubmit={BuscarCategoria}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
                    <SelectNoticias/>
                    <div className="input-field col s12">
                        <input 
                          type="submit"
                          className={`${styles.btn_block} btn-large amber darken-2`}
                          value="Buscar"
                          />
                    </div>
                </form>
            </div>
        </div>
    );
}
Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}
 
export default Formulario;