import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const TwitterVerified = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path
      filRule="evenodd"
      d="M15.76 10.426c.128-.177.24-.386.24-.594-.017-.193-.08-.418-.256-.563-.146-.176-.37-.24-.563-.24-.209 0-.45.064-.578.24l-3.871 3.857-1.334-1.35c-.176-.145-.353-.241-.578-.241-.225 0-.401.096-.594.24-.129.177-.241.37-.226.58 0 .208.065.433.241.578l1.912 1.927c.08.08.162.129.274.176a.702.702 0 00.32.065c.081 0 .21-.016.306-.065a.74.74 0 00.257-.176h.016c-.016 0-.016 0 0 0-.016 0-.016 0 0 0l4.418-4.434h.016zm3.838 3.502c-.273.466-.627.852-1.091 1.108a.231.231 0 01.031.097.104.104 0 000 .097.204.204 0 01.016.096.101.101 0 000 .096c-.016.852-.337 1.607-.867 2.153s-1.238.9-2.056.9c-.177 0-.353-.033-.515-.065-.16-.032-.352-.065-.498-.128-.256.513-.594.932-1.043 1.236a2.854 2.854 0 01-1.591.482 2.7 2.7 0 01-1.542-.482c-.45-.304-.85-.723-1.06-1.236a2.9 2.9 0 01-.497.128c-.193.032-.338.065-.531.065a2.868 2.868 0 01-2.056-.9 3.05 3.05 0 01-.835-2.153.101.101 0 010-.096v-.096a.104.104 0 010-.097.104.104 0 000-.097 3.207 3.207 0 01-1.06-1.108A2.98 2.98 0 014 12.37c-.016-.594.176-1.157.45-1.639.273-.482.707-.851 1.173-1.092l-.065-.257a1.372 1.372 0 01-.063-.273c-.017-.08-.017-.176-.033-.273a.792.792 0 010-.274 3.11 3.11 0 01.835-2.152 2.81 2.81 0 013.085-.706c.209-.498.61-.932 1.059-1.237A2.688 2.688 0 0111.984 4c.594 0 1.125.162 1.591.467.45.305.787.74 1.043 1.237.146-.065.338-.113.498-.144a2.784 2.784 0 012.57.85c.53.562.852 1.317.868 2.152-.016.097-.016.194-.016.274l-.047.273-.05.273a.804.804 0 01-.096.257c.514.24.9.61 1.205 1.092.306.482.434 1.045.45 1.639-.016.579-.144 1.108-.402 1.558z"
    />
  </svg>
);

TwitterVerified.propTypes = { fill: PropTypes.string };
TwitterVerified.defaultProps = { fill: iconColorsMap.twitterverified };

export default TwitterVerified;