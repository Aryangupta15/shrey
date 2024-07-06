


                                                    // METHOD FIRST
async function fetchdata(){
 
    try {
        
        const URL = `https://jsonplaceholder.typicode.com/todos/1`
        const response = await fetch(URL);
    
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("Error hai");
    }
    
}

fetchdata();


                                                    // METHOD SECOND
async function fetchdata(){
    
    try {
        const URL = `https://jsonplaceholder.typicode.com/todos/1`
        // const response = await fetch(URL)
        fetch(URL)
        .then( response => response.json())
        .then(json => console.log(json));

    } catch (error) {
        console.log("Error hai");
    }
}

fetchdata();

