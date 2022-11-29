import React from "react";

const editProduct = ({ modalData, closeEditModal, successAction }) => {
  const {
    name,
    category_name,

    resale_price,
    original_price,
    location,
    time_of_post,
    description,

    phone,
    product_condition,
  } = modalData;
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

    const product = {
      name: product_name,
      resale_price,
      original_price,
      product_condition,
      category_name,
      phone,
      location,
      time_of_post,
      description,
    };
    fetch(`${process.env.REACT_APP_API_URL}/bikes/${modalData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="editModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
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
                defaultValue={name}
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
                defaultValue={resale_price}
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
                defaultValue={original_price}
                placeholder="Product price?"
                className="input input-bordered w-full  input-primary"
              />
            </div>

            <div className="form-control w-full  gap-3 p-4">
              <label className="label">
                <span className="label-text">Product condition?</span>
              </label>
              <select
                name="condition"
                defaultValue={product_condition}
                className="select select-primary w-full "
              >
                <option>excellent</option>
                <option>good</option>
                <option>fair</option>
              </select>
            </div>
            <div className="form-control w-full  gap-3 p-4">
              <label className="label">
                <span className="label-text">Product category?</span>
              </label>
              <select
                defaultValue={category_name}
                name="category"
                className="select select-primary w-full "
              >
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
                defaultValue={phone}
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
                defaultValue={location}
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
                defaultValue={time_of_post}
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
                defaultValue={description}
                name="description"
                placeholder="product description"
              ></textarea>
            </div>

            <div>
              <input
                className=" btn btn-primary w-full mt-12"
                type="submit"
                value="Update"
              />
            </div>
          </form>
          <div className="modal-action">
            <label
              onClick={successAction(modalData)}
              htmlFor="editModal"
              className="btn"
            >
              ok
            </label>
            <button onClick={closeEditModal} className="btn btn-error">
              cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default editProduct;
