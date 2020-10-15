import React, { Fragment } from 'react';
import '../styles/contactForm.css';
import Avatar from '../images/iconos/user-outlined.png';
import Mail from '../images/iconos/carbon_email.png';
import Phone from '../images/iconos/clarity_phone-handset-line.png';
import Edit from '../images/iconos/edit-2.png';

const ContactForm = () => {
    const [options, setOptions] = React.useState('');
    const [name, setName] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [message, setMessage] = React.useState('');

    const saveData = (e) => {
        e.preventDefault()

        if (!options.trim()) {
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

        if (!message.trim()) {
            console.log('Campo vacío')
            return
        }

        // Si los campos estan correctos, se procesan los datos

        console.log('Procesando Datos... ' + options + name + mail + phone + message)
        e.target.reset()
        setOptions('')
        setName('')
        setMail('')
        setPhone('')
        setMessage('')

    }

    return (
        <Fragment >
            <div className="formContact">
                <form onSubmit={saveData} className="form-cont">
                    <div className="itemsContact">
                        <div className="form-group">
                            <img src={Edit} className="icons-c" alt="" />
                            <label htmlFor="options">Motivo</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>Sobre voluntariado</option>
                                <option>Sobre donaciones</option>
                                <option>Sobre otras formas de ayudar</option>
                                <option>Sobre nosotros</option>
                                <option>Otro motivo</option>
                            </select>
                        </div>
                    </div>
                    <div className="coment-Cont">
                        <label htmlFor="message" className="txt-title">Comentarios</label>
                        <input
                            type="text"
                            placeholder="Mensaje"
                            className="spacectc2"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="items-Cont">
                        <img src={Avatar} className="icons-c" alt="" />
                        <label htmlFor="name">Nombre Completo</label>
                        <input
                            type="text"
                            placeholder="Ej. Claudio Rojas Castro"
                            className="spacectc"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="items-Cont">
                        <img src={Mail} className="icons-c" alt="" />
                        <label htmlFor="mail">Correo Electrónico</label>
                        <input
                            type="email"
                            placeholder="Ej. usuario@mail.com"
                            className="spacectc"
                            onChange={(e) => setMail(e.target.value)}
                        /></div>
                    <div className="items-Cont">
                        <img src={Phone} className="icons-c" alt="" />
                        <label htmlFor="phone">Teléfono</label>
                        <input
                            type="text"
                            placeholder="Ej. +569XXXXXXX"
                            className="spacectc"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="btn-Cont">
                        <button className="formBtn" type="submit">Enviar</button>
                        <br />
                        <a href className='pf-link'>Ir a preguntas frecuentes.</a>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
export default ContactForm;