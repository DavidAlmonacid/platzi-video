import { Route, Routes } from 'react-router-dom';
import { Layout } from '@components';
import { Home, Landing, Login } from '@pages';
import { LoginState } from '@context';

const App = () => {
  return (
    <LoginState>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path='home' element={<Home />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </LoginState>
  );
};

export default App;
