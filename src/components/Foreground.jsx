import React, {useState, useRef} from 'react'
import Card from './Card';


function Foreground() {

  const ref = useRef(null);
  const data = [
    {
      desc: "This is the description of the cardthat will be displayed on the card.",
      filesize: ".7MB",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc: "This is the description of the cardthat will be displayed on the card.",
      filesize: ".9MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
    },
        {
      desc: "This is the description of the cardthat will be displayed on the card.",
      filesize: ".4MB",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green"},
    },
    
  ];
  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
    {data.map((item, index) =>(
      <Card data={item} reference={ref} />

    ))}
    </div>
  )
}

export default Foreground
