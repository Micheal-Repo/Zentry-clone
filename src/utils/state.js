"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSidebar = void 0;
var zustand_1 = require("zustand");
var useSidebar = (0, zustand_1.create)(function (set) { return ({
    isOpen: false,
    setIsOpen: function (val) { return set(function () { return ({ isOpen: val }); }); }
}); });
exports.useSidebar = useSidebar;
