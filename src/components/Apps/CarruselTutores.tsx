import Carousel from "react-bootstrap/Carousel";

function CarruselTutores({
  tutors,
}: {
  tutors: { name: string; img: string }[];
}) {
  // Agrupamos los tutores de 3 en 3
  const groupedTutors = [];
  for (let i = 0; i < tutors.length; i += 3) {
    groupedTutors.push(tutors.slice(i, i + 3));
  }

  return (
    <div className="tutores mt-5">
      <Carousel interval={null} indicators={true}>
        {groupedTutors.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="container">
              <div className="row justify-content-center">
                {group.map((tutor, tutorIndex) => (
                  <div className="col-md-4 text-center" key={tutorIndex}>
                    <div className="tutor-box">
                      <img
                        src={tutor.img}
                        alt={tutor.name}
                        className="img-fluid rounded"
                        style={{
                          width: "250px",
                          height: "350px",
                          objectFit: "cover",
                          border: "solid #601305 3px",
                          padding: "10px",
                        }}
                      />
                      <h5 className="mt-2">{tutor.name}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarruselTutores;