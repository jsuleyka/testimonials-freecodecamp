import "../stylesheets/testimonials.css";
import { testimonials } from "./data";

const Testimonials = () => {
  return (
    <>
      {testimonials.map(
        ({ id, image, name, nationality, position, company, testimonial }) => {
          return (
            <div key={id} className="testimonials-container">
              <img
                className="testimonial-img"
                src={require(`../images/testimonial-${image}.png`)}
                alt={name}
              />

              <div className="testimonial-info">
                <p className="testimonial-name">
                  <b>{name}</b> en {nationality}
                </p>
                <p className="testimonial-position">
                  {position} en <b>{company}</b>
                </p>
                <p className="testimonial-descrip">"{testimonial}"</p>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};

export default Testimonials;
