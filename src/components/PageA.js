import React from 'react'
import SocialLinks from './SocialLinks'
import { Helmet } from "react-helmet";

const Links = [
    { name: "Google", link: "www.google.com", },
    { name: "Yahoo", link: "www.yahoo.com", },
    { name: "Amazon", link: "www.amazon.com" }
]
const PageA = ({ history }) => (
    <div>
        <Helmet>
            <title>Page A</title>
            <meta name="description" content="testing react helmet" />
            <meta name="keywords" content="suggests,impeachment,chapter" />
        </Helmet>
        <a style={{ cursor: 'pointer' }} onClick={() => history.push('/pageb')}>Goto Page B</a>


        <h1>This is page1</h1>
        <p>Amid AOC pressure
         Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure, Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'Amid AOC pressure
             Pelosi suggests impeachment back on the table to address 'grave new chapter of lawlessness'</p>
        <SocialLinks links={Links} />
    </div>
)

export default PageA
