
const tutors = [
  {
    name: "Alejandra Miranda",
    img: "./public/ejemplo1.jpg",
  },
  {
    name: "Sebastián Pérez",
    img: "./public/ejemplo2.jpg",
  },
  {
    name: "Pablo Hernández",
    img: "./public/ejemplo3.avif",
  },
];

function CarruselTutores() {
  // Agrupamos los tutores de 3 en 3
  const groupedTutors = [];
  for (let i = 0; i < tutors.length; i += 3) {
    groupedTutors.push(tutors.slice(i, i + 3));
  }

  return (
    <div className="tutores mt-5">
            <div className="container">
              <div className="row justify-content-center">
                {tutors.map((tutor, tutorIndex) => (
                  <div className="col-md-3 text-center" key={tutorIndex}>
                    <div className="tutor-box">
                      <img
                        src={tutor.img}
                        alt={tutor.name}
                        className="img-fluid rounded"
                        style={{
                          width: "350px",
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
    </div>
  );
}

export default CarruselTutores;
