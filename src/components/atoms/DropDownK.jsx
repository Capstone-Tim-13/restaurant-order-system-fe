import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import cn from '../../utils/cn';

export const category = [
  {
    label: 'Appertizer',
    value: 1,
  },
  {
    label: 'Dessert',
    value: 2,
  },
  {
    label: 'Ala Carte',
    value: 3,
  },
  {
    label: 'Paket Hemat',
    value: 4,
  },
  {
    label: 'Minum',
    value: 5,
  },
];

export default function DropdownK({ selectedCategory, setSelectedCategory }) {
  return (
    <Menu as="div" className="relative inline-block text-left]">
      <div>
        <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 min-w-[130px]">
          {selectedCategory?.label || 'Kategori'}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute w-full right-0 z-10 mt-2 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex flex-col w-auto py-3">
            {category.map((item, index) => (
              <Menu.Item key={index}>
                <div
                  onClick={() => setSelectedCategory(item)}
                  className={cn(
                    'block px-4 py-2 text-sm font-normal border-b text-gray-700 cursor-pointer',
                    index === category.length - 1 ? 'border-none' : 'border-b',
                    selectedCategory?.value === item.value &&
                      'font-semibold text-white bg-orange'
                  )}>
                  {item.label}
                </div>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
