import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router'
import HomeScreen from './pages/HomeScreen';
import SignUp from './pages/SignUp';
import Checkout from './pages/Checkout';
import Mentors from './pages/Mentors';
import OrderComplete from './pages/OrderComplete';
import OrderCompleteReview from './pages/OrderCompleteReview';
import Profile from './pages/Profile';
import ShoppingCart from './pages/ShoppingCart';
import Categories from './pages/Categories';
import Courses from './pages/Courses';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/ordercomplete" element={<OrderComplete />} />
          <Route path="/ordercompletereview" element={<OrderCompleteReview />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/courses" element={<Courses />} />
          

        </Routes>
      </Router>

    </div>
  )
}

export default App