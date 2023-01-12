import React, { useState, useEffect } from 'react';
import { getHeroes, removeHero } from '../fetches/heroFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Util.css'
import { Link } from 'react-router-dom';
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { GiIronCross, GiMagnifyingGlass } from "react-icons/gi";

// import { BiDotsVerticalRounded } from "react-icons/bs";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBBtn } from 'mdb-react-ui-kit';

const Hero = () => {
  const [heroes, setHeroes] = useState([]);
  const [getHeroTrigger, setGetHeroTrigger] = useState(true);

  useEffect(() => {
    getHeroes(result => setHeroes(result));
  }, [getHeroTrigger]);

  const deleteHandler = id => {
    removeHero(id, (result) => {
      setGetHeroTrigger(result);
    });
    getHeroes(result => {
      setHeroes(result);
    })
  }

  return (
    <div className='w-100 h-100'>
      <div className='row page-header'>
        <div className='col-sm-8'>
          <h2 className='page-title'>Heroes</h2>
          <div className="page-title-desc">
            <p className=''>Here the list of Heroes of Kvatch</p>
          </div>
        </div>
        <div className='col-sm-4 page-action'>
          <div style={{ display: 'flex' }}>
            <input
              type='text'
              className='form-control'
              placeholder='Search'>
            </input>
            <Link
              className='buttonA'><GiMagnifyingGlass /></Link>
            <Link to='/heroes/create' className='buttonA'><GiIronCross /></Link>
          </div>
        </div>
      </div>
      <div className='page-body'>
        <div className="text-center">
          <div className="row row-cols-6">
            {
              heroes.length > 0 ?
                heroes.map(hero => {
                  const vocation = hero.class.name;
                  const { id, name, level, image, } = hero
                  return (
                    <div className="col my-3">
                      <div className="card">
                        <Link to={`/heroes/stats/${id}`}>
                          <img crossOrigin='anonymous' src={'http://localhost:3000/static/uploads/' + image} alt="" className="card-img-top" style={{ aspectRatio: '1/1' }} />
                        </Link>
                        <div className="card-body" key={id}>
                          <div className='row'>
                            <div className='col-2'></div>
                            <h5 className="card-title col-8">{name}</h5>
                            <Link className="btn-group dropend col-2">
                              <h6 data-bs-toggle="dropdown"><BiDotsVerticalRounded ></BiDotsVerticalRounded></h6>
                              <ul className="dropdown-menu">
                                <li><Link class="dropdown-item" href="#"><BsFillPencilFill />   Update</Link></li>
                                <li><Link class="dropdown-item"
                                  onClick={() => {
                                    deleteHandler(+id)
                                    window.location.reload(true)
                                  }}><BsFillTrashFill />   Kill</Link></li>
                              </ul>
                            </Link>
                          </div>
                          <h6 className="card-text">{vocation}</h6>
                          <h6 className="card-text">Level {level}</h6>
                        </div>
                      </div>
                    </div>
                  )
                }) : <h2>Loading...</h2>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero