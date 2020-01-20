import React from 'react';
import vinAPI from "../../api/api";
import { withData } from '../../hoc';
import { withRouter } from 'react-router-dom';
import { compose } from "redux";

const Variable = props => (
  <>
    {(props.data) ? (
      <div className="card card_no-hover">
        <div className="card-name">{props.data.Name}</div>
        <div className="card-description" dangerouslySetInnerHTML={{__html: ( props.data.Description)}} />
      </div>
    ) : (
      <div>Not found</div>
    )}
  </>
)

const getData = ({ match }) => vinAPI.getVariableVin(match.params.id);

export default compose(
  withRouter,
  withData(getData)
)(Variable);