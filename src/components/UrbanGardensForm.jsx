import React from 'react';
import '../styles/UrbanGardensForm.css';
import Plant from '../images/iconos/cil_plant.png';
import Avatar from '../images/iconos/user-outlined.png';
import Mail from '../images/iconos/carbon_email.png';
import Phone from '../images/iconos/clarity_phone-handset-line.png';
import Direction from '../images/iconos/map-pin.png';

const UrbanGardenForm = () => {
    const [meters, setMeters] = React.useState('');
    const [name, setName] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [direction, setDirection] = React.useState('');

    const saveData = (e) => {
        e.preventDefault()

        if (!meters.trim()) {
            console.log('Campo vacío')
            return
        }

        if (!name.trim()) {
            console.log('Campo vacío')
            return
        }

        if (!mail.trim()) {
            console.log('Campo vacío')
            return
        }

        if (!phone.trim()) {
            console.log('Campo vacío')
            return
        }

        if (!direction.trim()) {
            console.log('Campo vacío')
            return
        }

        // Si los campos estan correctos, se procesan los datos

        console.log('Procesando Datos... ' + meters + name + mail + phone + direction)
        e.target.reset()
        setMeters('')
        setName('')
        setMail('')
        setPhone('')
        setDirection('')

    }

    return (
        <div className="form">
            <form onSubmit={saveData} className="form-container">
                <div className="title-container">
                    <h1 className="font-title">Completa tus Datos</h1>
                </div>
                <div className="items">
                    <img src={Plant} className="icons" alt="icon" />
<<<<<<< HEAD
                    <label className='lbl-form' for="meters">Metros de Terreno a Donar</label>
=======
                    <label className='lbl-form' for="meters">Metros de Terreno a Donar<span className='cat'>*</span></label>
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
                    <input
                        type="text"
                        placeholder="Ej: 5m²"
                        className="space"
<<<<<<< HEAD
=======
                        style={{ fontSize: '0.75em' }}
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
                        onChange={(e) => setMeters(e.target.value)}
                    />
                </div>
                <div className="items">
                    <img src={Avatar} className="icons" /* style={{ width: "25px", height:"25px" }} */ alt="" />
<<<<<<< HEAD
                    <label className='lbl-form' for="name">Nombre Completo</label>
=======
                    <label className='lbl-form' for="name">Nombre Completo<span className='cat'>*</span></label>
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
                    <input
                        type="text"
                        placeholder="Ej: Camila Fernanda Sepúlveda Carrasco"
                        className="space"
<<<<<<< HEAD
=======
                        style={{ fontSize: '0.75em' }}
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="items">
                    <img src={Mail} className="icons" alt="" />

<<<<<<< HEAD
                    <label className='lbl-form' for="mail">Correo Electrónico</label>
=======
                    <label className='lbl-form' for="mail">Correo Electrónico<span className='cat'>*</span></label>
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
                    <input

                        type="email"
                        placeholder="Ej: camila.sepulveda@gmail.com"
                        className="space"
<<<<<<< HEAD
=======
                        style={{ fontSize: '0.75em' }}
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
                        onChange={(e) => setMail(e.target.value)}
                    /></div>
                <div className="items">
                    <img src={Phone} className="icons" alt="" />
<<<<<<< HEAD
                    <label className='lbl-form' for="phone">Teléfono</label>
=======
                    <label className='lbl-form' for="phone">Teléfono<span className='cat'>*</span></label>
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
                    <input
                        type="text"
                        placeholder="Ej: +569 39425756"
                        className="space"
<<<<<<< HEAD
=======
                        style={{ fontSize: '0.75em' }}
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="items">
                    <img src={Direction} className="icons" alt="" />
<<<<<<< HEAD
                    <label className='lbl-form' for="direction">Dirección</label>
=======
                    <label className='lbl-form' for="direction">Dirección<span className='cat'>*</span></label>
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
                    <input
                        type="text"
                        placeholder="Ej: Litoral #320, Peñalolen"
                        className="space"
<<<<<<< HEAD
=======
                        style={{ fontSize: '0.75em' }}
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
                        onChange={(e) => setDirection(e.target.value)}
                    />
                </div>
                {/* <input
                className="formButton"
                type="submit"
                value="Siguiente"/> */}
                <div className="items">
                    <button className="formButton" type="submit">Siguiente</button>
                </div>
            </form>
        </div>

    );
};

export default UrbanGardenForm;