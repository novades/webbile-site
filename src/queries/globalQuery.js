import { useStaticQuery, graphql } from 'gatsby';

export const useGlobalData = () => {
    const globalData = useStaticQuery(graphql`
    query GlobalDataQuery {
        strapiWebbileGlobal{
          title description keywords
        }
    }`);

    return globalData.strapiWebbileGlobal;
}