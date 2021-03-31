import { useStaticQuery, graphql } from 'gatsby';

export const useHomepageData = () => {
    const homepageData = useStaticQuery(graphql`
    query HomepageDataQuery {
        strapiWebbileHomepage {
          head{
            title subtitle
          }
          learn_more
          button
          cover {
            publicURL
          }
          Jumbo {
            head{
              title subtitle
            }
            IconList {
              icon
              label
            }
          }
          Spotlight {
            head{
              title subtitle
            }
            imageSide
            image {
              publicURL
            }
          }
          FeatureBlock {
            head{
              title subtitle
            }
            Feature {
              title
              subtitle
              icon
            }
          }
        }
    }`)

    return homepageData.strapiWebbileHomepage;
}