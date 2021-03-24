import React from 'react'
import PropTypes from 'prop-types'

import EnableButton from '@/EnableButton'
import PostImage from '@/PostImage'
import Score from '@/Score'
import DateAndIcon from '@/DatePlatform/DateAndIcon'
import Links from '@/Links/Links'



const PostCard = ({ post }) => {
  return (
    <div className="col-span-3 p-4">

      <DateAndIcon platform={post.platform} published_time={post.published_time} />

      <PostImage post_type={post.post_type} thumbnails={post.thumbnails} />

      <Score engagement_score={post.engagement_score} />

      <EnableButton promotion_enabled={post.promotion_enabled} />

      <Links />

    </div>
  )
}

PostCard.propTypes = {

}

export default PostCard
