/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

export interface ResponseError {
  message: string
  path: string
}

export interface BaseResponse {
  success?: boolean
  errors?: ResponseError[]
}
