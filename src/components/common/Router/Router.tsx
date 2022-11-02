import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '../NavBar/NavStyle';
import Home from '../../../Pages/MainRouterPages/Home/Home';

import Eligibility from '../../../Pages/MainRouterPages/EligibilityCheck/Eligibility';
import Search from '../../../Pages/MainRouterPages/ProviderSearch/ProviderSearch';
import Appointment from '../../../Pages/MainRouterPages/ScopeOfAppointment/Appointment';
import Navigation from '../NavBar/Navigation';
import Application from '../../../Pages/MainRouterPages/Application/Application';
import Quoting from '../../../Pages/MainRouterPages/Quoting/Quoting';
import ApplicationMoreInfo from '../../../Pages/NestedRouterPages/ApplicationsMoreInfo';
import Prospect from '../../../Pages/NestedRouterPages/Prospect';
import ApplicationsNested from '../../../Pages/NestedRouterPages/Applications';
import Navbar from '../NavBar/NavBar';

const RouterComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Container>

          <Navbar/>
          {/* <Navigation /> */}
          <Routes>
            {/* <Route path="/react-main-task" element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/quoting" element={<Quoting />} />
            <Route path="/search" element={<Search />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/application" element={<Application />}>
              <Route path="" element={<ApplicationsNested />} />
              <Route
                path="applicationmoreinfo"
                element={<ApplicationMoreInfo />}
              />
              <Route path="applicationprospect" element={<Prospect />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};
export default RouterComponent;
