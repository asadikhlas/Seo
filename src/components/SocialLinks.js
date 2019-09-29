import React from 'react'

const SocialLinks = ({ links }) => (
    <ul>{links.map(item =>
        <li>
            <a href={item}>{item.name}</a>
        </li>
    )}</ul>
)

export default SocialLinks