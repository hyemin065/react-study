import React, {useEffect, useState, useRef} from 'react';

function Timer(){
    const [time, setTime] = useState("");
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [isShow, setIsShow] = useState(true);
    const timer = useRef(null);
    
    function getHour(e){
        const value = parseInt(e.target.value);
        setHour(value);
    }

    function getMin(e){
        const value = parseInt(e.target.value);
        setMin(value);
    }

    function getSec(e){
        const value = parseInt(e.target.value);
        setSec(value);
    }

    function printTime(){
        const currentTime = `${hour < 10 ? "0"+hour : hour} : ${min < 10 ? "0"+min : min} : ${sec < 10 ? "0"+sec : sec}`
        return currentTime;
    }

    function getTime(e){
        e.preventDefault();
        setTime(printTime());
        setIsShow(false);
    }

    function start(){
        setIsStarted(true);
    }

    function stop(){
        clearTimeout(timer.current);
        setIsStarted(false);
        console.log(printTime());
    }

    function reset(){
        setSec(0);
        setMin(0);
        setHour(0);
        setTime(printTime());
        clearTimeout(timer.current);
        setIsStarted(false);

        console.log(printTime());
    }
    // useEffect(()=>{
    //     if(isStarted){
    //         if(sec === 0 && min === 0 && hour === 0){
    //             setIsStarted(false);
    //             clearTimeout(timer.current);
    //         }
            
    //         if(sec === 0 && min <= 0 && hour > 0){
    //             setSec(59);
    //             setMin(59);
    //             setHour(prev => prev - 1);
    //         }
    //         if(sec === 0 && min > 0){
    //             setMin(prev => prev - 1);
    //         }
    //         timer.current = setTimeout(()=>{
    //             if(sec > 0){
    //                 setSec(prev => prev - 1);
    //             }else{                    
    //                 setSec(59);
    //             }
    //         },1000)
    //         setTime(printTime());

    //     }
    // },[isStarted,sec])

    useEffect(()=>{
        if(isStarted){
            if(sec === 0 && min === 0 && hour === 0){
                clearTimeout(timer.current);
                setIsStarted(false);
            }
            
            if(hour > 0){
                if(min > 0 && sec < 0){
                    setMin(prev => prev - 1)
                    setSec(59);
                }else if(min === 0 && sec < 0){
                    setHour(prev => prev - 1);
                    setMin(59);
                    setSec(59); 
                }
            }
            if(hour === 0 && min > 0){
                if(sec < 0){
                    setMin(prev => prev - 1);
                    setSec(59);
                }
            }
            if(sec >= 0){
                timer.current = setTimeout(()=>{
                    setSec(prev => prev - 1);
                },1000)
            }
            
            setTime(printTime());
        }

    },[isStarted, sec])

    return (
        <>
            {isShow ? (
                <form onSubmit={getTime}> 
                <input type="number" min="0" value={hour} onChange={getHour}/>
                <input type="number" min="0" max="59" value={min} onChange={getMin}/>
                <input type="number" min="0" max="59" value={sec} onChange={getSec}/>
                <button type="submit">전송</button>
            </form>
            ) : null}
            <div>{time}</div>
            <div onClick={start}>start</div>
            <div onClick={stop}>stop</div>
            <div onClick={reset}>reset</div>
        </>
    );
}

export default Timer;