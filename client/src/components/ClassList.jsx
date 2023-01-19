import React, { useState, useEffect } from 'react';
import { getClasses, deleteClass } from '../fetches/classFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Util.css'
import { Link } from 'react-router-dom';
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { GiIronCross, GiMagnifyingGlass, GiBoltShield, GiShakingHands } from "react-icons/gi";

const ClassList = () => {
    const [classes, setClasses] = useState([])
    const [getClassTrigger, setGetClassTrigger] = useState(true);

    useEffect(() => {
        getClasses(result => setClasses(result));
    }, [getClassTrigger]);

    const deleteHandler = id => {
        deleteClass(id, (result) => {
            setGetClassTrigger(result);
        });
        getClasses(result => {
            setClasses(result);
        })
    }

    return (
        <div className='row row-cols-6'>
            {
                classes.length > 0 ?
                    classes.map(clas => {
                        const { id, name, image } = clas
                        return (
                            <div className="col my-3">
                                <div className="card">
                                    <div style={{ padding: '30px' }}>
                                        <img crossOrigin='anonymous' src={'http://localhost:3000/static/uploads/' + image} alt="" className="card-img-top img-responsive" style={{ aspectRatio: '1/1' }} />
                                    </div>
                                    <div className="card-body" key={id}>
                                        <div className='row'>
                                            <div className='col-2'></div>
                                            <h6 className="card-title col-8">{name}</h6>
                                            <Link className="btn-group dropend col-2">
                                                <h6 data-bs-toggle="dropdown"><BiDotsVerticalRounded ></BiDotsVerticalRounded></h6>
                                                <ul className="dropdown-menu">
                                                    <li><Link class="dropdown-item" to={`/classes/update/${id}`}><BsFillPencilFill />   Change</Link></li>
                                                    <li><Link class="dropdown-item"
                                                        onClick={() => {
                                                            deleteHandler(+id)
                                                            window.location.reload(true)
                                                        }}><BsFillTrashFill />   Delete</Link></li>
                                                </ul>
                                            </Link>
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