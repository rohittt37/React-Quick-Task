import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.1} dragTransition={{bounceStiffness: 100, bounceDamping: 30}} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-gray-200/90 text-black px-5 py-10 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0 left-0  w-full'>
        <div className='flex items-center justify-between px-8 py-3 mb-3'>
          <h5 className='text-green-600'>{data.filesize}</h5>
          <span className='w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center'>
            {data.close ? <IoClose color='#fff' /> : <LuDownload size=".7em" color='#fff' />}
          </span>
        </div>
        {
          data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === 'blue' ? 'bg-blue-500' : 'bg-green-600'} flex items-center justify-center`}>
              <h3 className='text-sm text-white font-semibold'>{data.tag.tagTitle}</h3>
            </div>
          )}

      </div>
    </motion.div>
  )
}

export default Card
