import axios from "axios";
import { baseUrl } from "../../constants/url.constants";
import { IProduct } from "../../types/global.typing";
import "./products.scss";
import { useState, useEffect } from "react"


const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProductsList = async () => {
    try {
      const response = await axios.get<IProduct[]>(baseUrl)
      setProducts(response.data);

    } catch (error) {
      alert("An error happened")
    }
  };

  useEffect(() => {
    fetchProductsList();
  }, [])

  return (
    <div className="products">
      <h1>Products Lists</h1>
      {products.length === 0 ? (
        <h1>No Products</h1>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Brand</th>
                <th>Creation Time</th>
                <th>Update Time</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map(product =>(
                  <tr>
                      <td>${product.title}</td>
                      <td>${product.brand}</td>
                      <td>${product.createdAt}</td>
                      <td>${product.updatedAt}</td>
                  </tr>     
                ))
              }
            </tbody>
          </table>
        </div>
      )
      }
    </div>
  )
}

export default Products