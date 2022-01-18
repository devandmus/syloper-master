import React from "react"
import Layout from "../components/layout";
import LoginMain from "../components/Login/LoginMain"
import { MainLoginStyled } from "./styles/MainLoginStyled"


const IndexPage = () => {
  return (
    <Layout>
      <MainLoginStyled>
        <LoginMain />
      </MainLoginStyled>
    </Layout>
     
  )
}

export default IndexPage
