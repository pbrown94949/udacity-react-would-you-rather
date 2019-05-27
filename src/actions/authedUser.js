export const LOGIN_USER = 'LOGIN_USER'

export function loginUser(id) {
  return {
    type: LOGIN_USER,
    id,
  }
}
