import React from 'react';
import { setFilter } from 'redux/filter/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  SearchInput,
  SearchQueryContainer,
  SearchQueryP,
} from './SearchQuery.styled';
import { selectFilter } from 'redux/selectors';

const SearchQuery = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const filterContacts = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <SearchQueryContainer>
      <SearchQueryP>Find contacts by name</SearchQueryP>
      <SearchInput value={filter} type="text" onChange={filterContacts} />
    </SearchQueryContainer>
  );
};

export default SearchQuery;
