"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Numeric Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
// Under the hood:
// ADMIN = 0, USER = 1, GUEST = 2
var userRole = Role.ADMIN;
console.log(userRole); // 0
