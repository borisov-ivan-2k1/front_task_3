import React from 'react';
import { withRouter } from 'react-router-dom';
import './Header.css';
import { connect } from 'react-redux'

const HeaderPresenter = (props) => {
  let text = 'Что нужно сделать?'
 
  if (props.location.pathname.length > 1) text = 'В какой комнате?'
  

  return (
    <div className='Header'>
      <span className='Header-Text'>{text}</span>
    </div>
  )
}

export const Header = connect(undefined, undefined)
(withRouter(HeaderPresenter))