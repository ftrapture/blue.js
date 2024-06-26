"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Events;
(function (Events) {
    Events["nodeConnect"] = "nodeConnect";
    Events["nodeDisconnect"] = "nodeDisconnect";
    Events["nodeError"] = "nodeError";
    Events["trackStart"] = "trackStart";
    Events["debug"] = "api";
    Events["voiceUpdate"] = "voiceUpdate";
    Events["voiceStateUpdate"] = "voiceStateUpdate";
    Events["api"] = "raw";
    Events["trackEnd"] = "trackEnd";
    Events["queueEnd"] = "queueEnd";
    Events["trackError"] = "trackError";
    Events["playerCreate"] = "playerCreate";
    Events["playerUpdate"] = "playerUpdate";
    Events["playerDisconnect"] = "playerDisconnect";
    Events["wsConnect"] = "open";
    Events["wsDisconnect"] = "close";
    Events["wsDebug"] = "message";
    Events["wsError"] = "error";
})(Events || (Events = {}));
exports.default = Events;
//# sourceMappingURL=Events.js.map