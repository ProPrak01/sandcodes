import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import HomePage from './pages/home/HomePage';
import Footer from './components/Footer/Footer';
import { Route ,Routes} from 'react-router-dom';
import SafeZoneNavigator from './pages/SafeZoneNavigator/SafeZoneNavigator';
import SurvivalGuide from './pages/SurvivalGuide/SurvivalGuide';
import CommunityChat from './pages/CommunityChat/CommunityChat';
import Login from './pages/auth/Login';
import Signup from './pages/auth/SignUp';
import { AuthProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './routes/ProtectedRoute';
import CustomCursor from './Custom/CustomCursor.jsx';
function App() {
  return (
    <div className="app">
            <AuthProvider>
     <NavBar/>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/safe-zone-navigator" element={<SafeZoneNavigator />} />
        <Route path="/survival-guide" element={<SurvivalGuide />} />
        <Route path="/community-chat" element={<ProtectedRoute element={<CommunityChat />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />
      </Routes>

     <Footer/>
     <CustomCursor/>
     </AuthProvider>
    </div>
  );
}

export default App;
