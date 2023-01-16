import React from 'react'
import ClassList from '../components/ClassList'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import '../styles/Util.css'

const Class = () => {
  return (
    <div className='w-100 h-100'>
      <div className='row page-header'>
        <div className='col-sm-8'>
          <h2 className='page-title'>Classes</h2>
          <div className="page-title-desc">
            <p className=''>Forge your powerful warrior!</p>
          </div>
        </div>

        <div className='page-action col-sm-4 text-end' >
          <Link to='/classes/create' className='buttonA' style={{ textDecoration: 'none'}}>Create Custom Class</Link>
        </div>
      </div>
      <div className='page-body'>
        <div className="text-center">
          <ClassList />
        </div>
      </div>

    </div>
  )
}

export default Class