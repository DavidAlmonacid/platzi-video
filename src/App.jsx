import { Route, Routes } from 'react-router-dom';
import { LoginState, MyListState } from '@context';
import { Layout } from '@components';
import { Home, Landing, Login } from '@pages';

const App = () => {
  return (
    <LoginState>
      <MyListState>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </MyListState>
    </LoginState>
  );
};

export default App;
