import React from 'react'

type ChildrenProps = {
    children: React.ReactNode
}

const ComponentWithChildren = (props:ChildrenProps) => {
  return (
    <div>
        <h1>Hello in Children Prop</h1>
      {props.children}
    </div>
  )
}

export default ComponentWithChildren
