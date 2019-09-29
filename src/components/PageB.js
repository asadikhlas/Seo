import React from "react";
import SocialLinks from "./SocialLinks";
import { Helmet } from 'react-helmet'
const Links = [
    { name: "Facebook", link: "www.facebook.com", },
    { name: "Instagram", link: "www.instagram.com", },
    { name: "Twitter", link: "www.amazon.com" }
]

const PageB = ({ history }) => (
    <div>

        <Helmet>
            <title>Page B</title>
            <meta name="description" content="testing react helmet" />
            <meta name="keywords" content="suggests,impeachment,chapter" />
        </Helmet>
        <a style={{ cursor: 'pointer' }} onClick={() => history.push("/")}> Goto Page A</a>

        <h1>This is page2</h1>
        <p>
            This is page2This is page2This is page2This is page2This is page2This is
            page2This is page2This is page2This is page2This is page2This is page2This
            is page2This is page2This is page2This is page2This is page2This is
            page2This is page2This is page2This is page2This is page2This is page2This
            is page2This is page2This is page2This is page2This is page2This is
            page2This is page2This is page2This is page2This is page2This is page2This
            is page2This is page2This is page2This is page2This is page2This is
            page2This is page2This is page2This is page2This is page2This is page2This
            is page2This is page2This is page2This is page2This is page2This is
            page2This is page2This is page2This is page2This is page2This is page2This
            is page2This is page2This is page2This is page2This is page2This is
            page2This is page2This is page2This is page2This is page2This is page2This
            is page2This is page2This is page2This is page2This is page2This is
            page2This is page2This is page2This is page2This is page2This is page2This
            is page2This is page2This is page2This is page2This is page2This is page2
    </p>
        <SocialLinks links={Links} />
    </div>
);

export default PageB;
