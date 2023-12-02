import './Direct11st.css'

import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { isAndroid } from 'react-device-detect'
import GitHubButton from 'react-github-btn'
import React from 'react'

interface Direct11stProps {
  link: URL
  supported: boolean
}

const Direct11st: React.FC = () => {
  const { search } = useLocation()

  const values = queryString.parse(search)

  return (
    <div className="direct11stContainer">
      <div className="centerContainer">
        <LogoImage />
        {values.code === undefined ? (
          <DownloadButton />
        ) : (
          <DeepLinkButton
            link={generateDeepLink(values.code as string)}
            supported={isAndroid}
          />
        )}
        <GitHubStarButton />
      </div>
    </div>
  )
}

const generateDeepLink = (code: string): URL => {
  if (code === undefined) {
    return new URL('https://github.com/boostcampwm2023/and09-PriceGuard')
  }

  return new URL(
    `intent://product/?code=${code}#Intent;` +
      `package=app.priceguard;` +
      `scheme=priceguard;` +
      `S.browser_fallback_url=https://appdistribution.firebase.dev/i/b299ae01bd67c829;end`,
  )
}

const openLink = (link: URL): void => {
  window.location.assign(link.toString())
}

const LogoImage: React.FC = () => {
  return (
    <div className="appLogoContainer">
      <img
        src="/priceguard_logo.svg"
        className="appLogo"
        alt="PriceGuard Logo Image"
      />
    </div>
  )
}

const DeepLinkButton: React.FC<Direct11stProps> = ({ link, supported }) => {
  if (!supported) {
    const repositoryLink = new URL(
      'https://github.com/boostcampwm2023/and09-PriceGuard',
    )
    return (
      <button
        disabled={true}
        className="linkButton"
        onClick={() => openLink(repositoryLink)}
      >
        미지원 기기입니다
      </button>
    )
  }

  return (
    <button className="linkButton" onClick={() => openLink(link)}>
      앱 열기
    </button>
  )
}

const DownloadButton: React.FC = () => {
  const downloadLink = new URL(
    'https://appdistribution.firebase.dev/i/b299ae01bd67c829',
  )

  return (
    <button className="linkButton" onClick={() => openLink(downloadLink)}>
      앱 다운로드
    </button>
  )
}

const GitHubStarButton: React.FC = () => {
  return (
    <div className="githubStarContainer">
      <GitHubButton
        href="https://github.com/boostcampwm2023/and09-PriceGuard"
        data-color-scheme="no-preference: light; light: light; dark: dark;"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star buttons/github-buttons on GitHub"
      >
        Star
      </GitHubButton>
    </div>
  )
}

export default Direct11st
