import Contacts from "../../widgets/Contacts";

const HomePage = () => {
  return (
    <>
      <div className="layout-sidebar">
        <Contacts />
      </div>
      <div className="layout-main">Main</div>
      <div className="layout-footer">Footer</div>
    </>
  );
}

export default HomePage;