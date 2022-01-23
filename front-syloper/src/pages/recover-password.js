import React from "react"
import Layout from "../components/layout";
import { MainLoginStyled}  from "./styles/MainLoginStyled"
import RecoverPassword from "../components/Login/RecoverPassword";


const IndexPage = () => {
  return (
    <Layout>
      <MainLoginStyled>
        <RecoverPassword />
      </MainLoginStyled>
    </Layout>
     
  )
}

export default IndexPage
