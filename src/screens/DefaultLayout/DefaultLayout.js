import React, { useState, Suspense } from 'react'
import { Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
import './DefaultLayout.css'
import routes from '../../routes'
import Header from './DefaultHeader'
import Footer from './DefaultFooter'
import Sidebar from './DefaultSidebar'
const { Content } = Layout;

const HomeLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => setCollapsed(prev => !prev)

  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout full-screen">
        <Header toggle={toggle} collapsed={collapsed} />
        <Content className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            borderRadius: 10,
          }}>
          <Suspense fallback={loading}>
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                      <route.component {...props} />
                    )} />
                ) : (null);
              })}
              <Redirect from="/" to="/" />
            </Switch>
          </Suspense>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  )
}
export default HomeLayout