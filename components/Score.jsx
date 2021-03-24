import React from 'react'

const Score = ({ engagement_score }) => {
  return (
    <div className="my-4 py-3 px-8 border-4 border-solid border-green rounded-lg flex justify-between text-xl">
      <p>Score</p>
      <p className="font-bold">{engagement_score}</p>
    </div>
  )
}

export default Score
