import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/Home.vue')
  },  

  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/Home.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },

  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/signup/Signup.vue')
  },

  {
    path: '/user/profile',
    name: 'userProfile',
    component: () => import('../views/user/profile/Profile.vue')
  },

  {
    path: '/user/profile/settings',
    name: 'userProfileSettings',
    component: () => import('../views/user/profile/settings/Settings.vue')
  },

  {
    path: '/user/bankAccounts',
    name: 'userBankAccounts',
    component: () => import('../views/user/bankAccount/BankAccount.vue')
  },

  {
    path: '/user/bankAccount/settings',
    name: 'userBankAccountSettings',
    component: () => import('../views/user/bankAccount/settings/Settings.vue')
  },

  {
    path: '/user/bankAccount/registration',
    name: 'userBankAccountRegistration',
    component: () => import('../views/user/bankAccount/registration/BankAccountRegistration.vue')
  },
  
  {
    path: '/user/bankAccount/verification',
    name: 'userBankAccountVerification',
    component: () => import('../views/user/bankAccount/verification/BankAccountVerification.vue'),
    props: true
  },

  {
    path: '/user/bankAccount/status',
    name: 'userBankAccountStatus',
    component: () => import('../views/user/bankAccount/status/BankAccountStatus.vue'),
    props: true
  },

  {
    path: '/user/history/payment',
    name: 'userPaymentHistory',
    component: () => import('../views/user/history/payment/Payment.vue')
  },

  {
    path: '/user/history/withdrawal',
    name: 'userWithdrawalHistory',
    component: () => import('../views/user/history/withdrawal/withdrawal.vue')
  },

  {
    path: '/points/purchase',
    name: 'pointsPurchase',
    component: () => import('../views/points/purchase/PointsPurchase.vue')
  },

  {
    path: '/points/withdrawal',
    name: 'pointsWithdrawal',
    component: () => import('../views/points/withdrawal/PointsWithdrawal.vue')
  },

  {
    path: '/suscriptions/premium/purchase',
    name: 'premiumSuscriptionPurchase',
    component: () => import('../views/suscriptions/premium/purchase/PremiumSuscriptionPurchase.vue')
  },

  {
    path: '/suscriptions',
    name: 'suscriptions',
    component: () => import('../views/suscriptions/Suscriptions.vue')
  },

  {
    path: '/invoice',
    name: 'invoice',
    component: () => import('../components/pdfGenerator/pdfGenerator.vue'),
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
