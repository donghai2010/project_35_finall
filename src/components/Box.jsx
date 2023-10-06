
import './DashBoard.css';

export default function Box({classbox, heading}) {
  return (
    <div className= {classbox}>
        <h3>{heading}</h3>
        <p>12/Mei/2023(YtD)</p>
        <p>OS: 23,938%</p>
        <p>GS: 20,900M </p>
    </div>
  )
}
