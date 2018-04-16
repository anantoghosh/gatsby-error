import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax } from 'react-spring'
import Img from 'gatsby-image'

import ProgressMeter from '../ProgressMeter'
import styles from './Hero.module.scss'

const Page = ({ offset, caption, first, second, gradient, onClick, logo }) => (
  <div>
    <Parallax.Layer className={styles.pointerOff} offset={offset} speed={1}>
      <div className={styles.banner} />
    </Parallax.Layer>

    <Parallax.Layer className={styles.pointerOff} offset={offset} speed={0.5}>
      <div className={`${styles.social}`}>
        <a href="#" className={`${styles.pointerOn} ${styles.facebook}`}>
          FACEBOOK
        </a>
        <a href="#" className={`${styles.pointerOn} ${styles.twitter}`}>
          TWITTTER
        </a>
      </div>
    </Parallax.Layer>

    <Parallax.Layer className={styles.pointerOff} offset={offset} speed={0.2}>
      <div className={`${styles.slope}`}>
        <div className={styles.image}>
          <img
            src={`https://placeimg.com/1200/800/arch/grayscale?random= ${offset}`}
            alt=""
          />
        </div>
        <div className={`${styles.background} ${styles[gradient]}`} />
      </div>
    </Parallax.Layer>

    <Parallax.Layer className={styles.pointerOff} offset={offset} speed={1}>
      <div className={styles.heading2}>{second}</div>
    </Parallax.Layer>

    <Parallax.Layer className={styles.pointerOff} offset={offset} speed={0.4}>
      <div class={styles.heading}>
        {/* <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <p>{first}</p> */}
        <Img
          title="Header image"
          alt="Greek food laid out on table"
          sizes={logo}
        />
      </div>
    </Parallax.Layer>

    <Parallax.Layer className={styles.pointerOff} offset={offset} speed={3}>
      <div className={`${styles.button} ${styles.pointerOn}`} onClick={onClick}>
        Visit Website ⤤
      </div>
    </Parallax.Layer>
  </div>
)

class Hero extends React.Component {
  constructor(props) {
    super(props)
    this.state.pages = 7
    this.state.currentPage = 0
    // this.scroll = this.scroll.bind(this)
  }

  scroll(to) {
    let newPage = to ? to : (this.state.currentPage + 1) % this.state.pages
    this.setState({ currentPage: newPage })
    this.parallax.scrollTo(newPage)
    console.log('this', this)
  }

  render() {
    return (
      <div>
        <ProgressMeter pages={this.state.pages} currentPage={this.state.currentPage} scroll={this.scroll.bind(this)} />
        <Parallax
          ref="parallax"
          pages={this.state.pages}
          horizontal
          scrolling={true}
          ref={ref => this.parallax = ref}
        >
          <Page
            offset={0}
            gradient="blue"
            caption="who we are"
            first="Lorem ipsum"
            second="GHOOMKE MAKES COLLEGE TRIPS AWESOME !"
            onClick={() => this.scroll()}
            logo={this.props.data.peopleImage.sizes}
          />
          <Page
            offset={1}
            gradient="green"
            caption="what we do"
            first="consectetur"
            second="adipiscing elit"
            onClick={() => this.scroll()}
            logo={this.props.data.ghoomkeImage.sizes}
          />
          <Page
            offset={2}
            gradient="yellow"
            caption="what we want"
            first="Morbi quis"
            second="est dignissim"
            onClick={() => this.scroll()}
            logo={this.props.data.ecartImage.sizes}
          />
          <Page
            offset={3}
            gradient="purple"
            caption="what we want"
            first="Morbi quis"
            second="est dignissim"
            onClick={() => this.scroll()}
            logo={this.props.data.infraImage.sizes}
          />
          <Page
            offset={4}
            gradient="skyBlue"
            caption="what we want"
            first="Morbi quis"
            second="est dignissim"
            onClick={() => this.scroll()}
            logo={this.props.data.infraImage.sizes}
          />
          <Page
            offset={5}
            gradient="orange"
            caption="what we want"
            first="Morbi quis"
            second="est dignissim"
            onClick={() => this.scroll()}
            logo={this.props.data.infraImage.sizes}
          />
          <Page
            offset={6}
            gradient="red"
            caption="what we want"
            first="Morbi quis"
            second="est dignissim"
            onClick={() => this.scroll()}
            logo={this.props.data.infraImage.sizes}
          />
        </Parallax>
      </div>
    )
  }
}

export default Hero
