import Supplier from './screens/Supplier/Supplier'
import Customer from './screens/Customer/Customer'
import Staff from './screens/Staff/Staff'
import InfoUser from './screens/User/InfoUser'
const routes = [
  { path: '/', name: 'Supplier', component: Supplier, exact: true },
  { path: '/infoUser', name: 'InfoUser', component: InfoUser },
  { path: '/customer', name: 'Customer', component: Customer },
  { path: '/staff', name: 'Staff', component: Staff },
];

export default routes;
