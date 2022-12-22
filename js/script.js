
let timer=10;
let time = document.getElementById('display');

setTimeout(() => {
    time.innerHTML = timer--;
    setTimeout(() =>{
        time.innerHTML = timer--;

        setTimeout(() =>{
            time.innerHTML = timer--;

            setTimeout(() =>{
                time.innerHTML = timer--;

                setTimeout(() =>{                   
                    time.innerHTML = timer--;

                    setTimeout(() =>{    
                        time.innerHTML = timer--;

                        setTimeout(() =>{                           
                            time.innerHTML = timer--;

                            setTimeout(() =>{            
                                time.innerHTML = timer--;

                                setTimeout(() =>{                                   
                                    time.innerHTML = timer--;

                                    setTimeout(() =>{
                                        time.innerHTML = timer--;

                                        setTimeout(() =>{
                                            time.remove();

                                            const myDiv = document.createElement("div");
                                            myDiv.innerHTML =`<div>
                                                                <img src="./images/Flag_of_India.png" alt="indian_flag">
                                                                <p>Happy independence day</p>
                                                             </div>`
                                            document.body.appendChild(myDiv) ;                

                                        },1000)

                                    },1000)

                                },1000)

                            },1000)

                        },1000)

                    },1000)

                },1000)

            },1000)     

        },1000)

    },1000)

}, 1000); 