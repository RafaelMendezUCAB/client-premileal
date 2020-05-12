import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

/* ----------------------------- VIEWS ----------------------------------- */
import Home from '../views/home/Home.vue';
import Signup from '../views/signup/Signup.vue';
import Login from '../views/login/Login.vue';
import UserProfile from '../views/user/profile/Profile.vue';
import UserProfileSettings from '../views/user/profile/settings/Settings.vue';
import UserBankAccounts from '../views/user/bankAccount/BankAccount.vue';
import UserBankAccountSettings from '../views/user/bankAccount/settings/Settings.vue'; 

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: Login
  },  

  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },

  {
    path: "/Home",
    name: "Home",
    component: Home
  },

  {
    path: "/user/profile",
    name: "userProfile",
    component: UserProfile
  },

  {
    path: "user/profile/settings",
    name: "userProfileSettings",
    component: UserProfileSettings
  },

  {
    path: "user/bankAccounts",
    name: "userBankAccounts",
    component: UserBankAccounts
  },

  {
    path: "user/bankAccount/settings",
    name: "userBankAccountSettings",
    component: UserBankAccountSettings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
