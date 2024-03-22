import { useEffect, useState } from 'react';

const useProduct = () => {

    const [Product, SetProduct]=useState([]);
    useEffect(() => {
        fetch("https://kiddo-back-end.vercel.app/toy")
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