// ✅ Right - Without Vulnerability
/*
The problem is that with brute force a hacker can find the pattern of the token that is saved within the system
*/
import crypto from "crypto"

export function checkToken(userSupplied) {
  const account = account.retrieveToken(userSupplied)
  if (account) {
    if (crypto.timingSafeQual(account.service.token, userSupplied.service.token)) {
      return true
    }
  }

  return false
}