import topLogo from '../../img/logo2.png'
import * as React from 'react'
import './TopLogo.scss'
import { useTranslation } from 'react-i18next'
import Slide from '../Slide';

const TopLogo = () => {
  const { t } = useTranslation()
  return (
    <Slide className="TopLogo">
      <img className="top-logo" src={topLogo} alt="top-logo" />
      <h1>{t('topLogoMessage')}</h1>
    </Slide>
  )
}

export default TopLogo
