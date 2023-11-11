import React from 'react';
import LinkMenuAtom from '../atoms/LinkMenuAtom';
import AddProductAtom from '../atoms/AddProductAtom';

export default function MenuLinkMolecules(props) {
  const { initalLink, handleCLickLink, isActive, sortByProduct, allProduct } = props;
  return (
    <div className="flex justify-between items-center">
      <LinkMenuAtom initalLink={initalLink} sortByProduct={sortByProduct} allProduct={allProduct} handleCLickLink={handleCLickLink} isActive={isActive} />
      <AddProductAtom />
    </div>
  );
}
