// Types
type Props = {
    data: any[];
    selectPlayer: (player: String) => void;
}

function PlayerTable(props: Props) {
    // Sort Data descendingly
    const sortedData = [...props.data];
    sortedData.sort((a, b) => a.Name.localeCompare(b.Name));
    return (
        <div className="tableWrapper">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Nationality</th>
                        <th>National Position</th>
                        <th>Club</th>
                        <th>Height</th>
                        <th>Preferred Foot</th>
                        <th>Select Player</th>
                    </tr>
                </thead>
                <tbody>
                {sortedData.map((player: any) => (
                <tr key={player.Name}>
                    <td>{player.Name}</td>
                    <td>{player.Nationality}</td>
                    <td>{player.National_Position}</td>
                    <td>{player.Club}</td>
                    <td>{player.Height}</td>
                    <td>{player.Preffered_Foot}</td>
                    <td><button onClick={() => props.selectPlayer(player.Name)} >+</button></td>
                </tr>))}
                </tbody>
            </table>
        </div>
    );
}

export default PlayerTable;