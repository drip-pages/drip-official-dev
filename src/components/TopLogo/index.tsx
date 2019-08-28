import topLogo from '../../img/logo2.png'
import * as React from 'react'
import './TopLogo.scss'
import { useTranslation } from 'react-i18next'

const TopLogo = () => {
  const { t } = useTranslation()
  return (
    <div className="TopLogo">
      <div className="inner">
        <img className="top-logo" src={topLogo} alt="top-logo" />
      </div>
      <h1>{t('topLogoMessage')}</h1>
    </div>
  )
}

export default TopLogo
