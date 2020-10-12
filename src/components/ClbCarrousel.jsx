import React from 'react';
import { collaborators } from '../data/collaborators.json';
// import CafeSanJuan from '../images/cafe-san-juan 1.png';
// import Foodies from '../images/foodies 1.png';
// import Cultiva from '../images/logo-fundacion-cultiva 1.png';
// import Ñam from '../images/logo-niam 1.png';

// const Collaborator = () => {
//   return (
//     <div className="container-collaborators">
//       {collaborators.map((collaborator) => {
//         return <img className="col-sm-2 contorn" key={collaborator.name} src={collaborator.img} />
//       })}
//     </div>
//   );
// }


// {
//   collaborators.map((collaborator) => {
//     return <div className="col-md-4">
//       <div>
//         <a href="https://www.instagram.com/cafesanjuansantiago_oficial/" target="_blank" rel="noopener noreferrer" >
//           <img className="d-block w-100" key={collaborator.name} src={collaborator.img} />
//         </a>
//       </div>
//     </div>
//   })
// }

const ClbCarrousel = () => {
  return (
    <div className='container'>
      <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
          <li data-target="#multi-item-example" data-slide-to="1"></li>
          <li data-target="#multi-item-example" data-slide-to="2"></li>
          <li data-target="#multi-item-example" data-slide-to="3"></li>
          <li data-target="#multi-item-example" data-slide-to="4"></li>
          <li data-target="#multi-item-example" data-slide-to="5"></li>
          <li data-target="#multi-item-example" data-slide-to="6"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">

            <div className="row">
              <div className="col-md-3">
                <div className="">
                  <a href={collaborators[0].url} target="_blank" rel="noopener noreferrer" >
                    <img className="d-block w-1002" src={collaborators[0].img} alt={collaborators[0].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[1].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[1].img} alt={collaborators[1].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[2].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[2].img} alt={collaborators[2].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[3].url} target="_blank" rel="noopener noreferrer" >
                    <img className="d-block w-1002" src={collaborators[3].img} alt={collaborators[3].name} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="carousel-item">
            <div className="row">

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[4].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[4].img} alt={collaborators[4].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[5].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[5].img} alt={collaborators[5].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3">
                <div className="">
                  <a href={collaborators[6].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[6].img} alt={collaborators[6].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[7].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[7].img} alt={collaborators[7].name} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="carousel-item">
            <div className="row">

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[8].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[8].img} alt={collaborators[8].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3">
                <div className="">
                  <img className="d-block w-1002" src={collaborators[9].img} alt={collaborators[9].name} />
                </div>
              </div>

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[10].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[10].img} alt={collaborators[10].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[11].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[11].img} alt={collaborators[11].name} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="carousel-item">
            <div className="row">

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[12].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[12].img} alt={collaborators[12].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3">
                <div className="">
                  <a href={collaborators[13].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[13].img} alt={collaborators[13].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[14].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[14].img} alt={collaborators[14].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[15].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[15].img} alt={collaborators[15].name} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="carousel-item">
            <div className="row">

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[16].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[16].img} alt={collaborators[16].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3">
                <div className="">
                  <a href={collaborators[17].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[17].img} alt={collaborators[17].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                   <a href={collaborators[18].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[18].img} alt={collaborators[18].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[19].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[19].img} alt={collaborators[19].name} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="carousel-item">
            <div className="row">

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[20].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[20].img} alt={collaborators[20].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3">
                <div className="">
                  <a href={collaborators[21].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[21].img} alt={collaborators[21].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[22].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[22].img} alt={collaborators[22].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[23].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[23].img} alt={collaborators[23].name} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="carousel-item">
            <div className="row">

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[24].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[24].img} alt={collaborators[24].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3">
                <div className="">
                  <a href={collaborators[25].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[25].img} alt={collaborators[25].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[26].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[26].img} alt={collaborators[26].name} />
                  </a>
                </div>
              </div>

              <div className="col-md-3 clearfix d-none d-md-block">
                <div className="">
                  <a href={collaborators[27].url} target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={collaborators[27].img} alt={collaborators[27].name} />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div >
  );
}
export default ClbCarrousel;