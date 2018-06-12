import Vue from 'vue'
import Router from 'vue-router'
import Contacts from '@/components/Contacts.vue'
import Register from '@/components/Register.vue'

Vue.use(Router)

export default new Router({
	routes:[
		{
			path: '/',
			name: 'Welcome to your Contacts Manager',
			component: Contacts
		},
		{
			path: '/register',
			name: 'register',
			component: Register
		}
	]
})