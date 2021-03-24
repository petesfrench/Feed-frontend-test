import React from 'react'

import FacebookIcon from '@/DatePlatform/FacebookIcon'
import InstagramIcon from '@/DatePlatform/InstagramIcon'

import brandColors from '@/constants/brandColors'

import dayjs from 'dayjs'

const DateAndIcon = ({ platform, published_time }) => {
  return (
    <div className="flex justify-between text-2xl py-2">
      {platform === 'facebook'
        ? <FacebookIcon className="h-8 w-auto" fill={brandColors.facebook.bg} />
        : <InstagramIcon className="h-8 w-auto" fill={brandColors.instagram.bg} /> }
      <p>{dayjs(published_time).format('DD MMM YYYY')}</p>
    </div>
  )
}

export default DateAndIcon
