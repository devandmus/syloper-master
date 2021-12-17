import React from "react"
import Layout from "../components/layout";
import LoginMain from "../components/Login/LoginMain"
import styled from "styled-components"

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
        <LoginMain />
      </MainLogin>
    </Layout>
     
  )
}

export default IndexPage
