import React from 'react';
import './page/home.css'
import Echart1 from './components/Echart1'
export default function Home() {
    return (
        <div className="home">
            <header>
            </header>
            <main>
                <section className='section1 bordered'>
                    <Echart1 />
                </section>
                <section className='section2 bordered'></section>
                <section className='section3 bordered'></section>
                <section className='section4 bordered'></section>
                <section className='section5 bordered'></section>
                <section className='section6 bordered'></section>
                <section className='section7 bordered'></section>
                <section className='section8 bordered'></section>
                <section className='section9 bordered'></section>
                <section className='section10 bordered'></section>
            </main>
            <footer>11</footer>
        </div>
    )
}