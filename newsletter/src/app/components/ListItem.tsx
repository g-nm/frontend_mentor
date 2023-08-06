import React from 'react';
import Text from './Text';
import listIcon from '../images/icon-list.svg';
import Image from 'next/image';

type ListItemProps = {
  text: string;
};

function ListItem({ text }: ListItemProps) {
  return (
    <li className="flex gap-x-4 pb-2">
      <span>
        <Image src={listIcon} alt="checkmark list Icon" />
      </span>
      <Text>{text}</Text>
    </li>
  );
}

export default ListItem;
