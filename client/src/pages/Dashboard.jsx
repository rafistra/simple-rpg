import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroList from '../components/HeroList';
import { getPlayer } from '../fetches/heroFetch';
import '../styles/Dashboard.css'

const Dashboard = () => {
  const [player, setPlayer] = useState([]);
  const [getPlayerTrigger, setGetPlayerTrigger] = useState(true);

  useEffect(() => {
    getPlayer(result => setPlayer(result));
  }, [getPlayerTrigger]);

  return (
    <div className='w-100 h-100'>
      {
        player.map(plyr => {
          const { name, image } = plyr
          return (
            <div >
              <div className='row page-header'>
                <div className='col-sm-12'>
                  <h2 className='page-title'>{name}</h2>
                  <div className="page-title-desc">
                    <p className=''>Forge your powerful warrior { }!</p>
                  </div>
                </div>
              </div>
              <div className='page-body'>
                <div className='row'>
                  <div className='col-sm-4'>
                    <div className='player-img'>
                      <img src={'http://localhost:3000/static/uploads/' + image} alt="" />
                    </div>
                  </div>
                  <div className='col-sm-8 row'>
                    <div>
                      <h4>{name}'s Stats</h4>
                    </div>
                    <div className='row align-top'>
                      <div className='col-sm-6 text-start '>
                        Hahaha
                      </div>
                      <div className='col-sm-6 align-top' >
                        Hahaha
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>


  )
}

export default Dashboard