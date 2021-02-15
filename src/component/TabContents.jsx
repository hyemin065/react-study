import React from 'react';
import styled from 'styled-components';

const Contents = styled.div`
    display:none;
    &.active{display:block;}
`;

function TabContents({menu}){
    return(
        <div>
            <Contents className={menu === "menu1" ? "active" : ""}>컨텐츠 1</Contents>
            <Contents className={menu === "menu2" ? "active" : ""}>컨텐츠 2</Contents>
            <Contents className={menu === "menu3" ? "active" : ""}>컨텐츠 3</Contents>
            <Contents className={menu === "menu4" ? "active" : ""}>컨텐츠 4</Contents>
        </div>
    )
}

export default TabContents;