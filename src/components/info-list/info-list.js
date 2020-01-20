import React from 'react';
import styles from './info-list.module.scss';

const InfoList = ({ list }) => (
  <>
    { list.length !== 0 && (

      <table className="table-striped">
        {list
            .filter(el => (el.Value !== null) && (el.Value.trim() !== '') && (el.Variable !== 'Error Code'))
            .map(el => (
                  <tr key={el.Value}>
                    <td>{el.Variable}</td>
                    <td>{el.Value}</td>
                  </tr>
              ))}
      </table>
    ) } 
  </>
)

export default InfoList;
