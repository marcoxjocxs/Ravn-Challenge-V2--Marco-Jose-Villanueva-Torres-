
import {Route,Routes} from 'react-router-dom'
import People from './View/People/people'; 
import './App.css';
import './Assets/scss/layout.scss'

import HeaderLayout from './Components/Layouts/header-layout';
import LeftNavLayout from './Components/Layouts/left-nav-layout';
import { useQuery } from '@apollo/client';
import { ALLPEOPLE_QUERY } from './Querys/allPeople';
import { useEffect, useState } from 'react';

function App() {
  
  const {data, loading, error} = useQuery(ALLPEOPLE_QUERY,{ variables:{}});
  const [completeData, setCompleteData] =useState(data)
  useEffect(()=>{
    setCompleteData(data?.allPeople.people.slice(0,5))
  },[data])

  setTimeout(() => {
    setCompleteData(data?.allPeople.people)
  }, 5000);

  return (
    <div>
    <HeaderLayout/>
    <div className='left-nav'>
    <LeftNavLayout data={completeData} loading={loading} error={error}></LeftNavLayout>
    </div>
    <Routes>
        <Route path="/:id" element={<People/>}/>
    </Routes>
    </div>
  );
}

export default App;
