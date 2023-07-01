import React, { useContext } from "react";
import { DataContext } from "../dataContext/DataContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const DishPage = () => {
  const { dishData } = useContext(DataContext);
  const { dishId } = useParams();
  console.log("data", dishData);

  localStorage.setItem("dish", dishId);
  const showId = localStorage.getItem("dish");

  const dishFind = dishData.filter((item) => item.id === showId);
  console.log("found", dishFind);

  useEffect(() => {}, [dishData]);
  return (
    <div className="flex items-center justify-center ">
      {dishFind.map(({ id, dish, cuisine, ingredients, recipe, image }) => {
        return (
          <div>
            <h1>{dish}</h1>
            <h1>{cuisine}</h1>
            <div>
              <div>
                <img src={image} />
              </div>

              <div>
                <h1>Ingredients</h1>
                <ol>
                  {ingredients.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ol>

                <h1>Recipe</h1>
                <ol>
                  {recipe.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ol>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DishPage;
