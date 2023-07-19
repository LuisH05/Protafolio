import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom';
import Home from '../components/Home';

export default function Main() {
  return (
    <>
    <Navbar/>
    <Home />
    </>
  )
}
