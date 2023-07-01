import React, { createContext, useContext, useState } from "react";
import { DataContext } from "../dataContext/DataContext";

import { MdModeEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { Link, redirect } from "react-router-dom";

export const Home = () => {
  const [addDish, setAddDish] = useState(false);
  const { dishData } = useContext(DataContext);
  console.log("data", dishData);

  const showData = [...dishData];
  console.log("ahowdda", showData);

  return (
    <div>
      <div name="main-div">
        <div name="navbar" className="flex justify-center h-full">
          <input
            type="text"
            className="p-2 w-[350px] focus:outline-none rounded-md text-lg"
          />
          <div className="w-1/2 text-2xl">
            <label className="px-10  font-bold">Filter:</label>

            <label>Name</label>
            <input type="radio" />

            <label className="pl-5 pr-2">Cuisine</label>
            <input type="radio" />

            <label className="pl-5 pr-2">Ingredients</label>
            <input type="radio" />
          </div>
        </div>

        <h1 className="text-4xl text-center mt-16 pb-3  border-b-4 ">
          All Recipes
        </h1>
        <IoMdAddCircle
          className="m-10 float-right hover:cursor-pointer "
          size={50}
          onClick={() => setAddDish(!addDish)}
        />

        {addDish && (
          <div className=" z-[1000] left-0 top-0 h-[80vh] flex flex-col justify-around items-center  p-10">
            <MdClose
              size={80}
              className="hover:scale-105 duration-200"
              onClick={() => setAddDish(!addDish)}
            />
            <div className="h-[100vh] flex flex-row justify-center items-center  text-2xl">
              <div className="flex flex-col justify-end px-5">
                <label className="my-3">Dish Name</label>
                <label className="my-3">Cuisine</label>
                <label className="my-3">Ingredients</label>
                <label className="my-3">Recipe</label>
                <label className="my-3">Image URL</label>
              </div>
              <div className="w-1/3 flex flex-col ">
                <input className="my-3" type="text" />
                <input className="my-3" type="text" />
                <input className="my-3" type="text" />
                <input className="my-3" type="text" />
                <input className="my-3" type="text" />
              </div>
            </div>
            <button className="border-4 p-3 rounded-lg text-xl capitalize ">
              Add the Dish
            </button>
          </div>
        )}

        <div
          name="cards-div"
          className=" max-w-full h-full mt-10 flex justify-evenly "
        >
          {showData.map(({ id, dish, cuisine, ingredients, recipe, image }) => {
            return (
              <div>
                <Link id="more-link" to={`/dish/${id}`}>
                  <div
                    key={id}
                    className=" p-2 rounded-md cursor-pointer hover:scale-105 duration-300  border-4 "
                  >
                    <img
                      src={image}
                      className="max-w-[250px] max-h-[300px] m mx-auto "
                    />
                    <p className="text-2xl py-2">{dish}</p>
                    <p className="text-xl">
                      Cuisine: <span className="font-bold">{cuisine}</span>
                    </p>
                    <p className="text-xl py-1">
                      Ingredients:{" "}
                      <span className="hover:text-yellow-400">
                        See ingredients {">"}
                      </span>
                    </p>{" "}
                    <p className="text-xl">
                      Instructions:{" "}
                      <span className="hover:text-yellow-400">
                        See instructions {">"}{" "}
                      </span>
                    </p>
                    <div className="flex justify-evenly p-2">
                      <MdModeEdit
                        size={30}
                        className="text-white hover:text-cyan-300 "
                      />
                      <MdDeleteForever
                        size={30}
                        className="text-red-400 hover:text-red-600 "
                      />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
