import { useState } from "react";
import { handleDetailsModal } from "../ProductDetails/modal";

interface ProductTypes {
  products: object;
  product: object;
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string;
}

const ProductList = ({ products }: ProductTypes) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product: ProductTypes) => {
    return product.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
    <div className="mx-10">
      {/* Search Field */}
      <div className="my-10">
        <input
          type="text"
          placeholder="Search products..."
          className="input  input-primary w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Details Modal */}
      <dialog id="details_modal" className="modal">
        <div className="modal-box">
          <div id="details">
            <h3 id="productTitle" className="font-bold text-lg"></h3>
            <img id="productImage" className="w-60" src="" alt="" />
            <div className="py-4 flex flex-col gap-3">
              <p className="font-bold">
                Brand: <span id="productBrand" className="font-normal"></span>
              </p>
              <p className="font-bold">
                Category:{" "}
                <span id="productCategory" className="font-normal"></span>
              </p>
              <p className="font-bold">
                Price: <span id="productPrice" className="font-normal"></span>
              </p>
              <p className="font-bold">
                Rating: <span id="productRating" className="font-normal"></span>
              </p>
              <p className="font-bold">
                Available:{" "}
                <span id="productAvailable" className="font-normal"></span>
              </p>
              <p className="font-bold">
                Details:{" "}
                <span id="productDetails" className="font-normal"></span>
              </p>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      

    {/* Product List Table */}
      <div className="overflow-x-auto relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>Product Found:{filteredProducts.length}</th>
              </tr>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Available</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product: ProductTypes) => (
                <tr key={product.id}>
                  <th>{product.id}</th>
                  <th>
                    <img src={product.thumbnail} alt="" className="w-28" />
                  </th>
                  <th>{product.title}</th>
                  <th>{product.brand}</th>
                  <th>$ {product.price}</th>
                  <th>{product.category}</th>
                  <th>{product.rating}</th>
                  <th>{product.stock}</th>
                  <th>
                    <button
                      className="btn"
                      onClick={() => handleDetailsModal(product)}
                    >
                      Details
                    </button>
                    {/* <ProductDetails></ProductDetails> */}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductList;
