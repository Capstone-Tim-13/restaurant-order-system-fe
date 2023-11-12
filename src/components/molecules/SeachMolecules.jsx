import React from 'react';
import SearchAtom from '../atoms/SearchAtom';
import SortAtom from '../atoms/SortAtom';

export default function SeachMolecules(props) {
  const { sortByName, sortByDate, value, handleChange } = props;
  return (
    <div className="flex justify-between items-center ">
      <SearchAtom value={value} handleChange={handleChange} />
      <SortAtom sortByName={sortByName} sortByDate={sortByDate} />
    </div>
  );
}
