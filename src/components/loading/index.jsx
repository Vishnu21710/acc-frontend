// src/components/Loading.js
import { LoaderCircle } from 'lucide-react';
import React from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';

TopBarProgress.config({
  barColors: {
    "0": "#ff0000",
    "1.0": "#00ff00"
  },
  shadowBlur: 5
});

const Loading = () => {
  return (
    <div style={styles.container}>
      <TopBarProgress />
      <p><LoaderCircle className='h-10 w-10 animate-spin'/></p>
      <p className='my-2 text-gray-700'>Please wait, starting the server. This may take up to a minute.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center'
  }
};

export default Loading;
