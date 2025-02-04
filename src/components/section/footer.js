"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fa_1 = require("react-icons/fa");
var socialLinks = [
    { href: "https://discord.com", icon: <fa_1.FaDiscord /> },
    { href: "https://twitter.com", icon: <fa_1.FaTwitter /> },
    { href: "https://youtube.com", icon: <fa_1.FaYoutube /> },
    { href: "https://medium.com", icon: <fa_1.FaMedium /> },
];
var Footer = function () {
    return (<footer className="w-screen bg-background py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Nova 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map(function (link, index) { return (<a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:text-white">
              {link.icon}
            </a>); })}
        </div>

        <a href="#privacy-policy" className="text-center text-sm font-light hover:underline md:text-right">
          Privacy Policy
        </a>
      </div>
    </footer>);
};
exports.default = Footer;
