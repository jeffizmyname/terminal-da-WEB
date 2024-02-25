import { changeTheme, getTheme } from "../utils/themeChagne"

export default function Theme(props: {theme: string}) {
    const themes = [
        'darkNight',
        'Wastelands',
        'coffee',
        'pastelClouds',
        'neon',
        'grayScale',
        'ocean',
        'calmSpace',
        'modernWhite',
        'bananaSunset',
        'lavenderHill',
        'orangeJuice',
        'cherryBlossom'
    ]

    function handleThemeChagne() {
        if(themes.includes(props.theme)) {
            changeTheme(props.theme)
            return (<p>Theme chagned to <span className="text-splash"> {getTheme()}</span></p>)
        } else {
            return (<p>Theme <span className="text-splash">'{props.theme}'</span> does not exits</p>)
        }
    }


    return (
        <>
            {props.theme === "" ? 
            <>
            {themes.map((theme) => <p>&nbsp;&nbsp;{getTheme() === theme ?  <b>&gt;{theme}</b> : theme}</p>)}
            <br /><p>use <span className="text-splash">'theme [theme name]'</span> to chagne theme</p>
            </> :
            handleThemeChagne()}
        </>
    )
}