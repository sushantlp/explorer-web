import { useFetch } from './useFetch'

const url = 'https://mainnet.poetnetwork.net/works'

const urlById = id => `${url}/${id}`

const urlByIssuer = issuer => `${url}?issuer=${issuer}`

export const useWorkById = id => useFetch(urlById(id))

export const useWorkByIssuer = issuer => useFetch(urlByIssuer(issuer))

export const useWorks = () => useFetch(url)
