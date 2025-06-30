import "./tpaImage.scss";

const TPAImage = ({ title, content, imageContents = [] }) => {
  return (
    <>
      <section className="tpaImage">
        <div className="container tpaImageContainer">
          <div className="imageTitlContainer">
            <h1>{title}</h1>
            <p>{content}</p>
          </div>
          <div className="logoWrapper">
            {imageContents.map((item, index) => (
              <div className="imageWrapper" key={index}>
                <img src={item} alt="logo" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TPAImage;
