import React, { useEffect, useState } from "react";
import getAllPokemons from "../services/api";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/effect-cards";
import "swiper/css";
import "../styles.css";

// import required modules
import { EffectCards } from "swiper/modules";
import "./Cards.css";

function Cards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCards = async () => {
      setLoading(true);
      const data = await getAllPokemons();
      setCards(data);
      console.log(data);
      setLoading(false);
    };
    getCards();
  }, []);

  return (
    <div>
      {loading ? (
        "carregando.."
      ) : (
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {
             cards.map((a) => (
            
              <SwiperSlide>
                <div className="poke-card" key={a.id}>
                  <h5>{a.name}</h5>
                  <img src={a.sprites.other.home.front_default} alt="" />
                  <div className="attack">Attack: {a.base_experience}</div>
                </div>
              </SwiperSlide>
            
          ))
          }
        </Swiper>
      )}
    </div>
  );
}

export default Cards;
