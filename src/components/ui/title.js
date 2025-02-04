"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Title(_a) {
    var children = _a.children, className = _a.className, size = _a.size;
    return (<div className={"".concat(className, " select-none pointer-events-none font-zentry ").concat(size ? size : "text-[2rem] md:text-[4rem]", " leading-[0.9]")}>
        {children}
      </div>);
}
exports.default = Title;
