import React, { useState } from 'react';
import TabNav from './TabNav';
import TabContents from './TabContents';


function Tab(){

    let [menu, setMenu] = useState("menu1");

    function click(e){
        let {id} = e.target;
        setMenu(id);
        console.log(id)
        console.log(menu)
    }


    return(
        <>
            <TabNav click={click}></TabNav>
            <TabContents menu={menu}></TabContents>
        </>
    )
}

export default Tab;