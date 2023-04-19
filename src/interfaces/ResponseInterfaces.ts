export interface LoginResponse {
  data: Data
  status: number
  statusText: string
  headers: Headers
  config: Config
  request: Request
}

export interface Data {
  token: string
}

export interface Headers {
  "content-length": string
  "content-type": string
}

export interface Config {
  transitional: Transitional
  adapter: string[]
  transformRequest: any[]
  transformResponse: any[]
  timeout: number
  xsrfCookieName: string
  xsrfHeaderName: string
  maxContentLength: number
  maxBodyLength: number
  env: Env
  headers: Headers2
  baseURL: string
  method: string
  url: string
  data: string
}

export interface Transitional {
  silentJSONParsing: boolean
  forcedJSONParsing: boolean
  clarifyTimeoutError: boolean
}

export interface Env {}

export interface Headers2 {
  Accept: string
  "Content-Type": string
}

export interface Request {}