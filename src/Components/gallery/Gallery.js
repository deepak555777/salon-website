import React, { useState } from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './gallery.css'
import Img1 from './images/Img1.jpg'
import Img2 from './images/Img2.jpg'
import Img3 from './images/Img3.jpg'
import Img4 from './images/Img4.jpg'
import Img5 from './images/Img5.jpg'


const images = [
  
Img1,
Img2,
Img3,
Img4,
Img5
]

function Gallery() {
  const [data, setData] = useState({image:'',i: 0})
const viewImage =(image, i)=>{
  setData({image, i})
}

  return (
 <>
 {data.img && 
 <div style={{
        width: '100%',
        height: '100vh',
        background: 'black',
        position: 'fixed',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        cursor: 'pointer',
 }}>
  <button style={{position:'absolute', top: '10px', right:'10px'}}>X</button>
  <img src={data.img} style={{width:'auto', maxWidth: '90%', maxHeight:'90%'}} alt=""></img>
  </div>
}
<div className="container1">

 <div style={{padding: '10px'}}>
 <ResponsiveMasonry
 columnsCountBreakPoints={{350:1, 750:2, 900:3}}
 >
  <Masonry gutter="20px">
    {images.map((image, i)=>(
      <img 
      key={i}
      src={image}
      style={{width: "100%", display: "block"}}
      alt=""
      onClick={viewImage}
      />
    ))}
  </Masonry>
  </ResponsiveMasonry>
  </div>
  </div>
  </>
  )
}

export default Gallery