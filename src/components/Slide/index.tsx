import * as React from 'react'
import classNames from 'classnames'
import './Slide.scss'

type slideProps = {
  children?: JSX.Element[] | null
  className?: string
}
const Slide = (props: slideProps) => <div className={classNames('Slide', props.className)}>{props.children}</div>

export default Slide
