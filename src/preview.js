import React from 'react'

const Preview = props => {
  return (
    <div>
      { props.placeholder }: { props.text }
    </div>
  )
}

export default Preview;
