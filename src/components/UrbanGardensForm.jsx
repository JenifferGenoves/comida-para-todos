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
                    <label className='lbl-form' for="meters">Metros de Terreno a Donar</label>
                    <input
                        type="text"
                        placeholder="Ej: 5m²"
                        className="space"
                        onChange={(e) => setMeters(e.target.value)}
                    />
                </div>
                <div className="items">
                    <img src={Avatar} className="icons" /* style={{ width: "25px", height:"25px" }} */ alt="" />
                    <label className='lbl-form' for="name">Nombre Completo</label>
                    <input
                        type="text"
                        placeholder="Ej: Camila Fernanda Sepúlveda Carrasco"
                        className="space"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="items">
                    <img src={Mail} className="icons" alt="" />

                    <label className='lbl-form' for="mail">Correo Electrónico</label>
                    <input

                        type="email"
                        placeholder="Ej: camila.sepulveda@gmail.com"
                        className="space"
                        onChange={(e) => setMail(e.target.value)}
                    /></div>
                <div className="items">
                    <img src={Phone} className="icons" alt="" />
                    <label className='lbl-form' for="phone">Teléfono</label>
                    <input
                        type="text"
                        placeholder="Ej: +569 39425756"
                        className="space"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="items">
                    <img src={Direction} className="icons" alt="" />
                    <label className='lbl-form' for="direction">Dirección</label>
                    <input
                        type="text"
                        placeholder="Ej: Litoral #320, Peñalolen"
                        className="space"
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