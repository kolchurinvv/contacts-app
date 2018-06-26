import Vue from 'vue'
import Router from 'vue-router'
import LoginRegister from '@/components/LoginRegister.vue'
import Contacts from '@/components/contacts.vue'
import CreateContact from '@/components/createContact.vue'


Vue.use(Router)

export default new Router({
	routes:[
		{
			path: '/',
			name: 'LoginRegister',
			component: LoginRegister
		},
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/contacts/create',
      name: 'createContact',
      component: CreateContact
    }
	]
})