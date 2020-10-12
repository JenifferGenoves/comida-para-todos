import React from 'react';
import '../styles/collaborationview.css'

const FilterCollaborators = () => {
    return (
        <div className='cnt-filter'>
            <div>
                <h2>Filtrar por</h2>
            </div>

            <div className='ctn-cmp'>
                <div className='radio-filter'>
                    <input type='radio' />
                    <label htmlFor="Todos"><p>Todos</p></label>
                    <div class="border"></div>
                </div>
                <div className='radio-filter'>
                    <input type='radio' />
                    <label htmlFor="Todos"><p>Coordinadores</p></label>
                </div>
                <div className='radio-filter'>
                    <input type='radio' />
                    <label htmlFor="Todos"><p>Municipalidad</p></label>
                </div>
                <div className='radio-filter'>
                    <input type='radio' />
                    <label htmlFor="Todos"><p>Restaurantes</p></label>
                </div>
                <div className='radio-filter'>
                    <input type='radio' />
                    <label htmlFor="Todos"><p>Comunicación</p></label>
                </div>
            </div>
        </div >
    );
}
export default FilterCollaborators;
