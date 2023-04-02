import React, { useState, Suspense } from 'react'
import { Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
import './DefaultLayout.css'
import routes from '../../routes'
import Header from './DefaultHeader'
import Sidebar from './DefaultSidebar'
import styled from 'styled-components';
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
        <ContentStyle>
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
        </ContentStyle>
      </Layout>
    </Layout>
  )
}
export default HomeLayout

const ContentStyle = styled(Content)`
  margin: 18px;
  padding: 18px;
  border-radius: 10px;
  background-color: #FFFFFF;
  border: 1px solid #D9D9D9;
`;