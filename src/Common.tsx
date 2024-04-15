import React from 'react'
import GitHubButton from 'react-github-btn'
import { DeepLinkProps } from './data/DeepLinkProps'
import { StoreType } from './data/StoreType'

const GITHUB_URL: string = 'https://github.com/boostcampwm2023/and09-PriceGuard'
const FALLBACK_URL: string =
  'https://play.google.com/store/apps/details?id=app.priceguard'

export const generateDeepLink = (store: StoreType, code: string): URL => {
  if (code === undefined) {
    return new URL(GITHUB_URL)
  }

  return new URL(
    `intent://product/?store=${store}&code=${code}#Intent;` +
      `package=app.priceguard;` +
      `scheme=priceguard;` +
      `S.browser_fallback_url=${FALLBACK_URL};end`,
  )
}
export const openLink = (link: URL): void => {
  window.location.assign(link.toString())
}

export const LogoImage: React.FC = () => {
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
export const DeepLinkButton: React.FC<DeepLinkProps> = ({
  link,
  supported,
}) => {
  if (!supported) {
    const repositoryLink = new URL(GITHUB_URL)

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
export const DownloadButton: React.FC = () => {
  const downloadLink = new URL(FALLBACK_URL)

  return (
    <button className="linkButton" onClick={() => openLink(downloadLink)}>
      앱 다운로드
    </button>
  )
}
export const GitHubStarButton: React.FC = () => {
  return (
    <div className="githubStarContainer">
      <GitHubButton
        href={GITHUB_URL}
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
