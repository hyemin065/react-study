import React, {useEffect, useState, useRef} from 'react';

function Stop(){
    const [sec, setSec] = useState(59);
    const [min, setMin] = useState(0);
    const [hour, setHour] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const curTimer = useRef(null);

    function start(){
        setIsStarted(true);
    }

    function stop(){
        setIsStarted(false);
        clearTimeout(curTimer.current);
    }

    function reset(){
        setSec(0);
        setMin(0);
        setHour(0);
        setIsStarted(false);
        clearTimeout(curTimer.current);
    }

    useEffect(()=>{
        if(isStarted){
            curTimer.current = setTimeout(function(){
                setSec(sec + 1)
                if(sec > 59){
                    setSec(0);
                    setMin(min + 1);
                }
                if(min > 59){
                    setMin(0);
                    setHour(hour + 1);
                }
            },1000)
        }
    },[isStarted,sec])

    return(
        <>
            <div>{hour < 10 ? "0"+hour : hour} : {min < 10 ? "0"+min : min} : {sec < 10 ? "0"+sec : sec}</div>
            <div onClick={start}>start</div>
            <div onClick={stop}>stop</div>
            <div onClick={reset}>reset</div>
        </>
    );
}

export default Stop;