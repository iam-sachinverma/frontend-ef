import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react'
import styled from 'styled-components';
import { publicRequest } from '../../requestMethods';
import Loader from '../loader/loader';
import Product from './Product';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

// const data = [
//   {
//     id: 1,
//     name: 'Earthen Bottle',
//     href: '#',
//     price: '$48',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
//     imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//   },
//   {
//     id: 2,
//     name: 'Nomad Tumbler',
//     href: '#',
//     price: '$35',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
//     imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//   },
//   {
//     id: 3,
//     name: 'Focus Paper Refill',
//     href: '#',
//     price: '$89',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
//     imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//   },
//   {
//     id: 4,
//     name: 'Machined Mechanical Pencil',
//     href: '#',
//     price: '$35',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//   },
//   // More products...
// ]

export const ProductWrapper = ({ categories, filters, sort, search }) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        console.log(categories);
        const response = await publicRequest.get(!categories ? `products` : `products?cat=${categories}`);
        setProducts(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    getProducts();
  }, [categories]);

  useEffect(() => {
    const getSearchProducts = async () => {
      if (search) {
        try {
          console.log(search);
          const response = await publicRequest.get(`products/search?keyword=${search}`);
          setProducts(response.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        return;
      }
    }
    getSearchProducts();
  }, [search]);

  useEffect(() => {
    categories && setFilteredProducts(
      products.filter((item) => Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
      )
      )
    );
  }, [products, categories, filters]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt))
    } else if (sort === 'asc') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.pprice - b.pprice))
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.pprice - a.pprice))
    }
  }, [sort])
  return (
    <Container>{
      loading ? <Loader/> :
      categories ? filteredProducts.map((item) => (
      <Product products={item} key={item._id}></Product>
    )
    ) :
      products.map((item) => (
        <Product products={item} key={item._id}></Product>
      )
      )
    }
    </Container>
  );
};

