import { useEffect, useState } from 'react';

const useProduct = () => {

    const [Product, SetProduct]=useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/toy")
          .then((res) => res.json())
          .then((info) => {
            SetProduct(info);
            // console.log(info)
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
      
    // console.log(Product)

    return [Product];
};

export default useProduct;