import Vue from 'vue'
import Router from 'vue-router'
import LoginRegister from '@/components/LoginRegister.vue'
import Contacts from '@/components/contacts.vue'
import CreateContact from '@/components/createContact.vue'
import ViewContact from '@/components/viewContact.vue'
import EditContact from '@/components/editContact.vue'

Vue.use(Router)

// keep names unique in order for nav bar to work propperly

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
    },
    {
      path: '/contacts/:contactId',
      name: 'contact',
      component: ViewContact
    },
    {
      path: '/contacts/:contactId/edit',
      name: 'editContact',
      component: EditContact
    }
	]
})