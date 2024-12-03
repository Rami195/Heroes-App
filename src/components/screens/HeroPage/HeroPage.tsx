import { useEffect, useState } from "react"
import { IHeroes } from "../../../types/iHeroes"
import { useNavigate, useParams } from "react-router-dom"
import { heroesData } from "../../../data/heroes"
import styles from './HeroPage.module.css'
import { Button } from "react-bootstrap"

export const HeroPage = () => {
    const [hero, setHero] = useState<IHeroes | null>(null)
    const { id } = useParams()
    const getHeroById = () => {
        const result = heroesData.find((h) => h.id == id)
        result ? setHero(result) : setHero(null);
    }

    useEffect(() => {
        getHeroById();
    }, [])

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }
    return (
        <>
            {hero && <div className={styles.containerHeroPage}>
                <div className={styles.containerImgHeroPage}>
                    <img src={`/assets/heroes/${hero.id}.jpg`} />
                </div>
                <div>
                    <h3>{hero.superhero} </h3>
                    <ul>
                        <li>
                            <b>Alter Ego:</b> {hero.alter_ego}{" "}
                        </li>
                        <li>
                            <b>Publicadora:</b> {hero.publisher}{" "}
                        </li>
                        <li>
                            <b>Primera Aparicion:</b> {hero.first_appearance}{" "}
                        </li>
                        <Button style={{ backgroundColor: "#1F1D1D", border: "#1F1D1D" }} className="mt-3 " onClick={handleNavigate}>
                            Regresar
                        </Button>
                    </ul>
                </div>

            </div>}
        </>
    )
}