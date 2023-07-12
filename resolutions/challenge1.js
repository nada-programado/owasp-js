// ✅ Right - Without Vulnerability
/* 
The problem is because it is directly involved with the redirect URL, because it can use the javascript protocol. e.g.:
https://example.com/settings/?redirect=javascript://doSomething()
*/
import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

export default function Root() {
  return (<Router> <QueryParamsDemo/ > </Router>)
}

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search) , [search])
}

function QueryParamsDemo() {
  let query = useQuery()

  function validateURL(url) {
    const userSuppliedUrl = new URL(url)

    if (userSuppliedUrl.protocol === "https:") {
      return url
    }

    return "/"
  }
  return (
    <div>
      <h2>Return Home</h2>
      <a href={validateURL(query.get("redirect"))}>Click to go home</a>
    </div>
  )