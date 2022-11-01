import React from "react";

interface LinkFooterProps {
  direction: string;
  name: string;
}

const LinkFooter: React.FC<LinkFooterProps> = ({ direction, name }) => {
  return (
    <>
      <div style={{ padding: "15px" }}>
        <a style={{ textDecoration: "none" }} href={direction}>
          {name}
        </a>
      </div>
    </>
  );
};

export default LinkFooter;
