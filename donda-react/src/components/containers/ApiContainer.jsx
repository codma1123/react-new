import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as counter from 'store/actions/counter';
import * as api from 'store/actions/api';

const ApiContainer = ({api, counter, dispatchApiUpdate, dispatchCouterUpdate}) => {
  const getDataApi = async (e) => {
    dispatchCouterUpdate()

    if(api.status) {
      dispatchApiUpdate()
    }
  }

  componentDidMount = () => {
    if(api.data) return
    dispatchCouterUpdate()
    dispatchApiUpdate(counter)
  }

  let content, button = null

  if(api.status) {
    content = <Content api={api} counter={counter}/>
    button = <Button api={api} onClickHandler={getDataApi} />
  } else if(api.error) {
    content = <div>error...</div>
  } else {
    content = <div>loading...</div>
  }

  return (
    <div>
      {button}
      {content}
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter.number,
  api: state.api
})

const mapDispatchToProps = dispatch => ({
  dispatchApiUpdate: id => (dispatch(api.getDataSample(id))),
  dispatchCounterUpdate: () => (dispatch(counter.increase()))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiContainer)