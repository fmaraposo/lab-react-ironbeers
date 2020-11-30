import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom'

function Home () {

        return (
            <div className = "container">
                <div className= "sections">
                    <h2> <Link to={'/beers'}>All Beers</Link></h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquam dolorem quis, beatae sequi veniam suscipit odit ad nam. Laborum porro, officiis asperiores perferendis cum mollitia obcaecati iure aliquam autem?</p>
                </div>
                <div className= "sections">
                    <h2><Link to={"/random-beer"}>Random Beers</Link></h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquam dolorem quis, beatae sequi veniam suscipit odit ad nam. Laborum porro, officiis asperiores perferendis cum mollitia obcaecati iure aliquam autem?</p>
                </div>
                <div className= "sections">
                    <h2><Link to={"/new-beer"}>New Beer</Link></h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquam dolorem quis, beatae sequi veniam suscipit odit ad nam. Laborum porro, officiis asperiores perferendis cum mollitia obcaecati iure aliquam autem?</p>
                </div>
            </div>
        )
}

export default Home;