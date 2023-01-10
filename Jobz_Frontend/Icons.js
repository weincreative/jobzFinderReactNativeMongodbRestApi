import Svg, { Circle, Rect, Path } from "react-native-svg";
//https://icons.getbootstrap.com/icons/three-dots-vertical/
function ProfileGhost({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      data-supported-dps="48x48"
      fill={fill}
      width={size}
      height={size}
      {...props}
    >
      <Path d="M11.1 35.25q3.15-2.2 6.25-3.375Q20.45 30.7 24 30.7q3.55 0 6.675 1.175t6.275 3.375q2.2-2.7 3.125-5.45Q41 27.05 41 24q0-7.25-4.875-12.125T24 7q-7.25 0-12.125 4.875T7 24q0 3.05.95 5.8t3.15 5.45ZM24 25.5q-2.9 0-4.875-1.975T17.15 18.65q0-2.9 1.975-4.875T24 11.8q2.9 0 4.875 1.975t1.975 4.875q0 2.9-1.975 4.875T24 25.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.775t4.3-6.35q2.725-2.725 6.375-4.3Q19.9 4 24 4q4.15 0 7.775 1.575t6.35 4.3q2.725 2.725 4.3 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.3 6.375-2.725 2.725-6.35 4.3Q28.15 44 24 44Zm0-3q2.75 0 5.375-.8t5.175-2.8q-2.55-1.8-5.2-2.75-2.65-.95-5.35-.95-2.7 0-5.35.95-2.65.95-5.2 2.75 2.55 2 5.175 2.8Q21.25 41 24 41Zm0-18.5q1.7 0 2.775-1.075t1.075-2.775q0-1.7-1.075-2.775T24 14.8q-1.7 0-2.775 1.075T20.15 18.65q0 1.7 1.075 2.775T24 22.5Zm0-3.85Zm0 18.7Z" />
    </Svg>
  );
}
//https://media-exp1.licdn.com/dms/image/C5603AQGN5gA62UD04Q/profile-displayphoto-shrink_400_400/0/1517346015646?e=1674086400&v=beta&t=VNPz5pw2SLzqxBT9KAFM7QRkX05w2-WXBLgTj86qFck

function Home({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill}
      class="mercado-match"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z" />
    </Svg>
  );
}

function HomeClick({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill}
      class="mercado-match"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z" />
    </Svg>
  );
}

function Network({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill}
      class="mercado-match"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z" />
    </Svg>
  );
}

function NetworkClick({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill}
      class="mercado-match"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M12 6.5a4.5 4.5 0 114.5 4.5A4.49 4.49 0 0112 6.5zm6 6.5h-3a3 3 0 00-3 3v6h9v-6a3 3 0 00-3-3zM6.5 6A3.5 3.5 0 1010 9.5 3.5 3.5 0 006.5 6zm1 9h-2A2.5 2.5 0 003 17.5V22h7v-4.5A2.5 2.5 0 007.5 15z" />
    </Svg>
  );
}

function Jobs({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill}
      class="mercado-match"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z" />
    </Svg>
  );
}

function JobsClick({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill}
      class="mercado-match"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M22.84 10.22L21 6h-3.95V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2l2.22 5.18A3 3 0 007 13h14a2 2 0 001.84-2.78zM15.05 6h-6V5a1 1 0 011-1h4a1 1 0 011 1zM7 14h15v3a3 3 0 01-3 3H5a3 3 0 01-3-3V8.54l1.3 3A4 4 0 007 14z" />
    </Svg>
  );
}

function Notifications({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill}
      class="mercado-match"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z" />
    </Svg>
  );
}

function NotificationsClick({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill}
      class="mercado-match"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M22 19.24a3.46 3.46 0 01-.09.78l-.22 1-6.76-1.51A2.16 2.16 0 0115 20a2 2 0 11-3.53-1.28L2 16.62l.22-1A4.45 4.45 0 014 13.12l1.22-.93 15.46 3.44.7 1.36a5 5 0 01.62 2.25zm-1.49-10.4a6.29 6.29 0 00-4.92-6.69A6.76 6.76 0 0014.18 2a6.29 6.29 0 00-5.9 4.12l-2 5.27 13.8 3.08z" />
    </Svg>
  );
}

function Messenger({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill}
      class="mercado-match"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z" />
    </Svg>
  );
}

function MessengerClick({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill}
      class="mercado-match"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M22 8a6 6 0 01-3 5.22A7 7 0 0012 7H8a7 7 0 00-1.95.28A6 6 0 0112 2h4a6 6 0 016 6zm-4 6v.48a6 6 0 01-2.69 5L10 23v-3H8A6 6 0 018 8h4a6 6 0 016 6zM8 14a1 1 0 10-1 1 1 1 0 001-1zm3 0a1 1 0 10-1 1 1 1 0 001-1zm3 0a1 1 0 10-1 1 1 1 0 001-1z" />
    </Svg>
  );
}

function EditButton({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill}
      class="mercado-match"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z" />
    </Svg>
  );
}

function PlusButton({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill}
      class="mercado-match"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z" />
    </Svg>
  );
}

function WorkerCount({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill}
      class="mercado-match"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M4 2v20h16V2zm14 18h-4v-2h-4v2H6V4h12zm-7-8H8v-2h3zm0 4H8v-2h3zm5-4h-3v-2h3zm-5-4H8V6h3zm5 0h-3V6h3zm0 8h-3v-2h3z" />
    </Svg>
  );
}

function Options({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill}
      class="mercado-match"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z" />
    </Svg>
  );
}

function Options2({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fill}
      class="bi bi-three-dots-vertical"
      viewBox="0 0 16 16"
    >
      <Path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
    </Svg>
  );
}

function Favorite({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill}
      class="mercado-match"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z" />
    </Svg>
  );
}

function CreateJob({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill}
      class="mercado-match"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M19 12h2v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h6v2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1zm4-8a2.91 2.91 0 01-.87 2l-8.94 9L7 17l2-6.14 9-9A3 3 0 0123 4zm-4 2.35L17.64 5l-7.22 7.22 1.35 1.34z" />
    </Svg>
  );
}

function LeftArrow({ size, fill, stroke, strokeWidth, ...props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill}
      class="mercado-match"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M10 20L11.41 18.59L3.83 11H24V9H3.83L11.41 1.41L10 0L0 10L10 20Z" />
    </Svg>
  );
}
export {
  ProfileGhost,
  Home,
  HomeClick,
  Network,
  NetworkClick,
  Jobs,
  JobsClick,
  Notifications,
  NotificationsClick,
  Messenger,
  MessengerClick,
  EditButton,
  PlusButton,
  WorkerCount,
  Options,
  Options2,
  Favorite,
  CreateJob,
  LeftArrow,
};
