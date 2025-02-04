"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = require("@/components");
function Home() {
    return (<div className="bg-white">
        <components_1.Navbar />
        <components_1.Sidebar />
        <components_1.Hero />
        <components_1.About />
        <components_1.Features />
        <components_1.Story />
        <components_1.Contact />
        <components_1.Footer />
        <components_1.Audio />
      </div>);
}
exports.default = Home;
