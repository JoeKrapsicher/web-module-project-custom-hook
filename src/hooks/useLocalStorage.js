import { useState } from 'react';


//return value should be someting kinda like [firstName, setFirstName]



const useLocalStorage = (key, initialValue) => {

    console.log("accessed useLocal Storage")
    const [storedValue, setStoredValue ] = useState(() =>{

        console.log("accessed store value state")

        const setStoredValue = value => {
            //Save State
            console.log("stored value!", value)
            setStoredValue(value);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(value))
        }


        // Get from local storage by key
        const item = window.localStorage.getItem(key);

        // Parse and return stored json or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;

        

    })

    return [storedValue];

}

export default useLocalStorage;










































// to set something to local storage, we need a key (must be a string) and a value (can be anything)

//First, check localStorage. (Did user already start this form?)
//If the values is already in localStorage, use it to initialize the useState call
// const [value, setStateValue] = useState(() => {
//     if (localStorage.getItem(key)) {
//         return JSON.parse(localStorage.getItem(key))
//     }
//     else {
//         localStorage.setItem(key, JSON.stringify(initialValue))
//         return initialValue;
//     }
// });

//When setValue is called, in addition to the normal useState behavior, also persist the new values to localStorage

// const setValue = (newValue) => {
//     setStateValue(newValue);
//     localStorage.setItem((key, JSON.stringify(newValue)))
// }

// return [value, setValue]


// const initialvalues = {
//     coinData: [],
//     darkMode: false
// }
// export const useLocalStorage = () => {

//     const [values, setValues] = useState();

//     const handleChanges = e =>{
//         console.log("change event", e.target);
//         setValues({
//             ...values,
//             [e.target.]
//         })
//     }
// }