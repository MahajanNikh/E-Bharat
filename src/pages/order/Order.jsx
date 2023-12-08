import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

const Order = () => {
  const context = useContext(myContext)
  const { state, color } = context;
  return (
    <Layout>
      <h1>Name: {state.name}</h1>
      <h2>RollNo: {state.rollno}</h2>
      <h3>color: {color}</h3>
    </Layout>
  )
}

export default Order