import React from 'react';
import vinAPI from "../../api/api";
import { withData } from '../../hoc';
import { withRouter } from 'react-router-dom';

const Variable = ({ data: { Name, Description } }) => (
  <div>
    <div>{Name}</div>
    <strong dangerouslySetInnerHTML={{__html: ( Description)}} />
  </div>
) 

const getData = ({ match }) => vinAPI.getVariableVin(match.params.id)

export default withRouter(
  withData( Variable, getData )
);