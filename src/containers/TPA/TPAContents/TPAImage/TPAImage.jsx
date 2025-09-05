import "./tpaImage.scss";

const TPAImage = ({ title, content, imageContents = [] }) => {
  console.log(imageContents, "zzzzzzzzzzz")
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
              <div className="logoItem">
                <div className="imageWrapper" key={index}>
                  <img src={item.image} alt="logo" />
                </div>
              {/* {<p className="content">{item.name}</p>} */}
              {<p className="content">{item.name}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TPAImage;
