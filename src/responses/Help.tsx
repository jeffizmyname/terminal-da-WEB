

export default function Help() {
    const commands = [
        ['help', 'displays this'],
        ['theme/themes', 'shows options for chganing theme'],
        ['weather [city]', 'nice weather info for given city'],
        ['kitten', 'generates kitten picture :3']
    ]

    return (
        <div className="grid grid-cols-2 w-fit">
            {commands.map((command) => <><span className="text-splash tab">&nbsp;&nbsp;'{command[0]}'</span><span>{command[1]}</span></>)}
        </div>
    )
}