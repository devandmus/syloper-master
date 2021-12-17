import React from "react"
import Layout from "../components/layout";
import styled from "styled-components"
import RecoverPassword from "../components/Login/RecoverPassword";

// REFACTORIZAR

const MainLogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  align-content: flex;
  justify-content: center;
  background-color: #f8f9fa;
`;


const IndexPage = () => {
  return (
    <Layout>
      <MainLogin>
        <RecoverPassword />
      </MainLogin>
    </Layout>
     
  )
}

export default IndexPage
