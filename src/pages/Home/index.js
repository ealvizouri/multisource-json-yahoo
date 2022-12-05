import {
  ContactsWidget,
  GDriveWidget,
  ImagesWidget,
  SlacksWidget,
  TweetsWidget,
} from "../../widgets";

const HomePage = () => {
  return (
    <>
      <div className="layout-sidebar">
        <ContactsWidget />
        <SlacksWidget />
        <GDriveWidget />
      </div>
      <div className="layout-main">
        <ImagesWidget />
      </div>
      <div className="layout-footer">
        <TweetsWidget />
      </div>
    </>
  );
}

export default HomePage;