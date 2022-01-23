import React from "react"
import Layout from "../components/layout";
import Nav from "../components/Home/Nav"
import Dashboard from "../components/Home/Dashboard"

const HomePage = () => {
  return (
    <Layout>
        <Nav/>
        <Dashboard/>
    </Layout>
     
  )
}

export default HomePage
