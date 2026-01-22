import { useEffect, useState } from "react";

function Search() {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Search:', query);
    }, 500);
    return () => {
      clearTimeout(timer);
    }
  }, [query])

  return (
    <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search...." />
  )
}
export default Search;