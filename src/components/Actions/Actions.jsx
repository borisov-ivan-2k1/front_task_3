import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps,mapStateToProps } from './Actions.index';

const ActionsPresenter = ({actions}) => {

  console.log(actions);
  

  return (
    <div>

    </div>
  )
}

export const Actions = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionsPresenter)