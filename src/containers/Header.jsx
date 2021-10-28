import React, { Children } from 'react';

export default function Header({children}) {
    return (
        <header className="header-menu">
            {children}
        </header>
    )
}
