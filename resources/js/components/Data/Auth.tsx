export const TOKEN_KEY = '@bilawine-token'

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const loginlocal = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token)
}

export const logout = () => {
    localStorage.clear()
}