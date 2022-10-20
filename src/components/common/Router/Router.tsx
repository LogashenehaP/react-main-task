import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '../NavBar/NavStyle';
import Home from '../Display/Home/Home';

import Eligibility from '../Display/EligibilityCheck/Eligibility';
import Search from '../Display/ProviderSearch/ProviderSearch';
import Appointment from '../Display/ScopeOfAppointment/Appointment';
import Navigation from '../NavBar/Navigation';
import Application from '../Display/Application/Application';
import Quoting from '../Display/Quoting/Quoting';
import ApplicationMoreInfo from '../Display/Application/Nested/ApplicationsMoreInfo';
import Prospect from '../Display/Application/Nested/Prospect';
import ApplicationsNested from '../Display/Application/Nested/Applications';

const RouterComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Navigation />
          <Routes>
            <Route path="/react-main-task" element={<Home />} />
            <Route path="/" element={<Home/>}/>
            <Route path="/quoting" element={<Quoting />} />
            <Route path="/search" element={<Search />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/application" element={<Application />}>
              <Route path="applications" element={<ApplicationsNested />} />
              <Route
                path="applicationMoreInfo"
                element={<ApplicationMoreInfo />}
              />
              <Route path="applicationProspect" element={<Prospect />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};
export default RouterComponent;
