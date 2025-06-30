import panel from "../assets/images/panel.svg";
import appointment from "../assets/images/appointment.svg";
import clock from "../assets/images/clock.svg";
import sampleDoctor from "../assets/images/sampleDoctor.png";
import micro from "../assets/images/micro.svg";
import heart from "../assets/images/heart.svg";

export const navBoxTitle = "Other Departments";
export const navBoxContent = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Gastroenterology",
  "Urology & Andrology",
  "Gynecology",
  "Pediatrics",
  "Dermatology",
];

export const urologyDepartmentHeader = "DEPARTMENT OF UROLOGY & ANDROLOGY";
export const urologyDepartmentHeaderContent =
  "The department offers comprehensive Urologic Surgeries by a Senior Urologist as pioneer in field of Urology and Andrology with availability of all latest equipments needed for advanced care of kidney, Stone Disease , Prostate surgery , Paediatric Urology, Female Urology & Male infertility and all the Urologic problems. The Department is well equipped with Urodynamics , Lithotripsy (ESWL), C-Arm, Lithoblast etc. with Endourological & Laparoscopic instruments.";

export const urologyFacilityHeader =
  "The Department has facilities for the following";
export const urologyFacilityHeaderContent = [
  "Endourology/TURP/PCNL/URS/Diode Laser/Enucleation of Prostate/TURBT",
  "Laparoscopic urological surgeries",
  "Sexual Dysfunction",
  "Urodynamics Paediatric, Onco & Reconstructive urology",
  "Infertility (Male)",
  "ESWL (Lithotripsy)",
  "Urine Incontinence for Male/Female",
];

export const urologyOdpBookingHeader = "OPD Booking";
export const urologyOdpBookingContent = [
  {
    drName: "Dr. Michael Chen",
    design: "MBBS, MD (CARDIOLOGY)",
    drPhoto: sampleDoctor,
    details: [
      {
        icon: panel,
        content: "On Panel: Yes",
      },
     
      {
        icon: clock,
        content: "Monday to Saturday 11 am to 1 pm",
      },
    ],
    buttonText: "Confirm Availabilty",
  },
  {
    drName: "Dr Arvind Tiwari",
    design: "MBBS, MS,MCh (UROLOGY)",
    drPhoto: sampleDoctor,
    details: [
      {
        icon: panel,
        content: "On Panel: Yes",
      },
      {
        icon: appointment,
        content: "By Appointment",
      },
      {
        icon: clock,
        content: "Monday to Saturday 11 am to 1 pm",
      },
    ],
    buttonText: "Confirm Availabilty",
  },
];

export const urologyEquipmentHeader = "Our Advanced Equipment";
export const urologyEquipmentContent = [
  {
    icon: micro,
    title: "Lithotripsy (ESWL)",
    content:
      "Advanced stone fragmentation technology for non-invasive kidney stone treatment.",
  },
  {
    icon: heart,
    title: "Urodynamics",
    content:
      "Comprehensive testing for bladder and urethral function assessment.",
  },
  {
    icon: micro,
    title: "Laparoscopic Equipment",
    content:
      "Minimally invasive surgical tools for faster recovery and reduced complications.",
  },
];
