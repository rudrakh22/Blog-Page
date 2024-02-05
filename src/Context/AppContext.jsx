import { createContext, useState } from "react";

const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPage(data?.page);
      setPosts(data?.posts);
      setTotalPages(data?.totalPages);
    } catch (err) {
      console.log("error occured");
      setPage(1);
      setTotalPages(null);
      setPosts([]);
    }

    setLoading(false);
  }

  function handlerPageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  const value = {
    loading,
    setLoading,
    page,
    setPage,
    posts,
    setPosts,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlerPageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
