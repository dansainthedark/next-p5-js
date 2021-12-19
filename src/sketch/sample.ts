import P5 from 'react-p5/node_modules/@types/p5/index'
import { SketchProps } from 'react-p5/@types'

const sketch: SketchProps = {
  setup: (p: P5, canvasParentRef: Element) => {
    p.createCanvas(p.windowWidth, p.windowWidth).parent(canvasParentRef)
  },
  draw: (p: P5) => {
    if (p.mouseIsPressed) {
      p.fill(0)
      p.ellipse(p.mouseX, p.mouseY, 8, 8)
    }
  },
}

export default sketch
