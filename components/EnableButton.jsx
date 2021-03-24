import React, { useState } from 'react'

import TickIcon from '@/TickIcon'

import brandColors from '@/constants/brandColors'


const EnableButton = ({ promotion_enabled }) => {
  const [promotionState, setPromotionState] = useState(promotion_enabled)
  const handleClick = (e) => {
    e.preventDefault()
    // call API
    setPromotionState(!promotionState)
  }

  return (
    <button
      className="my-4 bg-blue w-full flex justify-between p-5 rounded-lg"
      onClick={handleClick}
    >
      <p>Enable</p>
      <div className="w-5 h-5 p-1 bg-white">
        {promotionState && (
        <TickIcon className="w-full h-auto" fill={brandColors.blue} />
        )}
      </div>
    </button>
  )
}

export default EnableButton
