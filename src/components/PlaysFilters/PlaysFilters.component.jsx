import { Disclosure } from "@headlessui/react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const PlaysFilter = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="py-2 flex items-center gap-3">
            {open ? <FaChevronCircleUp /> : <FaChevronCircleDown />}{" "}
            <span class={open ? "text-red-600" : "text-gray-700"}>
              {props.title}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <div className="flex items-center gap-3 flex-wrap">
              {props.tags.map((tag) => (
                <>
                  <div className="border-2 border-gray-200 px-3 py-2">
                    <span class="text-red-600">{tag}</span>
                  </div>
                </>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default PlaysFilter;
