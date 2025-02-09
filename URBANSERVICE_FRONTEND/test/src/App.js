import './App.css';
import { Sidebar } from './component/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { Login } from './component/Login';
import { Signup } from './component/Signup';
import { ServiceProviderDashboard } from './component/serviceprovider/ServiceProviderDashboard';
import { UserDashboard } from './component/user/UserDashboard';
import { AddService } from './component/serviceprovider/AddService';
import { UpdateService } from './component/serviceprovider/UpdateService';
import { ProtectedRoutes } from './hooks/ProtectedRoutes';
import { Error404 } from './component/Error404';
import { AllServices, BookService } from './component/user/BookService';
import { MyBookings } from './component/user/MyBookings';
import { FetchDetails } from './component/user/FetchDetails';
import { MyServices } from './component/serviceprovider/MyServices';
import { Servicedetails } from './component/serviceprovider/Servicedetails';
import { ServiceList } from './component/serviceprovider/ServiceList';
import { Payement, Payment } from './component/Payment';
import { ServiceProviderRegister } from './component/serviceprovider/ServiceProviderRegister';
import { UserRegistration } from './component/user/UserRegistration';
import { Profile, ServiceProviderProfile } from './component/serviceprovider/Profile';
import { UserProfile } from './component/user/Profile';
import { BookServiceDetails, DetailBookService } from './component/user/BookServiceDetails';
import { Registration } from './component/Registration';
import { MainPage } from './component/MainPage';
import { Logout } from './component/Logout';
import { ForgotPassword } from './component/ForgotPassword';
import { ResetPassword } from './component/ResetPassword';
import { AddAddress } from './component/AddAddress';
import PaymentDemo from './component/PaymentDemo';

function App() {
  const path = window.location.pathname
  return (
    <body className='g-sidenav-show bg-gray-200'>
      {path === "/" || path === "/login" || path==="/forgotpassword" || path==='/resetpassword' || path==="/registration" || path==="/serviceprovider/registration" || path==="/user/registration"|| path === "/signup"?null:<Sidebar/>}
      
      <main className='main-content position-relative max-height-vh-100 h-100 border-radius-lg'>
      {/* {path === "/" || path === "/login" || path === "/signup"?null:<Navbar/>} */}
        <div className="container-fluid py">
          <Routes>
            <Route path='/' element={<MainPage/>}/>sta
            <Route path='/login' element={<Login/>}/>
            <Route path='/forgotpassword' element={<ForgotPassword/>}/>
            <Route path='/resetpassword' element={<ResetPassword/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/serviceprovider/registration' element={<ServiceProviderRegister/>}/>
            <Route path='/user/registration' element={<UserRegistration/>}/>
            <Route element={<ProtectedRoutes/>}>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/user/dashboard/addAddress' element={<AddAddress/>}/>
            <Route path='/serviceprovider/dashboard' element={<ServiceProviderDashboard/>}/>
            <Route path='/serviceprovider/profile' element={<ServiceProviderProfile/>}/>
            <Route path='/serviceprovider/addservice' element={<AddService/>}/>
            <Route path='/serviceprovider/myservices' element={<MyServices/>}/>
            <Route path='/serviceprovider/servicelist' element={<ServiceList/>}/>
            <Route path='/serviceprovider/updateservice/:id' element={<UpdateService/>}/>
            <Route path='/serviceprovider/details/:id' element={<Servicedetails/>}/>
            <Route path='/serviceprovider/servicelist' element={<ServiceList/>}/>
            <Route path='/user/profile' element={<UserProfile/>}/>
            <Route path='/user/bookservices' element={<BookService/>}/>
            <Route path='/user/dashboard' element={<UserDashboard/>}/>
            <Route path='/user/bookings' element={<MyBookings/>}/>
            <Route path='/user/bookservicedetials/:id' element={<BookServiceDetails/>}/>
            <Route path='/user/fetchdetails/:id' element={<FetchDetails/>}/>
            <Route path='/user/payment/:id' element={<Payment/>}/>
            <Route path='/user/paymentdemo/:id' element={<PaymentDemo/>}/>
            {/* <Route path='/paymentDemo' element= {<PaymentDemo />} /> */}
            <Route path='/*' element={<Error404/>}/>
            </Route>
          </Routes>
        </div>
      </main>
    </body>
  );
}

export default App;
