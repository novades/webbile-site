import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Footer from './Footer';
// import SideBar from './Sidebar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    // const { children, fullMenu } = this.props;
    const { children } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
        query GlobalQuery 
        {
          strapiWebbileGlobal{
            title description keywords
          }
        }
        `}
        render={data => (
          <>
            <Helmet
              title={data.strapiWebbileGlobal.title}
              meta={[
                { name: 'description', content: data.strapiWebbileGlobal.description },
                { name: 'keywords', content: data.strapiWebbileGlobal.keywords },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div
              className={
                isPreloaded
                  ? 'landing main-body is-preload'
                  : 'landing main-body'
              }
            >
              <div id="page-wrapper">
                {/* <SideBar fullMenu={fullMenu} /> */}
                {children}
                <Footer />
              </div>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
