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

  // const [stat, setStat] = useState({
  //   name: '',
  //   level: '',
  //   class: {
  //     name: ''
  //   },
  //   heroStat: {
  //     hp: 0,
  //     mgc: 0,
  //     stam: 0,
  //     str: 0,
  //     def: 0,
  //     int: 0,
  //     dex: 0,
  //     char: 0
  //   }
  // });

  const [form, setForm] = useState({
    name: '',
    level: '',
    class: {
      name: ''
    },
    heroStat: {
      hp: 0,
      mgc: 0,
      stam: 0,
      str: 0,
      def: 0,
      int: 0,
      dex: 0,
      char: 0
    }
  });

  // const [form, setForm] = useState({
  //   name: '',
  //   level: 0,
  //   image: null,
  //   classId: 0,
  //   partyId: 2,
  // });

  let newHp = form.heroStat.hp;
  let newMgc = form.heroStat.mgc;
  let newSta = form.heroStat.stam;
  let newStr = form.heroStat.str;
  let newDef = form.heroStat.def;
  let newInt = form.heroStat.int;
  let newDex = form.heroStat.dex;
  let newCha = form.heroStat.char;

  const [formStats, setFormStats] = useState({
    hp: 50,
    mgc: 50,
    stam: 50,
    str: 50,
    def: 50,
    int: 50,
    dex: 50,
    char: 50,
  })

  useEffect(() => {
    getHeroStats(+id, result => setForm({
      name: result.name,
      level: result.level,
      heroStat: {
        hp: result.heroStat.hp,
        mgc: result.heroStat.mgc,
        stam: result.heroStat.stam,
        str: result.heroStat.str,
        def: result.heroStat.def,
        int: result.heroStat.int,
        dex: result.heroStat.dex,
        char: result.heroStat.char,
      }
    }));
  }, []);

  useEffect(() => {
    getClasses(result => setClasses(result));
  }, [getClassTrigger]);

  const submitHandler = () => {
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('level', form.level);
    formData.append('image', form.image);
    formData.append('classId', form.classId);
    // formData.append('partyId', form.partyId);
    // console.log(formStats.hp)

    formData.append('hp', formStats.hp);
    formData.append('mgc', formStats.mgc);
    formData.append('stam', formStats.stam);
    formData.append('str', formStats.str);
    formData.append('def', formStats.def);
    formData.append('int', formStats.int);
    formData.append('dex', formStats.dex);
    formData.append('char', formStats.char);

    // addHero(form);
    updateHero(+id, formData);
    console.log(formData)
    navigation('/heroes')
  }

  let startingPoints = 3200;
  let statPoints = (Number(formStats.hp) + Number(formStats.mgc) + Number(formStats.stam) + Number(formStats.str) + Number(formStats.def) + Number(formStats.int) + Number(formStats.dex) + Number(formStats.char));
  let needPoints = startingPoints - statPoints;

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
                      // value={form.classId}
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
              <label className='col'>Health: {newHp}</label>
              <label className='col text-end'>{formStats.hp}</label>
            </div>
            <input
              value={formStats.hp}
              onChange={(e) => setFormStats({ ...formStats, hp: (e.target.value) })}
              type='range'
              className='form-control'
              min='50'
              max='400'
              step='1'>
            </input>
          </div>
          <div className='mb-3'>
            <div className='row'>
              <label className='col'>Magic: {newMgc}</label>
              <label className='col text-end'>{formStats.mgc}</label>
            </div>
            <input
              value={formStats.mgc}
              onChange={(e) => setFormStats({ ...formStats, mgc: e.target.value })}
              type='range'
              className='form-control'
              min='50'
              max='400'
              step='1'>
            </input>
          </div>
          <div className='mb-3'>
            <div className="row">
              <label className='col'>Stamina: {newSta}</label>
              <label className='col text-end'>{formStats.stam}</label>
            </div>
            <input
              value={formStats.stam}
              onChange={(e) => setFormStats({ ...formStats, stam: e.target.value })}
              type='range'
              className='form-control'
              min='50'
              max='400'
              step='1'>
            </input>
          </div>
          <div className='mb-3'>
            <div className="row">
              <label className='col'>Strength: {newStr}</label>
              <label className='col text-end'>{formStats.str}</label>
            </div>
            <input
              value={formStats.str}
              onChange={(e) => setFormStats({ ...formStats, str: e.target.value })}
              type='range'
              className='form-control'
              min='50'
              max='400'
              step='1'>
            </input>
          </div>
          <div className='mb-3'>
            <div className="row">
              <label className='col'>Defend: {newDef}</label>
              <label className='col text-end'>{formStats.def}</label>
            </div>
            <input
              value={formStats.def}
              onChange={(e) => setFormStats({ ...formStats, def: e.target.value })}
              type='range'
              className='form-control'
              min='50'
              max='400'
              step='1'>
            </input>
          </div>
          <div className='mb-3'>
            <div className="row">
              <label className='col'>Intelligence: {newInt}</label>
              <label className='col text-end'>{formStats.int}</label>
            </div>
            <input
              value={formStats.int}
              onChange={(e) => setFormStats({ ...formStats, int: e.target.value })}
              type='range'
              className='form-control'
              min='50'
              max='400'
              step='1'>
            </input>
          </div>
          <div className='mb-3'>
            <div className='row'>
              <label className='col'>Dexterity: {newDex}</label>
              <label className='col text-end'>{formStats.dex}</label>
            </div>
            <input
              value={formStats.dex}
              onChange={(e) => setFormStats({ ...formStats, dex: e.target.value })}
              type='range'
              className='form-control'
              min='50'
              max='400'
              step='1'>
            </input>
          </div>
          <div className='mb-3'>
            <div className='row'>
              <label className='col'>Charisma: {newCha}</label>
              <label className='col text-end'>{formStats.char}</label>
            </div>
            <input
              value={formStats.char}
              onChange={(e) => setFormStats({ ...formStats, char: e.target.value })}
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