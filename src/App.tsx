import React from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import Counter from 'components/Counter';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Counter />
    </>
  );
};

export default App;
