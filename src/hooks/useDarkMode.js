import useLocalStorage from './useLocalStorage'

const useDarkMode = (key) => {
    console.log("Accessed Darkmode")
    const [darkMode, setDarkMode ] = useLocalStorage(key);

    return [darkMode, setDarkMode]

}

export default useDarkMode;