// Code Keypad Component Here

function Keypad (){
    function handleChange(event){
        console.log('Entering password...' + event.target.value)
    }
    return (

        <input type="password" onChange={handleChange}></input>

    )
}

export default Keypad;