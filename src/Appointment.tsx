
type Props = {
    day: string,
    time: string,
    text: string
}

export default function AppointmentCard({day, time, text}: Props) {
  return (
    <div className="card m-0 p-0">
      <div className="card-body">
        <p className="card-text">
          {day} {time} <br/>
          {text}
        </p>
        <div className="d-flex gap-3 m-0 p-0">
            <button className="btn btn-primary btn-sm">Update</button>
            <button className="btn btn-danger btn-sm">Delete</button>
        </div>
      </div>
    </div>
  );
}
