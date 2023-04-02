import Supplier from './screens/Supplier/Supplier'
import Customer from './screens/Customer/Customer'
import ProductWeb from './screens/ProductsWeb/ProductsWeb'
import ProductOrder from './screens/ProductOrder/ProductOrder'
import Bill from './screens/Bill/Bill'
import Statistical from './screens/Statistical/Statistical'
import Package from './screens/Package/Package'
import Wallet from './screens/HistoryWallet.js/HistoryWallet'
const routes = [
  { path: '/', name: 'Supplier', component: Supplier, exact: true },
  { path: '/customer', name: 'Customer', component: Customer },
  { path: '/package', name: 'Package', component: Package },
  { path: '/productWeb', name: 'ProductWeb', component: ProductWeb },
  { path: '/productOrder', name: 'ProductOrder', component: ProductOrder },
  { path: '/bill', name: 'Bill', component: Bill },
  { path: '/wallet', name: 'Wallet', component: Wallet },
  { path: '/statistical', name: 'Statistical', component: Statistical },
];

export default routes;
