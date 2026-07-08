import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "250px",
          minHeight: "100vh",
          background: "#f5f7fb",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default MainLayout;