// ❌ Wrong - With Vulnerability
export function checkToken(userSupplied) {
  const account = account.retrieveToken(userSupplied)
  if (account) {
    if (account.service.token === userSupplied.service.token) {
      return true
    }
  }

  return false
}