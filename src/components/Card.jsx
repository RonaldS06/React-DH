import StyleCard from "../styles/StyleCard.module.css";

const Card = ({ name, artist }) => {
  return (
    <>
      <div>
        <div className={StyleCard.Card}>
          <img
            src="https://f4.bcbits.com/img/a1962013209_16.jpg"
            alt={name}
            width={230}
          />
          <h1 className={StyleCard.CardName}>{name}</h1>
          <h2 className={StyleCard.CardArtist}>{artist}</h2>
        </div>
      </div>
    </>
  );
};

export default Card;
