import { bindActionCreators } from 'redux';

export const mapStateToProps = (state, props) => {
  const roomsIds = state.store.actions.find(action => action.value ===  props.match.params.action)?.rooms
  return {
    rooms: state.store.rooms,
    roomsIds
  }
}


