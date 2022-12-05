import { ProgressBar } from "react-loader-spinner";

const Spinner = ({
    height = "80",
    width = "80",
    ariaLabel = "progress-bar-loading",
    className,
    borderColor = 'transparent',
    barColor = '#51E5FF'
}) => (
  <ProgressBar
    height={height}
    width={width}
    ariaLabel={ariaLabel}
    wrapperClass={className}
    borderColor={borderColor}
    barColor={barColor}
  />
);

export default Spinner;