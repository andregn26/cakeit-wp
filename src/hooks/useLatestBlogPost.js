import { useStaticQuery, graphql } from "gatsby";


export const useLatestBlogPost = () => {
    const data = useStaticQuery(graphql`
    query latestBlogPost {
  allWpPost(sort: {date: DESC}) {
    edges {
      node {
        title
        excerpt
        uri
      }
    }
  }
}
    `)
    return data
}