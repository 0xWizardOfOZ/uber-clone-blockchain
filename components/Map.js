import React from 'react'
import { useEffect } from 'react'
import mapboxgl from "mapbox-gl"

const style = {
    wrapper: 'flex-1 h-full w-full',
}

const Map = () => {
    useEffect(() => {
      const map = new mapboxgl.Map({
          style: 'mapbox://styles/kylegrange/cl49vc01g002914ofov6cfnvp',
          center: [-99.29011, 39.39172],
          zoom: 3,
      })
    }, [])

  return <div className={style.wrapper}>Map</div>
}

export default Map