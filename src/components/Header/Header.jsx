import React from 'react';
import { withRouter } from 'react-router-dom';
import './Header.css';
import { connect } from 'react-redux'

const HeaderPresenter = ({
  
}, props) => {
  let text = 'Что нужно сделать?'
  // console.log(match.params.action);
  // if (match.params.action) text = 'В какой комнате?'
  console.log(props);

  return (
    <div className='Header'>
      <span className='Header-Text'>{text}</span>
    </div>
  )
}

export const Header = connect(undefined, undefined)
(withRouter(HeaderPresenter))