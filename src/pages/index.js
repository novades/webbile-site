import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import ContactForm from '../components/ContactForm';

import { useHomepageData } from '../queries/homepageQuery';

const IndexPage = () => {
  const data = useHomepageData();
  return (
  <Layout>
    <section id="banner" style={{backgroundImage: `url(${data.cover.localFile.publicURL})`}}>
      <div className="inner">
        <h2>{data.head.title}</h2>
        <p>{data.head.subtitle}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                {data.button}
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          {data.learn_more}
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>{data.Jumbo.head.title}</h2>
          <p>{data.Jumbo.head.subtitle}</p>
        </header>
        {
          data.Jumbo.IconList.length > 0
          ?
          <ul className="icons major">
          {
          data.Jumbo.IconList.map((item, index) => {
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
      data.Spotlight.length > 0
      ?
      <section id="two" className="wrapper alt style2">
        {
          data.Spotlight.map((item, index) => {
            return (
            <section key={index} className={`spotlight ${item.imageSide}`}>
              <div className="image">
                <img src={item.image.localFile.publicURL} alt={item.head.title} />
              </div>
              <div className="content">
                <h2>{item.head.title}</h2>
                <p>{item.head.subtitle}</p>
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
          <h2>{data.FeatureBlock.head.title}</h2>
          <p>{data.FeatureBlock.head.subtitle}</p>
        </header>
        {
          data.FeatureBlock.Feature.length > 0
          ?
          <ul className="features">
          {
          data.FeatureBlock.Feature.map((item, index) => {
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
      <ContactForm />
    </section>
  </Layout>)
}

export default IndexPage;
