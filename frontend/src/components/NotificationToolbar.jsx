import { FiSearch } from "react-icons/fi";

function NotificationToolbar({ search, setSearch }) {
  return (
    <>

      <div className="search-wrapper">

        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search notifications..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

      </div>

      <div className="filter-row">

        <button className="active">
          All
        </button>

        <button>Team</button>

        <button>Messages</button>

        <button>Deals</button>

        <button>Campaigns</button>

        <button>Reports</button>

      </div>

    </>
  );
}

export default NotificationToolbar;