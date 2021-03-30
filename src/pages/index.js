import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

const IndexPage = ({data}) => (
  <Layout>
    <section id="banner" style={{backgroundImage: `url(${data.strapiWebbileHomepage.cover.publicURL})`}}>
      <div className="inner">
        <h2>{data.strapiWebbileHomepage.title}</h2>
        <p>{data.strapiWebbileHomepage.subtitle}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                {data.strapiWebbileHomepage.button}
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          {data.strapiWebbileHomepage.learn_more}
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>{data.strapiWebbileHomepage.Jumbo.title}</h2>
          <p>{data.strapiWebbileHomepage.Jumbo.subtitle}</p>
        </header>
        {
          data.strapiWebbileHomepage.Jumbo.IconList.length > 0
          ?
          <ul className="icons major">
          {
          data.strapiWebbileHomepage.Jumbo.IconList.map((item, index) => {
            return (
            <li key={index}>
              <span className={`icon ${item.icon} major style${index+1}`}>
                <span className="label">{item.label}</span>
              </span>
            </li>
            )
          })
          }
          </ul>
          : null
        }
      </div>
    </section>

    {
      data.strapiWebbileHomepage.Spotlight.length > 0
      ?
      <section id="two" className="wrapper alt style2">
        {
          data.strapiWebbileHomepage.Spotlight.map((item, index) => {
            return (
            <section key={index} className={`spotlight ${item.imageSide}`}>
              <div className="image">
                <img src={item.image.publicURL} alt={item.title} />
              </div>
              <div className="content">
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
              </div>
            </section>
            )
          })
        }
      </section>
      : null
    }

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>{data.strapiWebbileHomepage.FeatureBlock.title}</h2>
          <p>{data.strapiWebbileHomepage.FeatureBlock.subtitle}</p>
        </header>
        {
          data.strapiWebbileHomepage.FeatureBlock.Feature.length > 0
          ?
          <ul className="features">
          {
          data.strapiWebbileHomepage.FeatureBlock.Feature.map((item, index) => {
            return (
              <li key={index} className={`icon ${item.icon}`}>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </li>
            )
          })
          }
          </ul>
          : null
        }
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export const query = graphql`
  {
    strapiWebbileHomepage {
      title
      subtitle
      learn_more
      button
      cover {
        publicURL
      }
      Jumbo {
        title
        subtitle
        IconList {
          icon
          label
        }
      }
      Spotlight {
        title
        subtitle
        imageSide
        image {
          publicURL
        }
      }
      FeatureBlock {
        title
        subtitle
        Feature {
          title
          subtitle
          icon
        }
      }
    }
  }
`

export default IndexPage;
