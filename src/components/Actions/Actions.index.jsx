import { bindActionCreators } from 'redux'

export const mapStateToProps = (state) => ({
  actions: state.store.actions
})

export const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)