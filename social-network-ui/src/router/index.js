import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login';
import SignUp from '../views/SignUp';
import Home from '../views/Home';

const routes = [
  { 
    path: '/login', 
    name: "Login",
    component: Login 
  },
  { 
    path: '/signup', 
    name: "Sign Up",
    component: SignUp 
  },
  { 
    path: '/home',  
    name: "Home",
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
