import { useState, Fragment } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { FaAngleDown, FaCheck } from "react-icons/fa";
// import {SelectorIcon} from '@heroicons/react/solid'

const YearData = [
  { title: "Sort By Year" },
  { title: "1990 - 1995" },
  { title: "1996 - 2000" },
  { title: "2001 - 2005" },
  { title: "2006 - 2010" },
  { title: "2011 - 2015" },
  { title: "2016 - 2020" },
  { title: "2021 - 2025" },
];

const RatesData = [
  { title: "Sort By Rating" },
  { title: "1 Star" },
  { title: "2 Star" },
  { title: "3 Star" },
  { title: "4 Star" },
  { title: "5 Star" },
];

const CategoryData = [
  { title: "Sort By Category" },
  { title: "Romantic" },
  { title: "Action" },
  { title: "Horror" },
  { title: "Comedy" },
  { title: "Adventure" },
  { title: "Drama" },
  { title: "Historical" },
];
export default function Filters() {
  const [category, setCategory] = useState(CategoryData[0]);
  const [year, setYear] = useState(YearData[0]);
  const [rate, setRate] = useState(RatesData[0]);

  const Filter = [
    {
      value: category,
      onChange: setCategory,
      items: CategoryData,
    },
    {
      value: year,
      onChange: setYear,
      items: YearData,
    },
    {
      value: rate,
      onChange: setRate,
      items: RatesData,
    },
  ];

  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
      {Filter.map((item, index) => (
        <Listbox key={index} value={item.value} onChange={item.onChange}>
          <div className="relative">
            <ListboxButton className="relative border border-gray-800 w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs">
              <span className="block truncate">{item.value.title}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                <FaAngleDown className="h-4 w-4" aria-hidden="true" />
              </span>
            </ListboxButton>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {item.items.map((iterm, i) => (
                  <ListboxOption
                    key={i}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-subMain text-white" : "text-main"
                      }`
                    }
                    value={iterm}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {iterm.title}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaCheck className="h-3 w-3" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
}
