import React from 'react';
import { collaborators } from '../data/collaborators.json';
import '../styles/collaborationview.css'

const Collaborator = () => {
  return (
    <div className="container-collaborators">
      {collaborators.map((collaborator) => {
        return <img className="col-sm-2 contorn" key={collaborator.name} src={collaborator.img} />
      })}
    </div>
  );
}

export default Collaborator;