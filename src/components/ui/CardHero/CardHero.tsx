import { FC, useState } from "react";
import { IHeroes } from "../../../types/iHeroes";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface IcardHero {
  hero: IHeroes;
}

export const CardHero: FC<IcardHero> = ({ hero }) => {
  const [hovered, setHovered] = useState(false);
  const navigate=useNavigate()
  const handleNavigateHero=()=>{
    navigate(`/hero/${hero.id}`)
  }

  return (
    <Card
      onClick={handleNavigateHero}
      style={{
        width: "100%",
        cursor: "pointer",
        transform: hovered ? "scale(1.02)" : "scale(1)", 
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)} 
    >
      <Card.Img variant="top" src={`/assets/heroes/${hero.id}.jpg`} />
      <Card.Body>
        <Card.Title>{hero.superhero} </Card.Title>
        <Card.Text>
          <p>
            <b>Alter Ego:</b> {hero.alter_ego}{" "}
          </p>
          <p>
            <b>Publicadora:</b> {hero.publisher}{" "}
          </p>
          <p>
            <b>Primera Aparicion:</b> {hero.first_appearance}{" "}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
