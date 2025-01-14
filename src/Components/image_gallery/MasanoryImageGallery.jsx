import React from 'react'
import Masonry ,{ResponsiveMasonry} from "react-responsive-masonry";

import image_gallery from './image_gallery';
const MasanoryImageGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1 ,768:3, 992:4}}>

        <Masonry gutter='1rem'>{
           image_gallery.map((item,index)=>(
           <img className='masonry_img' src={item} key={index} style={{width:"100%", display:"block", borderRadius:"10px" } }/>
           ))
           }
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasanoryImageGallery