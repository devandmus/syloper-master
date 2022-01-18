import React from 'react';
import Header from '../Header';
import Nav from '../Nav';
import {HomeContainer, HomeMain} from './styles';

const Home = ({ children, title }) => {
    return (
        <HomeContainer>
                <Nav />
                <HomeMain>
                    <main>
                        <Header title={title}/>
                        { children }
                    </main>
                </HomeMain>
        </HomeContainer>
     );
}
 
export default Home;