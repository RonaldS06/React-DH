import { useState } from "react";
import StyleForm from "../styles/StyleForm.module.css";
import StyleCard from "../styles/StyleCard.module.css";
import Card from "./Card";

const Form = () => {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [error, setError] = useState(false);
  const [cards, setCards] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //validaciones:
    const isNameValid = name.length >= 3 && name.trim();
    const isArtistValid = artist.length >= 6;

    if (isNameValid && isArtistValid) {
      setCards([...cards, { name, artist }]);
      setName("");
      setArtist("");

      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={StyleForm.FormContainer}>
        <div className={StyleForm.FormData}>
          <label>
            Nombre de la canción <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={StyleForm.FormInput}
          />
        </div>

        <div className={StyleForm.FormData}>
          <label>
            Nombre del Artista <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="artista"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className={StyleForm.FormInput}
          />
        </div>

        <button type="submit" className={StyleForm.FormSubmit}>
          Agregar Canción 🔈
        </button>
        {error && (
          <p style={{ textAlign: "center", margin: "10px 0", color: "red" }}>
            Por favor chequea que la información sea correcta
          </p>
        )}
      </form>

      <div>
        <h1 style={{ textAlign: "center", margin: "10px 0" }}>
          Lista de Canciones:
        </h1>

        <section className={StyleCard.CardContainer}>
          {cards.length > 0 ? (
            cards.map((card, index) => (
              <Card key={index} name={card.name} artist={card.artist} />
            ))
          ) : (
            <h3
              style={{
                textAlign: "center",
                margin: "10px 0",
                fontWeight: "normal",
              }}
            >
              No se encuentra una lista de canciones
            </h3>
          )}
        </section>
      </div>
    </>
  );
};

export default Form;
