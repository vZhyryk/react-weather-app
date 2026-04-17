/** @format */

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

import SearchForm from './components/SearchForm';
import Pending from './components/Pending';
import Error from './components/Error';
import Idle from './components/Idle';
import SuccessRenderEl from './components/SuccessRenderEl';
import MainContainer from './components/MainContainer';


import { getWeatherData } from './service/api-service';

export const App = () => {
  const [requestStatus, setRequestStatus] = useState('Idle');
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  async function handleSubmit() {
    if (searchQuery.trim() === '') {
      return toast.error('You must provide a city or region');
    }

    setRequestStatus('Pending');
    try {
      const data = await getWeatherData(searchQuery);
      setWeatherData(data);
      setRequestStatus('Success');
    } catch (error) {
      setErrorMessage(error.message);
      setRequestStatus('Error');
    } finally {
      setSearchQuery('');
    }
  }

  return (
    <div>
      <SearchForm
        handleSubmit={handleSubmit}
        setQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
    some test
      <MainContainer>
        {requestStatus === 'Idle' && <Idle />}
        {requestStatus === 'Pending' && <Pending />}
        {requestStatus === 'Success' && <SuccessRenderEl data={weatherData} />}
        {requestStatus === 'Error' && <Error errorMessage={errorMessage} />}
      </MainContainer>
    </div>
  );
};
