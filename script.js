const tempLoad=()=>{
    let temp=document.getElementById('temp');
    temp.innerHTML="&#xf2cb";

    // setTimeout(func,time(in milisecond))
    setTimeout(()=>{
        temp.innerHTML="&#xf2ca";
        temp.style.color="#4203c9";
    },1000);

    setTimeout(()=>{
        temp.innerHTML="&#xf2c9";
        temp.style.color="#16acea";
    },2000);

    setTimeout(()=>{
        temp.innerHTML="&#xf2c8";
        temp.style.color="#e8d71e";
    },3000);

    setTimeout(()=>{
        temp.innerHTML="&#xf2c7";
        temp.style.color="#d71b3b";
    },4000);
}


tempLoad();

// setInterval for infinite loop it is similar to recursion
setInterval(tempLoad,5000);