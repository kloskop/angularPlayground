import { ISupport } from "./i-support"
import { IUser } from "./i-user"

export interface IUserResponse {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: IUser[]
  support: ISupport
}
