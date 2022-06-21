import "./styles.css";
import { Product } from "./components/ProductComponent/Product";
import { useState, useEffect } from "react";
import axios from "axios";
import { Sidebar } from "./components/sidebar/Sidebar";
import { useRecoilState } from "recoil";
import { globals } from "./Globals/filterState";

export default function App() {
  const [products, setProducts] = useState([]);
  const { isRoadster, isGucci, isNike } = globals;
  const [isRoadsterChecked, setIsRoadsterChecked] = useRecoilState(isRoadster);
  const [isGucciChecked, setIsGucciChecked] = useRecoilState(isGucci);
  const [isNikeChecked, setIsNikeChecked] = useRecoilState(isNike);

  const filter = (productsarr) => {
    if (!isRoadsterChecked || isGucciChecked || isNikeChecked) {
      return productsarr;
    }
    if (isRoadsterChecked && isGucciChecked && isNikeChecked) {
      return productsarr;
    }
    if (!isNikeChecked) {
      return productsarr.filter((product) => {
        return product.brand !== "Nike";
      });
    }
    if (!isRoadsterChecked) {
      return productsarr.filter((product) => {
        return product.brand !== "Nike";
      });
    }
    if (!isGucciChecked) {
      return productsarr.filter((product) => {
        return product.brand !== "Nike";
      });
    }
    if (isNikeChecked) {
      return productsarr.filter((product) => {
        return product.brand === "Nike";
      });
    }
    if (isRoadsterChecked) {
      return productsarr.filter((product) => {
        return product.brand === "Roadster";
      });
    }
    if (isGucciChecked) {
      return productsarr.filter((product) => {
        return product.brand === "Gucci";
      });
    }
  };
  useEffect(() => {
    (async function () {
      try {
        const {
          data: { data }
        } = await axios.get("Products.json");
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    })();
  });
  useEffect(() => {
    const filteredProducts = filter(products);
    setProducts(filteredProducts);
  }, [isRoadsterChecked, isGucciChecked, isNikeChecked]);
  console.log(products);
  return (
    <div className="d-flex  gap wrap">
      <Sidebar />
      {products &&
        products.length > 0 &&
        products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
    </div>
  );
}
