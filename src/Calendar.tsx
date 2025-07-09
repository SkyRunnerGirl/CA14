import { appointments } from "./myData"
import AppointmentCard from "./Appointment";

export default function Calendar() {
  return (
    <div className = "row m-2 p-2">
        <h3 className="m-0 p-0 pb-2">Current Week</h3>
        {appointments.map(appt => <AppointmentCard key={appt.id} day={appt.day} time={appt.time} text={appt.text}/>)}
    </div>
  );
}
