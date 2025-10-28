import Link from "next/link";
import React from "react";

interface TeamlistIconProps {
  href: string;
  children?: React.ReactNode;
}
const TeamlistIcon: React.FC<TeamlistIconProps> = ({href, children}) => {
  return (
    <Link href={href} className="content w-20 h-20 rounded-2xl">
      {children}
    </Link>
  )
}

const TeamlistBar: React.FC = () => {
  return (
    <aside className="layout w-26 p-3 flex flex-col gap-3">
      <TeamlistIcon href="/123">abc</TeamlistIcon>
      <TeamlistIcon href="/123">abc</TeamlistIcon>
      <TeamlistIcon href="/123">abc</TeamlistIcon>
    </aside>
  );
};

export default TeamlistBar;
