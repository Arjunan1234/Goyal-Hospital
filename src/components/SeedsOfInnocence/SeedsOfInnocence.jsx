import "./seedsOfInnocence.scss";
import seeds from "../../assets/images/seeds.svg";
const SeedsOfInnocence = () => {
  return (
    <>
      <setion className="seedsOfInnocence">
        <div className="container seedsOfInnocenceContainer">
          <div className="titleContainer">
            <div className="associate">
              <div className="imageWrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M7.5 0.25C7.03587 0.25 6.59075 0.434375 6.26256 0.762563C5.93437 1.09075 5.75 1.53587 5.75 2V5.25H2.5C2.03587 5.25 1.59075 5.43437 1.26256 5.76256C0.934375 6.09075 0.75 6.53587 0.75 7V11C0.75 11.966 1.534 12.75 2.5 12.75H5.75V16C5.75 16.966 6.534 17.75 7.5 17.75H11.5C11.9641 17.75 12.4092 17.5656 12.7374 17.2374C13.0656 16.9092 13.25 16.4641 13.25 16V12.75H16.5C16.9641 12.75 17.4092 12.5656 17.7374 12.2374C18.0656 11.9092 18.25 11.4641 18.25 11V7C18.25 6.53587 18.0656 6.09075 17.7374 5.76256C17.4092 5.43437 16.9641 5.25 16.5 5.25H13.25V2C13.25 1.53587 13.0656 1.09075 12.7374 0.762563C12.4092 0.434375 11.9641 0.25 11.5 0.25H7.5Z"
                    fill="#195AFF"
                  ></path>
                </svg>
              </div>
              <p>associated with</p>
            </div>
            <div className="titleWrapper">
              <div className="imageWrapper">
                <img src={seeds} alt="logo" />
              </div>
              <h1>Seeds of Innocence</h1>
            </div>
          </div>
          <p className="description">
            Seeds of Innocens is a leading IVF and fertility clinic chain in
            India offering advanced treatments like IVF, IUI, ICSI, genetic
            testing, and more, supported by a dedicated in-house reproductive
            genetics lab Seeds of Innocence IVF Centre`` +1 . Founded in 2015 by
            Dr. Gauri Agarwal and Dr. Rajat Arora, it has expanded to over 19
            centers across eight Indian states, with additional locations in
            Muscat (Oman) and Lusaka (Zambia) Seeds of Innocence IVF Centre`` .
            The clinic emphasizes high success rates (up to 78%), innovators in
            PRP therapy and genetic screening technologies, alongside services
            like home-based semen analysis and specialized treatments for
            endometrial and ovarian health Seeds of Innocence IVF Centre`` +2
            Seeds of Innocence IVF Centre`` +2 . Their offerings also include a
            training academy for fertility professionals, featuring fellowships
            and hands-on programs in minimally invasive gynecologic surgery
          </p>
        </div>
      </setion>
    </>
  );
};

export default SeedsOfInnocence;
