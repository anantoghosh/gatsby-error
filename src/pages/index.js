import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero'

const IndexPage = props => {
  {
    console.log('props', props)
  }
  return (
    <div>
      <Hero data={props.data} />
    </div>
  )
}

export default IndexPage

export const ImageQuery = graphql`
  query ImageQuery {
    peopleImage: imageSharp(id: { regex: "/people/" }) {
      sizes(maxWidth: 500) {
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    },
    ghoomkeImage: imageSharp(id: { regex: "/ghoomke/" }) {
      sizes(maxWidth: 500) {
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    },
    ecartImage: imageSharp(id: { regex: "/peopleecart/" }) {
      sizes(maxWidth: 500) {
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    },
    infraImage: imageSharp(id: { regex: "/infra/" }) {
      sizes(maxWidth: 500) {
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    }
  }
`
