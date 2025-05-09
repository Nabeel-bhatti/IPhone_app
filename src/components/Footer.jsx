import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <>
      <div>
        <p className="font-semibold text-gray text-xs">
          More ways to shop:{" "}
          <span className="underline text-blue">Find an Apple Store </span> or{" "}
          <span className="underline text-blue">other retailers</span> near you.
        </p>
        <p className="font-semibold text-gray text-xs">
          Or call 000800-040-1965
        </p>
      </div>

      <div className="bg-neutral-700 my-5 h-[1px] w-full" />
      <div className="flex md:flex-row flex-col md:items-center justify-between">
        <p className="font-semibold text-gray text-xs">
          Copyright @ 2024 Apple Inc. All rights reserved
        </p>
        <div className="flex mb-5">
          {footerLinks.map((link, i) => (
            <p key={link} className="font-semibold text-gray text-xs">
              {link}{" "}
              {i !== footerLinks.length - 1 && (
                <span className="mx-2"> | </span>
              )}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
