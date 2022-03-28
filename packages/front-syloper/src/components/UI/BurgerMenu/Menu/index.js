import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import classNames from 'classnames';
import { TMenu, Item } from './styles';

const BurgerMenu = ({ handleClickMenu, isOpenMenu, deleteCard }) => {
  const handleClickErase = () => {
    deleteCard();
  };
  return (
    <TMenu className={classNames({ active: isOpenMenu })}>
      <i onClick={handleClickMenu}>
        <IoCloseSharp color="#fff" size="20px" />
      </i>
      <div>
        <p>Start Task</p>
        <p>Complete Task</p>
        <p>Edit</p>
        <Item onClick={handleClickErase}>Erase</Item>
      </div>
    </TMenu>
  );
};

export default BurgerMenu;
