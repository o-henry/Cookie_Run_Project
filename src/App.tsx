import React from 'react';
import { Reservation } from 'pages';
import { initI18n } from './i18n';

initI18n();

const App: React.FC = () => {
  return <Reservation />;
};

export default App;
