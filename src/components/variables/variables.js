import React from 'react';
import vinAPI from "../../api/api";
import { withData } from '../../hoc';
import { withRouter } from 'react-router-dom';

const Variables = ({ history, data }) => {

  const openVariable = (id) => {
    history.push('/variables/' + id)
  }

  const renderLis = () => {
     return data.results.filter(el => el.Value !== null)
                        .map(el => (
                          <li className="card" onClick={() => openVariable(el.ID)}>
                            <div>{el.Name}</div>
                            <strong dangerouslySetInnerHTML={{__html: el.Description}}/>
                          </li>
                        ))
  }

  return (
    <ol> 
      { renderLis() } 
    </ol>
  )
}

export default withData( 
  withRouter(Variables), 
  vinAPI.getVehicleVariableList.bind(vinAPI) 
);