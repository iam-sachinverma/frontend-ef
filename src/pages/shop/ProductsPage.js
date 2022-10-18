import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer/Footer';
import { ProductWrapper } from "../../components/Product/ProductWrapper";
import { mobile } from "../../responsive";



const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductsPage = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value
    setFilters([value])
  }
  // const t1 = cat.replaceAll("%20", " ")
  const search = location.state;




  return (
    <Container>
      <Title>{ cat ? "Category" : search ? `Products tagged ${search}` : "Products"}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='color' onChange={handleFilters} defaultValue={'default'}>
            <Option value={"default"} disabled>
              Color
            </Option>
            <Option>WHITE</Option>
            <Option>BLACK</Option>
            <Option>RED</Option>
            <Option>BLUE</Option>
            <Option>YELLOW</Option>
            <Option>GREEN</Option>
          </Select>
          <Select name='sizes' onChange={handleFilters} defaultValue={'default'}>
            <Option value={"default"} disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e => setSort(e.target.value)} defaultValue={'default'}>
          <Option value={"default"} disabled>
              Sort By:
            </Option>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
       <ProductWrapper categories={cat} search={search !== null && search} filters={filters} sort={sort} />
      <Footer />
    </Container>
  );
};

export default ProductsPage;