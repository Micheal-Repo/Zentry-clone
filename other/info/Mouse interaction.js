"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
Yes, you;
can;
use;
libraries;
like;
Framer;
Motion;
or;
react_1.default;
Spring;
to;
create;
mouse;
move;
interactions;
that;
make;
a;
box;
rotate;
or;
transform;
based;
on;
mouse;
movements.Here;
's how you can do it with each:;
-- -
    1.;
Using;
Framer;
Motion;
Framer;
Motion;
is;
a;
popular;
library;
for (creating; animations in react_1.default.Here; 's an example:)
    npm;
install;
framer - framer_motion_1.motion;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var MouseMoveInteraction = function () {
    var _a = (0, react_1.useState)({ x: 0, y: 0 }), position = _a[0], setPosition = _a[1];
    var handleMouseMove = function (event) {
        var clientX = event.clientX, clientY = event.clientY;
        var x = (clientX / window.innerWidth) * 2 - 1; // Normalize to [-1, 1]
        var y = (clientY / window.innerHeight) * 2 - 1;
        setPosition({ x: x, y: y });
    };
    return (<div onMouseMove={handleMouseMove} style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f0f0f0",
        }}>
      <framer_motion_1.motion.div style={{
            width: 200,
            height: 200,
            backgroundColor: "#007bff",
            borderRadius: 10,
        }} animate={{
            rotateX: position.y * 30, // Rotate based on mouse Y position
            rotateY: position.x * 30, // Rotate based on mouse X position
        }} transition={{ type: "spring", stiffness: 300 }}/>
    </div>);
};
exports.default = MouseMoveInteraction;
-- -
    2.;
Using;
react_1.default;
Spring;
react_1.default;
Spring;
is;
another;
great;
library;
for (animations in react_1.default.Here)
    's an example:;
npm;
install;
-spring / web;
var web_1 = require("@react-spring/web");
var MouseMoveInteraction = function () {
    var _a = (0, react_1.useState)({ x: 0, y: 0 }), coords = _a[0], setCoords = _a[1];
    var props = (0, web_1.useSpring)({
        transform: "rotateX(".concat(coords.y * 30, "deg) rotateY(").concat(coords.x * 30, "deg)"),
        config: { tension: 300, friction: 10 },
    });
    var handleMouseMove = function (event) {
        var clientX = event.clientX, clientY = event.clientY;
        var x = (clientX / window.innerWidth) * 2 - 1; // Normalize to [-1, 1]
        var y = (clientY / window.innerHeight) * 2 - 1;
        setCoords({ x: x, y: y });
    };
    return (<div onMouseMove={handleMouseMove} style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f0f0f0",
        }}>
      <web_1.animated.div style={__assign({ width: 200, height: 200, backgroundColor: "#28a745", borderRadius: 10 }, props)}/>
    </div>);
};
exports.default = MouseMoveInteraction;
-- -
    3.;
Vanilla;
(0, react_1.default)(without, libraries);
If;
you;
prefer;
not;
to;
use;
a;
library, you;
can;
achieve;
this;
with (react_1.default)
    and;
CSS;
transform: import React, { useState } from "react";
var MouseMoveInteraction = function () {
    var _a = (0, react_1.useState)({}), style = _a[0], setStyle = _a[1];
    var handleMouseMove = function (event) {
        var clientX = event.clientX, clientY = event.clientY;
        var x = (clientX / window.innerWidth) * 2 - 1;
        var y = (clientY / window.innerHeight) * 2 - 1;
        setStyle({
            transform: "rotateX(".concat(y * 30, "deg) rotateY(").concat(x * 30, "deg)"),
        });
    };
    return (<div onMouseMove={handleMouseMove} style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f0f0f0",
        }}>
      <div style={__assign({ width: 200, height: 200, backgroundColor: "#ff5722", borderRadius: 10 }, style)}/>
    </div>);
};
exports.default = MouseMoveInteraction;
-- -
    These;
examples;
should;
help;
you;
get;
started;
with (creating)
    mouse;
move;
interactions;
for (your; react_1.default; project.Let)
    me;
know;
if (you)
    need;
further;
assistance;
