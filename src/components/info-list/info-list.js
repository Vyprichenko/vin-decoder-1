import React from 'react';
import PropTypes from 'prop-types';

const InfoList = ({ list }) => {
  
  return (
    <>
    { list && list.length !== 0 && (

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
}

InfoList.propTypes = {
  list: PropTypes.array,
}

InfoList.defaultProps = {
  list: [],
}

export default InfoList;
