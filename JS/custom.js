new Promise ( (resolve , reject) => {
    setTimeout( () =>{
        document.getElementById("o").style.visibility = "visible";
        resolve()
    },1000 )
})
.then( ()=>{
    return new Promise( (resolve , reject) =>{
        setTimeout( () =>{
            document.getElementById("t").style.visibility = "visible";
            resolve()
        },1000 )
    } )
} )
.then( ()=>{
    return new Promise( (resolve , reject) =>{
        setTimeout( () =>{
            document.getElementById("th").style.visibility = "visible";
            resolve()
        },1000 )
    } )
} )
.then( ()=>{
    return new Promise( (resolve , reject) =>{
        setTimeout( () =>{
            document.getElementById("f").style.visibility = "visible";
            resolve()
        },1000 )
    } )
} )


