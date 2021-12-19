import React from 'react'
import dynamic from 'next/dynamic'
import sketch from '../sketch/sample'

const Sketch = dynamic(import('react-p5'), {
  loading: () => <>...Loading</>,
  ssr: false,
})

const SketchComponent: React.FC = () => {
  return <Sketch {...sketch} />
}

export default SketchComponent
