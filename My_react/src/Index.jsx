function Index() {
  const isLogged = true

  return (
    <div>
      {isLogged ? <h1>Profile page</h1> : <h1>Login page</h1>}
    </div>
  )
}

export default Index