import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, subtitle, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  header = (
    <div>
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
      <h3 className="sub-heading">{subtitle}</h3>
    </div>
  )

  return (
    <div className="global" data-is-root-path={isRootPath}>
      <header className="main-heading">{header}</header>
      <main className="global-wrapper">{children}</main>
      <footer className="footer">
        © {new Date().getFullYear()}, <span className=" built-with"> {' '} Built with</span>
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
