import React from 'react';
import vinAPI from "../../api/api";
import { withData } from '../../hoc';
import { withRouter } from 'react-router-dom';
import { compose } from "redux";

const Variables = ({ history, data }) => {
  
  const openVariable = (id) => {
    history.push('/variables/' + id)
  }

  const renderLis = () => {
     return data.results.map(el => (
                          // Почему бы здесь для формирования ссылки не применить
                          // Link, или NavLink, как это у тебя сделано в компоненте Header?
                          // Если элемент ведёт себя как ссылка, он должен быть представлен
                          // элементом <a> (в большинстве случаев), это важный момент.
                          // Это и семантика, и фокусировка (навигация Tab-ом) и т. п.
                          <li key={el.Name} className="card" onClick={() => openVariable(el.ID)}>
                            <div className="card-name">{el.Name}</div>
                            <div className="card-description" dangerouslySetInnerHTML={{__html: el.Description}}/>
                          </li>
                        ))
  }

  return (
    <ul> 
      { renderLis() } 
    </ul>
  )
}

// Не принципиально (вообще вопрос спорный),
// но я бы всё-таки оборачивание Variable в HOC withData(getData)
// делал бы не в компонентах, а вынес бы в отдельный контейнер.
// Это если рассматривать компоненты как чистую презентацию,
// а контейнеры как слой, где компоненты связываются с данными,
// и не обязательно здесь замешан Redux, речь о любых источниках данных.
const getData = () => vinAPI.getVehicleVariableList()

export default compose(
  withRouter,
  withData( getData )
)(Variables);