import React from 'react'
import { useDispatch } from 'react-redux'
import {actionCreators} from './state/index';
import { bindActionCreators } from 'redux'

const Shop = () => {
  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div className='container'>
    <h2>Deposit/Withdraw Money</h2>
      {/* <button className='btn btn-secondary mx-3'onClick={()=>dispatch(actionCreator.withdrawMoney(100))}>-</button>
      Update Your Balance
      <button className='btn btn-secondary mx-3'onClick={()=>dispatch(actionCreator.depositMoney(100))}>+</button> */}
      <button className='btn btn-secondary mx-3'onClick={()=>withdrawMoney(100)}>-</button>
      Update Your Balance
      <button className='btn btn-secondary mx-3'onClick={()=>depositMoney(100)}>+</button>
    </div>
  )
}

export default Shop
