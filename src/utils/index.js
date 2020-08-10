import initIcons from './icons'

const isBrowser = typeof window !== 'undefined'

const trimTrailingSlash = string => string.replace(/\/$/, '')

export { isBrowser, trimTrailingSlash, initIcons }
