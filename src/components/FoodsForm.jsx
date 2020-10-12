import React from 'react';
import '../styles/foods.css';
import Plant from '../images/iconos/cil_plant.png';
import Avatar from '../images/iconos/user-outlined.png';
import Mail from '../images/iconos/carbon_email.png';
import Phone from '../images/iconos/clarity_phone-handset-line.png';
import Direction from '../images/iconos/map-pin.png';
import Modal from '../images/Donate-Food/modal.jpg'
import close from '../images/iconos/close.png'
import instagram from '../images/iconos/instagram.png'
import facebook from '../images/iconos/facebook.png'
import twitter from '../images/iconos/twitter.png'


const FoodsForm = () => {
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
        <div>
          <div className="items">
            <img src={Plant} className="icons" alt="icon" />
            <label className='lbl-form' for="meters">Tipo de Alimento<span className='cat'>*</span></label>
            <input
              type="text"
              placeholder="Ej: Legumbres"
              className="space text-placeholder"
              style={{ fontSize: '0.75em' }}
              onChange={(e) => setMeters(e.target.value)} />
          </div>

          <div className="items">
            <img src={Avatar} className="icons" /* style={{ width: "25px", height:"25px" }} */ alt="" />
            <label className='lbl-form' for="name">Nombre Completo<span className='cat'>*</span></label>
            <input
              type="text"
              placeholder="Ej: Camila Fernanda Sepúlveda Carrasco"
              className="space"
              style={{ fontSize: '0.75em' }}
              onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="items">
            <img src={Mail} className="icons" alt="" />
            <label className='lbl-form' for="mail">Correo Electrónico<span className='cat'>*</span></label>
            <input
              type="email"
              placeholder="Ej: camila.sepulveda@gmail.com"
              className="space"
              style={{ fontSize: '0.75em' }}
              onChange={(e) => setMail(e.target.value)} />
          </div>
          <div className="items">
            <img src={Phone} className="icons" alt="" />
            <label className='lbl-form' for="phone">Teléfono<span className='cat'>*</span></label>
            <input
              type="text"
              placeholder="Ej: +569 39425756"
              className="space"
              style={{ fontSize: '0.75em' }}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="items">
            <img src={Direction} className="icons" alt="" />
            <label className='lbl-form' for="direction">Dirección<span className='cat'>*</span></label>
            <input
              type="text"
              placeholder="Ej: Litoral #320, Peñalolen"
              className="space"
              style={{ fontSize: '0.75em' }}
              onChange={(e) => setDirection(e.target.value)}
            />
          </div>
          <p className='text-form-foods'>No se pueden donar Alimentos vencidos</p>
          <div className="items">
            <button className="next-button" type="submit" data-toggle="modal" data-target="#exampleModal">Siguiente</button>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-xl">

                <div className="modal-content">
                  <a className='close-modal' data-dismiss="modal"><img src={close}></img></a>
                  <img className='img-modal' src={Modal} alt="gracias por aportar" />
                  <div className='ctn-modal'>
                    <h1>¡Gracias por tu aporte, nos comunicaremos contigo!</h1>
                    <h4>Te recordamos que las Donaciones de Alimentos no son monetarias.</h4>

                    <div>
                      <h2>Comparte en tus Redes Sociales</h2>
                      <a href="https://www.instagram.com/comida_para_todos_cl/" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} className="instagram" alt="instagram " />
                      </a>
                      <a href="https://www.facebook.com/Comida-para-Todos-100133851719302" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} className="facebook" alt="logo-facebook" />
                      </a>
                      <a href="https://twitter.com/ChileComida" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} className="twitter" alt="logo-twitter" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </form>
    </div>

  );
};

export default FoodsForm;