interface ProductTypes {
  product: object;
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: string;
}


export const handleDetailsModal = (product: ProductTypes) => {
  const detailsBtn = <HTMLInputElement>document.getElementById("details_modal");
  detailsBtn.showModal();

  const name = <HTMLInputElement>document.getElementById("productTitle");
  const image = <HTMLInputElement>document.getElementById("productImage");
  const brand = <HTMLInputElement>document.getElementById("productBrand");
  const category = <HTMLInputElement>document.getElementById("productCategory");
  const price = <HTMLInputElement>document.getElementById("productPrice");
  const rating = <HTMLInputElement>document.getElementById("productRating");
  const available = <HTMLInputElement>(
    document.getElementById("productAvailable")
  );
  const details = <HTMLInputElement>document.getElementById("productDetails");

  name.innerText = `${product.title}`;
  image.src = `${product.images[1]}`;
  brand.innerText = `${product.brand}`;
  category.innerText = `${product.category}`;
  price.innerText = `${product.price}`;
  rating.innerText = `${product.rating}`;
  available.innerText = `${product.stock}`;
  details.innerText = `${product.description}`;
};
