import React, { ReactNode } from 'react'
import { StyledGrowContainer } from './styles'

interface GrowContainerProps {
  children?: ReactNode
}

const GrowContainer: React.FC<GrowContainerProps> = (props) => {
  return (
    <StyledGrowContainer {...props} />
  )
}

export default GrowContainer
