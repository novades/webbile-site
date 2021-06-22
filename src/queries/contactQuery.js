import { useStaticQuery, graphql } from 'gatsby';

export const useContactData = () => {
    const contactData = useStaticQuery(graphql`
    query ContactDataQuery {
      strapiWebbileContact {
        title
        description
        formInput {
          identifier
          placeholder
          type
        }
      }
    }`)

    return contactData.strapiWebbileContact;
}