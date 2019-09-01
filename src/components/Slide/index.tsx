import React from 'react'
import classNames from 'classnames'

type slidePorps = {
  children?: JSX.Element[]
  className?: string
}
const Slide = (props: slidePorps) => <div className={classNames('Slide', props.className)}>{props.children}</div>

export default Slide
