import { useEffect, useState } from "react";
import { useForm } from "../../../redux/hocks/useForm";
import { IHeroes } from "../../../types/iHeroes";
import { heroesData } from "../../../data/heroes";
import { InputGroup, Form } from "react-bootstrap";
import { CardHero } from "../../ui/CardHero/CardHero";
import styles from './Search.module.css'

export const Search = () => {
  const { values, handleChange } = useForm({
    search: "",
  });
  const { search } = values;
  const [heros, setHeros] = useState<IHeroes[]>([]);

  useEffect(() => {
    const result = heroesData.filter((h) =>
      h.superhero.toLowerCase().trim().includes(search.toLowerCase()) 
    );
    setHeros(result);
  }, [search]);

  return (
    <div className={styles.containerSearch}>
      <InputGroup className="mb-3" style={{width:"20%"}} >
        <InputGroup.Text>Ingrese héroe</InputGroup.Text>
        <Form.Control
          onChange={handleChange}
          type="text"
          name="search"
          value={search}
        />
      </InputGroup>

      <div className={styles.containerListHeroes}>
        {heros.length > 0 ? (
        <>
            {heros.map((hero) => (
              <div key={hero.id} style={{width:"80%"}}>
                <CardHero hero={hero}/>
              </div>
            ))}
          </>
        ) : (
          <div>
            <h2>No coincide la búsqueda</h2>
          </div>
        )}
      </div>
    </div>
  );
};
