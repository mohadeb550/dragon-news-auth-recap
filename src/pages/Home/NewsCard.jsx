import { BsBookmark } from 'react-icons/bs'
import {IoMdShare } from 'react-icons/io'
import { Link } from 'react-router-dom';



export default function NewsCard({singleNews}) {

  const {_id,  title, author, thumbnail_url, image_url, details } = singleNews;


  return (
    <div className='p-4'>
        <div className='bg-gray-100 flex items-center justify-between p-3'>
            <div className='flex  items-center gap-2'>
            <img className='w-12 rounded-full ' src={author.img}/>
            <div>
                <h4>{author.name} </h4>
                <time> {author.published_date }</time>
            </div>
            </div>
            <div className='flex text-xl gap-3'>
                <BsBookmark/>
                <IoMdShare/>
            </div>
        </div>

        <h4 className='text-xl font-semibold p-4'> {title }</h4>
        <img src={image_url}/>

      {
        details.length > 200? <p className='pt-4 text-gray-500'> {details.slice(0,200)} <Link to={`/news/${_id}`} className='text-blue-500 font-semibold pl-1'> Read More...</Link> </p> :
        
        <p className='pt-4 text-gray-500'> {details} </p>
      }
     
    </div>
  )
}
