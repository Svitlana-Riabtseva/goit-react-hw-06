import clsx from 'clsx';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const selectNameFilter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  return (
    <div className={clsx(css.searchWrapper)}>
      <label htmlFor="searchInput">Find contacts by name</label>
      <input
        className={clsx(css.searchInput)}
        type="text"
        id="searchInput"
        value={selectNameFilter}
        onChange={e => {
          const action = { type: 'filters/changeFilter', payload: e.target.value };
          dispatch(action);
        }}
      ></input>
    </div>
  );
};

export default SearchBox;