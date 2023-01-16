import React, { useState, useEffect } from 'react';
import { getClasses } from '../fetches/classFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Util.css'

const ClassList = () => {
    const [classes, setClasses] = useState([])
    const [getClassTrigger, setGetClassTrigger] = useState(true);

    useEffect(() => {
        getClasses(result => setClasses(result));
    }, [getClassTrigger]);

    return (
        <div className='row row-cols-6'>
            {
                classes.length > 0 ?
                    classes.map(clas => {
                        const { id, name, image } = clas
                        return (
                            <div className="col my-3">
                                <div className="card">
                                    <div style={{padding: '30px'}}>
                                        <img crossOrigin='anonymous' src={'http://localhost:3000/static/uploads/' + image} alt="" className="card-img-top img-responsive" style={{ aspectRatio: '1/1' }} />
                                    </div>
                                    <div className="card-body" key={id}>
                                        <div className='row'>
                                            <h6 className="card-title">{name}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <h2>Loading...</h2>
            }
        </div>
    )
}
export default ClassList