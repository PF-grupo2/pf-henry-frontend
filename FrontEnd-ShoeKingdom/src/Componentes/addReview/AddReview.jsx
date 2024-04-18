import "./Score.css";
import axios from "axios";
import React, { useState } from "react";
import { utilsStorage } from "../utils";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BASE_URL } from "../../config";

const AddReview = () => {
  const navigate = useNavigate();

  const [scoreNum, setScoreNum] = useState(null);
  const [hover, setHover] = useState(null);

  let idUser = utilsStorage.getDataStorage("userSession").id;
  const zapatillas = useSelector((state) => state.zapatillaDetail);

  const [formData, setFormData] = useState({
    score: 0,
    message: "",
    ProductId: zapatillas.id,
    UserId: idUser,
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const createReview = await axios.post(
        `${BASE_URL}/review/review`,
        formData
      );
      alert("Tu opinión fue enviada", createReview.data);
      navigate(`/product/${zapatillas.id}`);
    } catch (error) {
      console.error("No se puedo enviar la opinión", error);
      alert(
        "Hubo un error al enviar tu opinión. Por favor, inténtalo de nuevo"
      );
    }
  };

  return (
    <form className="container text-center" onSubmit={handleSubmit}>
      <div className="containerReview py">
        <h5 className="fw-bold mb-4 h5">Contanos que te pareció tu producto</h5>
        <div>
          {[...Array(5)].map((star, i) => {
            const currentScore = i + 1;
            return (
              <label>
                <input
                  className="starInput"
                  type="radio"
                  name="score"
                  value={currentScore}
                  onClick={() => setScoreNum(currentScore)}
                  onMouseEnter={() => setScoreNum(currentScore)}
                  onChange={handleChange}
                  onMouseLeave={() => setScoreNum(null)}
                />
                <FaStar
                  className="star"
                  size={20}
                  color={
                    currentScore <= (hover || scoreNum) ? "#ffc107" : "#e4e5e9"
                  }
                />
              </label>
            );
          })}
        </div>

        <p>Tu calificación es {scoreNum}</p>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          name="message"
          rows="2"
          placeholder="Mi producto me pareció..."
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="btn btn-outline-primary mx-2 col-lg-3 m-4"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default AddReview;
