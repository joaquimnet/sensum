"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typingStart = exports.messageReactionRemoveAll = exports.messageReactionRemove = exports.messageReactionAdd = exports.messageDeleteBulk = exports.messageDelete = exports.channelUpdate = void 0;
var channelUpdate_1 = require("./channelUpdate");
Object.defineProperty(exports, "channelUpdate", { enumerable: true, get: function () { return __importDefault(channelUpdate_1).default; } });
var messageDelete_1 = require("./messageDelete");
Object.defineProperty(exports, "messageDelete", { enumerable: true, get: function () { return __importDefault(messageDelete_1).default; } });
var messageDeleteBulk_1 = require("./messageDeleteBulk");
Object.defineProperty(exports, "messageDeleteBulk", { enumerable: true, get: function () { return __importDefault(messageDeleteBulk_1).default; } });
var messageReactionAdd_1 = require("./messageReactionAdd");
Object.defineProperty(exports, "messageReactionAdd", { enumerable: true, get: function () { return __importDefault(messageReactionAdd_1).default; } });
var messageReactionRemove_1 = require("./messageReactionRemove");
Object.defineProperty(exports, "messageReactionRemove", { enumerable: true, get: function () { return __importDefault(messageReactionRemove_1).default; } });
var messageReactionRemoveAll_1 = require("./messageReactionRemoveAll");
Object.defineProperty(exports, "messageReactionRemoveAll", { enumerable: true, get: function () { return __importDefault(messageReactionRemoveAll_1).default; } });
var typingStart_1 = require("./typingStart");
Object.defineProperty(exports, "typingStart", { enumerable: true, get: function () { return __importDefault(typingStart_1).default; } });