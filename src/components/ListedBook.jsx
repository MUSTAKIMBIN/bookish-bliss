import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooks from "./ReadBooks";
import WishBooks from "./WishBooks";

const ListedBook = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="w-4/5 mx-auto">
      <div className="rounded-3xl my-5 text-center">
        <h2 className="py-5  text-3xl font-bold bg-[#F3F8FF]">Books</h2>
        <div className="flex items-center justify-center">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-white text-[#7E30E1] border border-[#7E30E1] my-4 flex items-center gap-1 text-sm font-bold"
            >
              Store by <MdKeyboardArrowDown></MdKeyboardArrowDown>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Rating</a>
              </li>
              <li>
                <a>Number of pages</a>
              </li>
              <li>
                <a>Published year</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>
          <TabPanel>
            <ReadBooks></ReadBooks>
          </TabPanel>
          <TabPanel>
            <WishBooks></WishBooks>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBook;
