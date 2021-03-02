// Imports
import {Bar} from 'react-chartjs-2';

// Types
type Props = {
    data: any[];
    selectedPlayer: String;
}
type PlayerData = {
    Ball_Control: Number;
    Dribbling: Number;
    Aggresssion: Number;
    Acceleration: Number;
    Speed: Number;
    Shot_Power: Number
}

function PlayerDetailView(props: Props) {
    const data = props.data;
    const playerName = props.selectedPlayer;
    let playerData: PlayerData;
    
    if (playerName === "Nothing") {
        return <h2>No Player selected</h2>
    }
    // Get data of selected player
    for (const player of data) {
        if (player.Name === playerName) {
            playerData = {
                Ball_Control: player.Ball_Control,
                Dribbling: player.Dribbling,
                Aggresssion: player.Aggression,
                Acceleration: player.Acceleration,
                Speed: player.Speed,
                Shot_Power: player.Shot_Power
            }
            break;
        }
    }
    return (
        <div className="details">
            <h1>{playerName}</h1>
            <Bar 
            data={{
                labels: ["Ball Control", "Dribbling", "Aggression", "Acceleration", "Speed", "Shot Power"],
                datasets: [
                {
                    label: "Points 0-100",
                    data: [playerData!.Ball_Control, playerData!.Dribbling, playerData!.Aggresssion,
                        playerData!.Acceleration, playerData!.Speed, playerData!.Shot_Power]
                },
                ],
            }}
            height={400}
            width={600}
            options={{
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min: 0,
                            max: 100    
                        }
                      }]
                   }
               
            }}
            />
        </div>
    )
}

export default PlayerDetailView;