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
  "Bariatric",
  "Plastic",
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

/* Department Header & Intro */
export const gynaeDepartmentHeader = "DEPARTMENT OF OBSTETRICS & GYNAECOLOGY";
export const gynaeDepartmentHeaderContent =
  "Our department provides 24-hour dedicated care for women with a specialist team led by Dr. Nirupama Goyal (MBBS, MS) and a team of accomplished gynecologists experienced in handling normal and high-risk pregnancies, adolescent issues, infertility, and postmenopausal care. The department is equipped with advanced technology and a personalized approach for all maternity and gynecological needs.";

/* Facilities/Scope */
export const gynaeFacilityHeader = "Scope of the Department";
export const gynaeFacilityHeaderContent = [
  "Gynecological OPD",
  "Antenatal Check Up",
  "Normal Delivery",
  "LSCS (Cesarean Section)",
  "High-risk Pregnancy Care (diabetes, hypertension, anemia, etc.)",
  "Pregnancy with Negative Blood Group",
  "Pregnancy with Bad Obstetric History",
  "MTP & Family Planning Services",
  "Infertility OPD",
  "Adolescent Gynecology",
  "High-tech Obstetric Care with CTG Monitoring",
  "Painless Delivery & Intrapartum Care",
  "Advanced Laparoscopic and Hysteroscopic Surgery",
];

/* Doctor Panel & OPD Booking */
export const gynaeOdpBookingHeader = "OPD Booking";
export const gynaeOdpBookingContent = [
  {
    drName: "Dr. Nirupama Goyal",
    design: "MBBS, MS (Obstetrics & Gynaecology)",
    drPhoto: sampleDoctor,
    details: [
      {
        icon: panel,
        content: "On Panel: Yes",
      },
      {
        icon: clock,
        content: "Monday to Saturday 10 am to 2 pm",
      },
    ],
    buttonText: "Confirm Availability",
  },
  {
    drName: "Dr. Anju Gautam",
    design: "MBBS, DGO",
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
    buttonText: "Confirm Availability",
  },
  // Repeat for other doctors (Dr. Aparna Gupta, Dr. Parmeen Sachdeva, etc.)
];

/* Advanced Equipment */
export const gynaeEquipmentHeader = "DEPARTMENT OF  GYNECOLOGY";
export const gynaeEquipmentContent = [
  {
    icon: micro,
    title: "CTG Machine",
    content: "Latest technology for continuous fetal monitoring during labor.",
  },
  {
    icon: heart,
    title: "Laparoscopic Instruments",
    content:
      "Advanced tools for minimally invasive gynecology and obstetrics surgery.",
  },
  {
    icon: micro,
    title: "Hysteroscopic Set",
    content:
      "State-of-the-art equipment for uterine diagnostic and operative procedures.",
  },
];

// 3rd

/* Department Header & Intro */
export const minimalAccessDepartmentHeader =
  "DEPARTMENT OF MINIMAL ACCESS & BARIATRIC SURGERY";
export const minimalAccessDepartmentHeaderContent =
  "Our department specializes in minimal access surgeries, bariatric and metabolic surgeries for conditions such as weight loss, diabetes, hypertension, and thyroid disorders. Led by Dr. Yogesh Agarwal (MBBS, MS, FIAGES, FALS (Bariatric), MBA(FMS)), we offer advanced surgical care with a focus on minimally invasive techniques and comprehensive GI & luminal surgeries.";

/* Facilities/Scope */
export const minimalAccessFacilityHeader = "FACILITIES AVAILABLE";
export const minimalAccessFacilityHeaderContent = [
  "Hepato Pancreato Biliary Surgeries",
  "Hernia Repair",
  "Upper GI: GERD, Hiatus, Esophagectomy",
  "Solid Organ Surgeries",
  "Bariatric & Metabolic Surgeries for Weight Loss",
  "Diabetes Management",
  "Hypertension Management",
  "Thyroid Surgeries",
  "All GI & Luminal Surgeries",
  "Laser/MIS Proctocology",
  "Upper GI and Lower GI Endoscopy",
];

/* Doctor Panel & OPD Booking */
export const minimalAccessOdpBookingHeader = "Doctor Panel & OPD Booking";
export const minimalAccessOdpBookingContent = [
  {
    drName: "Dr. Yogesh Agarwal",
    design: "MBBS, MS, FIAGES, FALS (Bariatric), MBA(FMS)",
    details: [
      {
        icon: panel,
        content: "On Panel: Yes",
      },
      {
        icon: clock,
        content: "Consultation timings to be confirmed",
      },
    ],
    buttonText: "Confirm Availability",
  },
];

/* Operation Theatre & Equipment */
export const minimalAccessOperationHeader = "OPERATION THEATRE";
export const minimalAccessOperationContent = [
  "OTs are fitted with centralized anesthesia gas delivery system",
  "Air Handling Unit",
  "Modern anesthesia machine with ventilator",
  "Non invasive monitors",
  "Well equipped for high end surgeries for high risk patients",
];

// 4thdata





/* Department Header & Intro */
export const paediatricsDepartmentHeader = "DEPARTMENT OF PAEDIATRICS";
export const paediatricsDepartmentHeaderContent =
  "GHUC has a team of qualified, experienced and competent pediatricians who ensure 24 hours availability of their service for morning and evening OPD and emergency cases.";


/* Facilities/Scope */
export const paediatricsFacilityHeader = "FACILITIES AVAILABLE";
export const paediatricsFacilityHeaderContent = [
  "Well Baby Clinic with vaccination facility",
  "Pediatrics OPD and Emergency services",
  "Nursery admission",
  "Growth and Development monitoring",
  "Adolescent Counseling",
  "Neonatology Division (ICU / Nursery)",
  "Level II care for LBW and sick neonates",
  "Experienced Nursing care",
  "Double CFL Photo Therapy for high risk NNH Neonates",
  "Pediatric scopes enabling all diagnostic & therapeutic procedure even in neonates",
];


/* Nursery Facilities */
export const nurseryFacilityHeader = "NURSERY";
export const nurseryFacilityContent = [
  "Level II care NICU",
  "Over-Head Radial Warmer",
  "Blue Light Photo Therapy (Neonatal Jaundice)",
  "Pulse Oximeter and apnea monitor",
  "CPAP",
];


/* Doctor Panel */
export const paediatricsDoctorPanelHeader = "DOCTOR PANEL";
export const paediatricsDoctorPanelContent = [
  {
    drName: "Dr. Piyush Jain",
    design: "MBBS, DCh",
  },
  {
    drName: "Dr. Rajeev Gupta",
    design: "MBBS, DCh",
  },
  {
    drName: "Dr. Ajay Kumar",
    design: "MBBS, DCh",
  },
  {
    drName: "Dr. Sanjay Kapoor",
    design: "MBBS, DCh",
  },
  {
    drName: "Dr. Anil Jain",
    design: "MBBS, DCh",
  },
  {
    drName: "Dr. Ramanand",
    design: "MBBS, DCh",
  },
];
