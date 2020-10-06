import React from 'react'
import './Home.css'
import Product from '../Product/Product'
import { TramOutlined } from '@material-ui/icons'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="AMD Ryzen 9 3900X 12-core, 24-thread unlocked desktop processor with Wraith Prism LED Cooler"
            price={429.99}
            image="https://m.media-amazon.com/images/I/71S31CWSs3L._AC_UL320_.jpg"
            rating={4}
            includeAddToBasket={true}
          />
          <Product
            id="2"
            title="Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)"
            price={275.75}
            image="https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SL1500_.jpg"
            rating={3}
            includeAddToBasket={true}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Garmin Forerunner 235, GPS Running Watch, Black/Gray"
            price={169.99}
            image="https://images-na.ssl-images-amazon.com/images/I/819WMWm6NoL._AC_SX679_.jpg"
            rating={5}
            includeAddToBasket={true}
          />
          <Product
            id="4"
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
            price={119.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SY606_.jpg"
            rating={4}
            includeAddToBasket={true}
          />
          <Product
            id="5"
            title="AUKEY FHD Webcam, 1080p Live Streaming Camera with Stereo Microphone, Desktop or Laptop USB Webcam for Widescreen Video Calling and Recording"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61iAmGshpsL._AC_SX425_.jpg"
            rating={5}
            includeAddToBasket={true}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="AmazonBasics Small Digital Alarm Clock with Nightlight and Battery Backup, LED Display"
            price={9.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61j17FjPhtL._AC_SL1500_.jpg"
            rating={3}
            includeAddToBasket={true}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
