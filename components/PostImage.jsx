import React from 'react'


const PostImage = ({ post_type, thumbnails }) => {
  return (
    <div className="rounded-dialogue rounded-xl overflow-hidden">
      {post_type === 'story'
        ? (
          <div className="flex justify-center pb-1/1 relative ">
            <img className="absolute overflow-hidden h-full w-full object-cover" style={{ filter: 'blur(8px)' }} src={thumbnails[0].url} alt="ALT" />
            <img className="absolute w-1/2" src={thumbnails[0].url} alt="ALT" />
          </div>
        ) : (
          <div className="flex justify-center pb-1/1 relative">
            <img className="absolute" src={thumbnails[0].url} alt="ALT" />
          </div>
        ) }
    </div>
  )
}

export default PostImage
