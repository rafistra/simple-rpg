import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addHero, addHeroStats, getHeroStats, updateHero } from '../fetches/heroFetch';
import { getClasses } from '../fetches/classFetch';
import { useParams } from 'react-router-dom';

const HeroUpdate = () => {
  const [classes, setClasses] = useState([]);
  const [getClassTrigger, setGetClassTrigger] = useState(true);
  const params = useParams();
  const navigation = useNavigate();

  const { id } = params;

  const [form, setForm] = useState({
    name: '',
    level: 0,
    image: null,
    classId: 0,
    hp: 0,
    mgc: 0,
    stam: 0,
    str: 0,
    def: 0,
    int: 0,
    dex: 0,
    char: 0
  });

  useEffect(() => {
    getHeroStats(+id, result => setForm({
      name: result.name,
      level: result.level,
      image: result.image,
      classId: result.classId,
      hp: result.heroStat.hp,
      mgc: result.heroStat.mgc,
      stam: result.heroStat.stam,
      str: result.heroStat.str,
      def: result.heroStat.def,
      int: result.heroStat.int,
      dex: result.heroStat.dex,
      char: result.heroStat.char
    }));
  }, [id]);

  useEffect(() => {
    getClasses(result => setClasses(result));
  }, [getClassTrigger]);

  const submitHandler = () => {
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('level', form.level);
    formData.append('image', form.image);
    formData.append('classId', form.classId);
    formData.append('hp', form.hp);
    formData.append('mgc', form.mgc);
    formData.append('stam', form.stam);
    formData.append('str', form.str);
    formData.append('def', form.def);
    formData.append('int', form.int);
    formData.append('dex', form.dex);
    formData.append('char', form.char);
    

    // addHero(form);
    updateHero(+id, formData);
    console.log(formData)
    navigation('/heroes')
  }

  let startingPoints = 3200;
  // let statPoints = (Number(formStats.hp) + Number(formStats.mgc) + Number(formStats.stam) + Number(formStats.str) + Number(formStats.def) + Number(formStats.int) + Number(formStats.dex) + Number(formStats.char));
  // let needPoints = startingPoints - statPoints;

  return (
    <div className='w-100 h-100'>
      <div className='row page-header'>
        <div className='col-sm-12'>
          <h2 className='page-title'>Modify Hero</h2>
          <div className="page-title-desc">
            <p className=''>Forge your powerful warrior!</p>
          </div>
        </div>
      </div>
      <div className='page-body'>
        <div>
          <h4 className='mb-3'>Basic Information</h4>
        </div>
        <div className='w-100'>
          <div className='mb-3'>
            <label>Name: </label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              type='text'
              className='form-control'>
            </input>
          </div>
          <div className='mb-3'>
            <label>Image: </label>
            <input
              // value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
              type='file'
              className='form-control'>
            </input>
          </div>
          <div className='mb-3'>
            <label>Level: </label>
            <input
              value={form.level}
              onChange={(e) => setForm({ ...form, level: e.target.value })}
              type='text'
              className='form-control'>
            </input>
          </div>
          <div className='row'>
            <label>Class: </label>
            {
              classes.map(clas => {
                const { id, name } = clas
                return (
                  <div className='mb-3 col'>
                    <input
                      name="inlineRadioOptions" id={id}
                      className="form-check-input"
                      type="radio"
                      value={id}
                      onChange={(e) => setForm({ ...form, classId: e.target.value })} />
                    <label className="form-check-label" for="inlineRadio1">{name}</label>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='page-body' style={{ marginTop: '20px' }}>
        <div>
          <h4 className='mb-3'>Basic Information</h4>
        </div>
        <div className='w-100'>
          <div className='mb-3'>
            <label>Points Left:</label>
          </div>
          <div className='mb-3'>
          </div>
          <div className='mb-3'>
            <div className='row'>
              <label className='col'>Health: </label>
              <label className='col text-end'>{form.hp}</label>
            </div>
            <input
              value={form.hp}
              onChange={(e) => setForm({ ...form, hp: (e.target.value) })}
              type='range'
              className='form-control'
              min='50'
              max='400'
              step='1'>
            </input>
          </div>
          <div className='mb-3'>
            <div className='row'>
              <label className='col'>Magic: </label>
              <label className='col text-end'>{form.mgc}</label>
            </div>
            <input
              value={form.mgc}
              onChange={(e) => setForm({ ...form, mgc: e.target.value })}
              type='range'
              className='form-control'
              min='50'
              max='400'
              step='1'>
            </input>
          </div>
          <div className='mb-3'>
            <div className="row">
              <label className='col'>Stamina: </label>
              <label className='col text-end'>{form.stam}</label>
            </div>
            <input
              value={form.stam}
              onChange={(e) => setForm({ ...form, stam: e.target.value })}
              type='range'
              className='form-control'
              min='50'
              max='400'
              step='1'>
            </input>
          </div>
          <div className='mb-3'>
            <div className="row">
              <label className='col'>Strength: </label>
              <label className='col text-end'>{form.str}</label>
            </div>
            <input
              value={form.str}
              onChange={(e) => setForm({ ...form, str: e.target.value })}
              type='range'
              className='form-control'
              min='50'
              max='400'
              step='1'>
            </input>
          </div>
          <div className='mb-3'>
            <div className="row">
              <label className='col'>Defend: </label>
              <label className='col text-end'>{form.def}</label>
            </div>
            <input
              value={form.def}
              onChange={(e) => setForm({ ...form, def: e.target.value })}
              type='range'
              className='form-control'
              min='50'
              max='400'
              step='1'>
            </input>
          </div>
          <div className='mb-3'>
            <div className="row">
              <label className='col'>Intelligence: </label>
              <label className='col text-end'>{form.int}</label>
            </div>
            <input
              value={form.int}
              onChange={(e) => setForm({ ...form, int: e.target.value })}
              type='range'
              className='form-control'
              min='50'
              max='400'
              step='1'>
            </input>
          </div>
          <div className='mb-3'>
            <div className='row'>
              <label className='col'>Dexterity: </label>
              <label className='col text-end'>{form.dex}</label>
            </div>
            <input
              value={form.dex}
              onChange={(e) => setForm({ ...form, dex: e.target.value })}
              type='range'
              className='form-control'
              min='50'
              max='400'
              step='1'>
            </input>
          </div>
          <div className='mb-3'>
            <div className='row'>
              <label className='col'>Charisma: </label>
              <label className='col text-end'>{form.char}</label>
            </div>
            <input
              value={form.char}
              onChange={(e) => setForm({ ...form, char: e.target.value })}
              type='range'
              className='form-control'
              min='50'
              max='400'
              step='1'>
            </input>
          </div>
          <div className='mb-3'>
            <button
              onClick={() => submitHandler()}
              className='btn btn-block btn-primary'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroUpdate