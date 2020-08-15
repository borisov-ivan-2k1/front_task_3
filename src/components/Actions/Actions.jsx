import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps,mapStateToProps } from './Actions.index';
import { NavLink } from 'react-router-dom';
import './Actions.css';

const ActionsPresenter = ({actions}) => {

  console.log(actions);
  

  return (
    <div className='Actions'>
      {actions.map(action => (
        <NavLink to={`/${action.value}`} className={'Action'}>
          <img src={action.image} className={'Action-Img'}/>
          <div className={'Action-Title'}>{action.title}</div>
        </NavLink>
      ))}
    </div>
  )
}

export const Actions = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionsPresenter)