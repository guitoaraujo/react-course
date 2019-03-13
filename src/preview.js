import React from 'react'

export const Preview = props => {
  return (
    <div>
      { props.placeholder }: { props.text }
    </div>
  )
}
