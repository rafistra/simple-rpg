import React, { useState, useEffect } from 'react';
import { getPartiesWithHeroes } from '../fetches/partyFetch';

const Party = () => {
    const [parties, setParties] = useState([]);
    const [getPartyTrigger, setGetPartyTrigger] = useState(true);

    useEffect(() => {
        getPartiesWithHeroes(result => setParties(result));
    }, [getPartyTrigger]);


    return (
        <div className='w-100 h-100'>
            <div className='row page-header'>
                <div className='col-sm-12'>
                    <h2 className='page-title'>Parties</h2>
                    <div className="page-title-desc">
                        <p className=''>Forge your powerful warrior!</p>
                    </div>
                </div>
            </div>
            <div>
                {
                    parties.length > 0 ?
                        parties.map(party => {
                            const { id, name, image } = party
                            return (
                                <div className='mb-3 card-horizontal' key={id}>
                                    <div className="row g-0">
                                        <div className='col-md-2'>
                                            <img src={image} style={{ aspectRatio: '1/1', width: '180px', height: '180px' }} />
                                        </div>
                                        <div className='col-md-10'>
                                            <div className='card-body'>
                                                <h5 className="card-title">{name}</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        : <h2>Loading ...</h2>
                }

            </div>
        </div>
    )
}

export default Party