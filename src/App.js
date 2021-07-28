import React, { lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getData } from './actions/index';
const WeatherByDay = lazy(() => import('./components/WeatherByDay'));
const WeatherByWeek = lazy(() => import('./components/WeatherByWeek'));
const WeatherByHour = lazy(() => import('./components/WeatherByHour'));
const SideBar = lazy(() => import('./components/SideBar'));



function App() {

  const dispatch = useDispatch();
  const error = useSelector(state => state.weatherData.error);
  const [mode, setMode] = useState([
    {
      index: 1,
      name: 'Today',
      value: true
    },
    {
      index: 2,
      name: 'Week',
      value: false
    },
    {
      index: 3,
      name: 'Hour',
      value: false
    },

  ])

  const handleChangeTab = (el) => {
    console.log(el);
    setMode(mode.map(item => item.index === el.index ? { ...item, value: true } : { ...item, value: false }))
  }

  useEffect(() => {
    dispatch(getData(21.0245, 105.8412)) //Hanoi
  }, [])

  return (
    <>
      <div className=" container-fluid p-5 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#d6d7da' }}>
        <div className="w-100">
          <div className="row">
            <div className="col-md-3 col-sm-12 bg-white p-5">
              <Suspense fallback={<div className="text-center my-5">Loading...</div>}>
                <SideBar />
              </Suspense>
            </div>
            <div className="col-md-9 col-sm-12 p-5" style={{ backgroundColor: '#f6f6f8' }}>
              <div className="wrap">
                {error !== "" &&
                  <div class="alert alert-danger" role="alert">
                    {error}
                  </div>
                }
                <div className="d-flex align-item-center justify-content-between">
                  <ul className="nav d-flex align-item-center justify-content-start fs-5 fw-bold">
                    {mode.map((el, index) =>
                      <li key={index} role="button" className={`nav-item m-2 ${el.value ? 'border-bottom border-3 border-dark' : 'text-muted'}`} onClick={() => handleChangeTab(el)}>{el.name}</li>
                    )}
                  </ul>
                  <img className="rounded-circle" src="https://i0.wp.com/i.pinimg.com/originals/89/54/38/895438247efa788551d1919d44f176ca.png" alt="avatar" width='50' />
                </div>
                <Suspense fallback={<div className="text-center my-5"><img src="/img/loading.gif" alt="Loading" /></div>}>
                  {mode.map((el, index) =>
                    el.value === true && el.name === 'Week' ? <WeatherByWeek key={index} />
                      : el.value === true && el.name === 'Hour' ? <WeatherByHour key={index} />
                        : el.value === true && el.name === 'Today' ? <WeatherByDay key={index} />
                          : ''
                  )}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
