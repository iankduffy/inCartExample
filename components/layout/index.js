import Header from "components/shared/header"

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main className="container u-mar-v-md">
        {children}
      </main>
    </>
  )
}

export default Layout