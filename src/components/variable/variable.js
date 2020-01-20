import React from 'react';
import vinAPI from "../../api/api";
import { withData } from '../../hoc';
import { withRouter } from 'react-router-dom';
import { compose } from "redux";

const Variable = ({ data }) => {
  return (
    <>
      {(data) ? (
        <div className="card card_no-hover">
          <div className="card-name">{data.Name}</div>
          <div className="card-description" dangerouslySetInnerHTML={{__html: ( data.Description)}} />
        </div>
      ) : (
        <div>Not found</div>
      )}
    </>
  )
}

const getData = ({ match }) => vinAPI.getVariableVin(match.params.id);

export default compose(
  withRouter,
  withData(getData)
)(Variable);