import {createRouter , createWebHistory} from 'vue-router'
import store from '../../store'
import DefaultLayout from '../components/DefaultLayout.vue'
import Auth from '../components/Auth.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'


const routes = [
  {
    path : '/'  ,
    name : 'DefaultLayout' ,
    redirect : '/dashboard' ,
    meta : {
      requireAuth : true
    } ,
    component : DefaultLayout ,
    children : [
      {
        path : '/dashboard'  ,
        name : 'Dashboard' ,
        component : Dashboard
      },

    ]
  },

  {
    path : '/auth' ,
    name : 'Auth' ,
    component : Auth ,
    children :  [
      {
        path : '/login'  ,
        name : 'Login' ,
        component : Login
      },
      {
        path : '/register'  ,
        name : 'Register' ,
        component : Register
      },
    ]
  }
]


const router = createRouter({
  history : createWebHistory() ,
  routes
})

router.beforeEach( (to , from , next )=>{
   if( to.meta.requireAuth && !store.state.user.token){
     next( { name : 'Login'})
   }else if( store.state.user.token  && (to.name == 'Login' || to.name == 'Register')){

     next( {name : 'Dashboard'});
   }else {
     console.log(to)
     next();
   }
})

export default router ;
