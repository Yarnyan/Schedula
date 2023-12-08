import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
export default function Add() {
  return (
    <Link to='/reception'>
        <AddIcon fontSize='large'/>
    </Link>
  )
}
