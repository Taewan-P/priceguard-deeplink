import '../Common.css'

import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { isAndroid } from 'react-device-detect'
import React from 'react'
import {
  DeepLinkButton,
  DownloadButton,
  generateDeepLink,
  GitHubStarButton,
  LogoImage,
} from '../Common'
import { StoreType } from '../data/StoreType'

const Direct11st: React.FC = () => {
  const { search } = useLocation()

  const values = queryString.parse(search)

  return (
    <div className="deepLinkContainer">
      <div className="centerContainer">
        <LogoImage />
        {values.code === undefined ? (
          <DownloadButton />
        ) : (
          <DeepLinkButton
            link={generateDeepLink(
              StoreType.ElevenStreet,
              values.code as string,
            )}
            supported={isAndroid}
          />
        )}
        <GitHubStarButton />
      </div>
    </div>
  )
}

export default Direct11st
