import * as React from 'react';
import { SVGProps } from 'react';

const SvgNautilus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40" {...props}>
    <path
      fill="#3EDBF0"
      d="M40 13.33A26.67 26.67 0 0 1 13.33 40V26.67a13.33 13.33 0 0 0 13.34-13.34H40Z"
    />
    <path fill="#2362C0" d="M13.33 13.33H0v13.33h13.33zM26.67 0H13.34v13.33h13.33z" />
  </svg>
);
export default SvgNautilus;
