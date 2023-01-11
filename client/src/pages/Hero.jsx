import React, { useState, useEffect } from 'react';
import { getHeroes } from '../fetches/heroFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [heroes, setHeroes] = useState([]);
  const [getHeroTrigger, setGetHeroTrigger] = useState(true);

  useEffect(() => {
    getHeroes(result => setHeroes(result));
  }, [getHeroTrigger]);


  return (
    <div>
      <div>
        <h2 className='page-title'>Heroes</h2>
        <p className='page-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dignissimos vero ipsam laudantium quo libero aut non ut esse odio et eligendi fugit, blanditiis necessitatibus fugiat qui officiis rerum. Cum.</p>
      </div>
      <body className='page-body'>
        <div className="text-center">
          <div className="row row-cols-6">
            {
              heroes.length > 0 ?
                heroes.map(hero => {
                  const vocation = hero.class.name;
                  const { id, name, level, image, } = hero
                  return (
                    <div className="col my-3">
                      <Link to={`/heroes/stats/${id}`}>
                        <div className="card">
                          <img src={image} alt="" className="card-img-top" />
                          <div className="card-body" key={id}>
                            <h5 className="card-title">{name}</h5>
                            <h6 className="card-text">{vocation}</h6>
                            <h6 className="card-text">Level {level}</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                }) : <h2>Loading...</h2>
            }
          </div>
        </div>
      </body>
    </div>
  )
}

export default Hero