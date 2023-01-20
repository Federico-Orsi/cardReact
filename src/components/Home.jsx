import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Header from './Header';
import CountDown from './CountDown';
import Fiesta from './Fiesta';
import ArticleFlor from './ArticleFlor';
import Vestimenta from './Vestimenta';

import TeEsperamos from './TeEsperamos';
import HookForm from './HookForm';

const Home = () => {
    return (
        <>
        <Header/>
        <CountDown/>
        <Fiesta/>
        <ArticleFlor/>
        <Vestimenta/>
        <HookForm/>
        <TeEsperamos/>
        
    
    
    
    
     
     </>
    );
};

export default Home;