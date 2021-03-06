import React from 'react'

import "./CallToAction.css"

const CallToAction = () => {

  return (      
    <div className="flex flex-col items-center justify-items-center">
      <p className={'text-3xl font-light text-white leading-4'}>
        React with TailwindCss and Storybook!
      </p>
      <a
        className="underline text-3xl text-blue-400 hover:text-blue-200 mt-4"
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click Here
      </a>
    </div>
  )
}

export default CallToAction;