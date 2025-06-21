import aimArrow from "../../assets/images/aimArrow.png";
import useScreenMobile from "../../hooks/useScreenMobile";

import "./aim.scss";

const aimOfHospitalList = [
  "To create and maintain a consultant friendly and patient friendly environment.",
  "To develop hi-tech state of art facilities.",
  "To deliver high quality patient services with a humanitarian approach at reasonable cost.",
  "To create a thoroughly professional work culture.",
  "To ensure that each and every minor complaint of patient is attended.",
  "To create an environment of transmission from morbid depression to feeling of health and wellness.",
  "To work in an integrated manner as a team professionally and administratively.",
];
const Aim = () => {
  const isMobile = useScreenMobile({ size: 568 });
  return (
    <>
      <section className="aim">
        <div className="container aimContainer">
          <div className="titleContainer">
            <h1>From the desk of managing director & Sr. Consultant Urology</h1>
            {isMobile ? (
              <>
                <div className="contentContainer">
                  <p>
                    Goyal Hospital & Urology Centre is a 100 bedded NABH & NABL
                    Accredited Multispeciality hospital situated in East Delhi,
                    founded by Dr Anil Goyal (MBBS, MS, Mch, DNB) who is a
                    senior and leading Urologist of North India . The hospital
                    was started in 1997.
                  </p>
                  <p>
                    It is a centre involved in the never ending pursuit of
                    excellence. It came into existence with the wisdom and
                    foresightedness of its founder Directors and their team.
                  </p>
                </div>
              </>
            ) : (
              <p>
                Goyal Hospital & Urology Centre is a 100 bedded NABH & NABL
                Accredited Multispeciality hospital situated in East Delhi,
                founded by Dr Anil Goyal (MBBS, MS, Mch, DNB) who is a senior
                and leading Urologist of North India . The hospital was started
                in 1997.It is a centre involved in the never ending pursuit of
                excellence. It came into existence with the wisdom and
                foresightedness of its founder Directors and their team.
              </p>
            )}
          </div>
          <div className="mainAimContainer">
            <div className="imageWrapper">
              <img src={aimArrow} alt="Aim" />
            </div>
            <div className="aimOfHospital">
              <h3>Aims of the Hospital</h3>
              <div className="listContainer">
                <ul>
                  {aimOfHospitalList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aim;
