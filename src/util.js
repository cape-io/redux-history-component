import { parseUrl } from 'redux-history-sync'

export function getLocation({ to, href, ...location }) {
  return {
    ...parseUrl(to || href),
    ...location,
  }
}
