import React from "react";
import Img from "gatsby-image";
import styles from './image.module.scss';

export default ({ data }) => (
  <div>
    <h1 className={styles.flex}>Hello gatsby-image</h1>
    <Img resolutions={data.file.childImageSharp.resolutions} />
  </div>
);

export const query = graphql`
  query GatsbyImageSampleQuery {
    file(relativePath: { eq: "people.jpg" }) {
      childImageSharp {
        resolutions(width: 125, height: 125) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`;