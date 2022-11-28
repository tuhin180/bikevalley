import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const product_name = form.name.value;
    const resale_price = form.price.value;
    const original_price = form.original_price.value;
    const product_condition = form.condition.value;
    const category_name = form.category.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const time_of_post = form.date.value;
    const description = form.description.value;
    const img = form.image.files[0];

    const formdata = new FormData();
    formdata.append("image", img);
    const imghostkey = process.env.REACT_APP_IMGBB_KEY;
    const url = `https://api.imgbb.com/1/upload?key=${imghostkey}`;
    fetch(url, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        const product = {
          name: product_name,
          seller_name: user.displayName,
          email: user.email,
          resale_price,
          original_price,
          product_condition,
          category_name,
          phone,
          location,
          time_of_post,
          description,
          img: data.data.display_url,
        };
        console.log(product);

        fetch(`${process.env.REACT_APP_API_URL}/bikes`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(product),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("product uploaded");
            navigate("/dashboard/myproduct");
            form.reset();
          });
      });
  };
  return (
    <div>
      <h1 className="text-2xl m-4">Add product</h1>
      <form
        className=" p-4 shadow-xl rounded-lg grid grid-cols-1 lg:grid-cols-2 items-center mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="form-control w-full  gap-3 p-4">
          <label className="label">
            <span className="label-text">Whats your Product name?</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="ProductName"
            className="input input-bordered w-full  input-primary"
          />
        </div>
        <div className="form-control w-full  gap-3 p-4">
          <label className="label">
            <span className="label-text">Resale price?</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="Product price?"
            className="input input-bordered w-full  input-primary"
          />
        </div>
        <div className="form-control w-full  gap-3 p-4">
          <label className="label">
            <span className="label-text">Original price?</span>
          </label>
          <input
            type="text"
            name="original_price"
            placeholder="Product price?"
            className="input input-bordered w-full  input-primary"
          />
        </div>

        <div className="form-control w-full  gap-3 p-4">
          <label className="label">
            <span className="label-text">Product condition?</span>
          </label>
          <select name="condition" className="select select-primary w-full ">
            <option>excellent</option>
            <option>good</option>
            <option>fair</option>
          </select>
        </div>
        <div className="form-control w-full  gap-3 p-4">
          <label className="label">
            <span className="label-text">Product category?</span>
          </label>
          <select name="category" className="select select-primary w-full ">
            <option>Cruiser</option>
            <option>Off_Road</option>
            <option>Sports</option>
          </select>
        </div>
        <div className="form-control w-full  gap-3 p-4">
          <label className="label">
            <span className="label-text">Mobile Number?</span>
          </label>
          <input
            type="number"
            name="phone"
            placeholder="mobile Number"
            className="input input-bordered w-full  input-primary"
          />
        </div>
        <div className="form-control w-full  gap-3 p-4">
          <label className="label">
            <span className="label-text">Location?</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="location"
            className="input input-bordered w-full  input-primary"
          />
        </div>
        <div className="form-control w-full  gap-3 p-4">
          <label className="label">
            <span className="label-text">post date?</span>
          </label>
          <input
            type="date"
            name="date"
            placeholder="Post date"
            className="input input-bordered w-full  input-primary"
          />
        </div>
        <div className="form-control w-full  gap-3 p-4">
          <label className="label">
            <span className="label-text">product description?</span>
          </label>
          <textarea
            className="textarea textarea-primary"
            name="description"
            placeholder="product description"
          ></textarea>
        </div>
        <div>
          <label htmlFor="image" className="block mb-2 text-sm">
            Select Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            required
          />
        </div>
        <div>
          <input
            className=" btn btn-primary w-full mt-12"
            type="submit"
            value="Add product"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
