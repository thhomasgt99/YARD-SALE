import { useState, useEffect } from "react";
// import axios from "axios";

const useGetProducts = (API) => {
	const api = axios.create({
		baseURL: API,  	
		headers: {	//headers
			'Content-Type': 'application/json;charset=utf-8'
		}
	})

  const [products, setProducts] = useState([]);

	useEffect(async () => {
		const response = await api();
		setProducts(response.data);
	}, [])
  return products;
}

export default useGetProducts