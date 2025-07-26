import { allDoctors } from "../components/AppointmentWrapper/AppointmentWrapper";

export const doctorsList = allDoctors.map((doctor) => ({
  drName: doctor.drName,
}));
