import React, { useState } from 'react';
import styled from 'styled-components';

const StyledFormContainer = styled.div`
padding: 50px;
display: flex;
align-items: center;
justify-content: center;
form {
  position: relative;
  width: 80%;
  overflow: hidden;
  input {
    width: 100%;
    height: 40px;
    color: #000;
    padding-top: 30px;
    border: none;
    outline: none;
    font-size: 20px;
  };
  label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 2px solid #ccc;
  };  
  label::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 4px solid blue;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  };
  span {
    position: absolute; 
    bottom: 5px;
    left: 0%;
    transition: all 0.3s ease;
  };
  input:focus + label  span, input:valid + label span {
    transform: translateY(-170%);
    font-size: 15px;
    color: blue;
  };
  input:focus + label::after, input:valid + label::after {
    transform: translateX(0%);
  }
}
`;

const SearchBar = ({ handleSubmit }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => setSearchTerm(e.target.value);

  const handleSearchBarSubmit = e => {
    e.preventDefault();
    handleSubmit(searchTerm);
  }
  return (
    <StyledFormContainer>
      <form onSubmit={handleSearchBarSubmit}>
        <input type='text' value={searchTerm} onChange={handleChange} name="search" required />
        <label htmlFor="search">
          <span>Search</span>
        </label>
      </form>
    </StyledFormContainer>
  );
};

export default SearchBar;