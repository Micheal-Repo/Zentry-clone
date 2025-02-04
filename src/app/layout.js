"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
var local_1 = require("next/font/local");
require("./globals.css");
var geistSans = (0, local_1.default)({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
});
var geistMono = (0, local_1.default)({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
});
var geistZentry = (0, local_1.default)({
    src: "./fonts/zentry-regular.woff2",
    variable: "--font-zentry",
});
var geistRobertRegular = (0, local_1.default)({
    src: "./fonts/robert-regular.woff2",
    variable: "--font-robert-regular",
});
exports.metadata = {
    title: "Zentry Clone",
};
function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
      <body className={"\n      ".concat(geistSans.variable, "\n      ").concat(geistMono.variable, "\n      ").concat(geistZentry.variable, "\n      ").concat(geistRobertRegular.variable, "\n      ")}>
        {children}
      </body>
    </html>);
}
exports.default = RootLayout;
