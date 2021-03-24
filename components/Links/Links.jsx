import React, { useState } from 'react'

import LinkIcon from '@/Links/LinkIcon'
import InsightsIcon from '@/Links/InsightsIcon'

const Links = ({}) => {
  const [renderLink, setRenderLink] = useState(false)
  const [renderInsights, setRenderInsights] = useState(false)

  const handleLinkBtn = (e) => {
    e.preventDefault()
    setRenderLink(!renderLink)
  }

  const handleInsightsBtn = (e) => {
    e.preventDefault()
    setRenderInsights(!renderInsights)
  }

  return (

    <>
      <div className="my-4 flex">
        <>
          <button
            className="h-14 bg-green mr-6 flex-grow rounded-lg flex items-center justify-center"
            type="submit"
            onSubmit={handleLinkBtn}
          >
            <LinkIcon className="w-4 h-auto" />
          </button>
          <button
            className="h-14 bg-green flex-grow rounded-lg flex items-center justify-center"
            type="submit"
            onSubmit={handleInsightsBtn}
          >
            <InsightsIcon className="w-4 h-auto" />
          </button>
        </>
      </div>
    </>
  )
}

export default Links
