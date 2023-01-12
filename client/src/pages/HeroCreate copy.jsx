import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addHero } from '../fetches/heroFetch';

const HeroCreate = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [form, setForm] = useState({
    name: '',
    level: 0,
    image: '',
    classId: 0,
    partyId: 0
  });



  const formData = new FormData();
  formData.append('name', form.name);
  formData.append('level', form.level);
  formData.append('image', form.image);
  formData.append('classId', form.classId);
  formData.append('partyId', form.partyId);

  let data = {}

  for (let pair of formData.entries()) {
    data[pair[0]] = pair[1];
  }

  const navigation = useNavigate();

  const submitHandler = () => {
    // console.log(form.image);
    // formData.append('name', form.name);
    // formData.append('level', form.level);
    // formData.append('image', form.image);
    // formData.append('classId', form.classId);
    // formData.append('partyId', form.partyId);

    for(var pair of formData.entries()) {
      // console.log(`${pair[0]}: ${pair[1]}`);
    }
    console.log(data)
    // addHero(form);
    addHero(formData);
    // navigation('/heroes')
  }
  return (
    <div>
      <div>
        <h2 className='page-title'>Create a Hero</h2>
        <div className="page-title-desc align-middle">
          <div className='col-sm-10'>
            <p>Create your superior hero!</p>
          </div>
        </div>
      </div>
      <body className='page-body'>
        <div className='w-75'>
          <div className='mb-3'>
            <label>Name: </label>
            <input
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              type='text'
              className='form-control'>
            </input>
          </div>
          <div className='mb-3'>

            <label>Image: </label>
            <input
              onChange={(e) => setForm({ ...form, image: e.target.files[0]})}
              type='file'
              className='form-control'>
            </input>
          </div>
          <div className='mb-3'>
            <label>Level: </label>
            <input
              onChange={(e) => setForm({ ...form, level: e.target.value })}
              type='text'
              className='form-control'>
            </input>
          </div>
          <div className='mb-3'>
            <label>Class: </label>
            <input
              onChange={(e) => setForm({ ...form, classId: e.target.value })}
              type='text'
              className='form-control'>
            </input>
          </div>
          <div className='mb-3'>
            <label>Party: </label>
            <input
              onChange={(e) => setForm({ ...form, partyId: e.target.value })}
              type='text'
              className='form-control'>
            </input>
          </div>
          <div className='mb-3'>
            <button
              onClick={() => submitHandler()}
              className='btn btn-block btn-primary'>Submit</button>
          </div>
        </div>
      </body>
    </div>
  )
}

export default HeroCreate