import React from 'react'
import Card from './components/Card'
export default function Home() {

  return (
    <>
      <div className='p-5 text-2xl font-bold text-center'>
        Welcome to DBT
      </div>
      <div className='flex justify-around py-20'>
        <Card title={'Enter Student'} contents={'Click here to Enter students details'} to={'/Create'} />
        <Card title={'All Student'} contents={'Click here to Display all students details'} to={'/All'} />
      </div>
    </>
  )
}
