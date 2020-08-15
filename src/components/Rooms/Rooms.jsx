import React from 'react';
import { mapStateToProps } from './Rooms.index';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import './Rooms.css'

const RoomsPresenter = ({
  rooms,
  roomsIds,
  match
}) => {

  return (
    <div className='Rooms'>
      {roomsIds && roomsIds.map(rId => (
        
          <NavLink to={`/${match.params.action}/${rooms[rId].value}`} className={'Room'}>
            <img src={rooms[rId].image} className={'Room-Img'}/>
            <div className={'Room-Title'}>{rooms[rId].title}</div>
          </NavLink>
       
      ))}
    </div>
  )
}

export const Rooms = connect(
  mapStateToProps,
  undefined
)(withRouter(RoomsPresenter));

