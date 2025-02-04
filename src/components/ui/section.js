"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Section(_a) {
    var children = _a.children;
    return (<section className="w-screen">
        <div className="w-full max-w-6xl px-4">
        {children}
        </div>
      </section>);
}
exports.default = Section;
