declare namespace Express {
  export interface Request {
    userToken?: string
    sellerToken?:string
    adminToken?:string
  }
}