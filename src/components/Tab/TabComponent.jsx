import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabComponent() {
  let [tabs] = useState({
    Recent: [
      
    ],
  });

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(tabs).map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-blue shadow text-white"
                    : "text-black bg-white/[0.12] hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>

            <Tab.Panel

              className={classNames(
                "mt-2 rounded-xl bg-gray p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <button
                onClick={() => { }}
                // disabled={cart.quantity === 0}
                type="button"
                className="px-6 py-2 border rounded-md bg-blue text-green dark:border-violet-400"
              >
                <span className="sr-only sm:not-sr-only">Continue to </span>
                Checkout
              </button>
            </Tab.Panel>
      </Tab.Group>
    </div>
  );
}
