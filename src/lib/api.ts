import axios, { AxiosResponse, ResponseType } from 'axios'
import moment from 'moment'

export const BASE_URL = import.meta.env.VITE_API_URL

type Response = {
  token: string
  expires_in: string
  token_type: string
  access_token: string
}

const getHeaderLocalStorage = () =>
  JSON.parse(localStorage.getItem('token') as string)

const setHeaderLocalStorage = (res: Response) => {
  const header = {
    Authorization: `${res.token_type} ${res.access_token}`
  }
  localStorage.setItem('token', JSON.stringify(header))
}

const getExpireTokenLocalStorage = () =>
  JSON.parse(localStorage.getItem('expire_token') as string)

const setExpireTokenLocalStorage = (res: Response) =>
  localStorage.setItem(
    'expire_token',
    JSON.stringify(moment().add(res.expires_in, 's'))
  )

const hasExpireToken = (expireToken: string) => expireToken !== null

const isExpiredToken = (expireToken: string) => moment().diff(expireToken) <= 0

const hasToken = (token: string) => token !== null

export const getToken = async () => {
  let token = getHeaderLocalStorage()

  const expireToken = getExpireTokenLocalStorage()

  if (
    !(
      hasExpireToken(expireToken) &&
      isExpiredToken(expireToken) &&
      hasToken(token)
    )
  ) {
    const params = new FormData()
    params.set('grant_type', 'client_credentials')
    params.set('scope', '*')
    params.set('client_id', import.meta.env.VITE_API_CLIENT_ID as string)
    params.set(
      'client_secret',
      import.meta.env.VITE_API_CLIENT_SECRET as string
    )
    try {
      const res: AxiosResponse<Response> = await axios({
        method: 'post',
        url: `${BASE_URL}oauth/token`,
        data: params,
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      })
      setHeaderLocalStorage(res.data)
      setExpireTokenLocalStorage(res.data)
      token = getHeaderLocalStorage()
    } catch (err) {
      console.log(err)
    }
  }

  return token
}

export const apiCall = async (
  url: string,
  data: object | null,
  method: string,
  responseType: ResponseType | undefined = 'json'
) => {
  const token = await getToken()

  const headers = {
    ...token
  }

  return axios({
    method,
    url: `${BASE_URL}api/${url}`,
    data,
    headers,
    responseType
  })
}
