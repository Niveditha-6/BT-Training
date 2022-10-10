import React from 'react'
import useWindowWidth from './useWindowWidth';

export default function CustomHookLayout() {

  const smallScreen = useWindowWidth()

  return (
    <div>
        {smallScreen?'small':'Large'}
    </div>
  )
}