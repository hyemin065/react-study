import React from 'react';

function TabNav({click}){
    return(
        <ul>
            <li onClick={click} id="menu1">메뉴1</li>
            <li onClick={click} id="menu2">메뉴2</li>
            <li onClick={click} id="menu3">메뉴3</li>
            <li onClick={click} id="menu4">메뉴4</li>
        </ul>
    );

}

export default TabNav;