import { ProgressBar } from "react-loader-spinner";

const Spinner = () => (
  <ProgressBar
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = 'transparent'
  barColor = '#51E5FF'
/>
);

export default Spinner;