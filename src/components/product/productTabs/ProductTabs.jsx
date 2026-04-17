import { Tab } from "@headlessui/react";

import DescriptionTab from "./DescriptionTab";
import DetailsTab from "./DetailsTab";
import ReviewsTab from "./ReviewsTab";

const ProductTabs = ({ product }) => {
  return (
    <div className="mt-12 lg:mt-16">
      <Tab.Group>
        
        {/* Tab Headers */}
        <Tab.List className="flex border-b border-slate-200">
          {[
            "Description",
            "Details",
            `Reviews (${product.reviewCount})`,
          ].map((tab, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                `relative px-5 py-3.5 text-sm font-medium transition-colors duration-200 ${
                  selected
                    ? "text-slate-900"
                    : "text-slate-400 hover:text-slate-600"
                }`
              }
            >
              {tab}

              {/* Active line */}
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
              />
            </Tab>
          ))}
        </Tab.List>

        {/* Tab Content */}
        <Tab.Panels className="py-8 max-w-3xl">
          <Tab.Panel>
            <DescriptionTab product={product} />
          </Tab.Panel>

          <Tab.Panel>
            <DetailsTab product={product} />
          </Tab.Panel>

          <Tab.Panel>
            <ReviewsTab product={product} />
          </Tab.Panel>
        </Tab.Panels>

      </Tab.Group>
    </div>
  );
};

export default ProductTabs;