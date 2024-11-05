"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../services/index");
class NonTeachingStaffcontroller {
    createNonTeachingStaff(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const nonTeachingStaffData = req.body;
            try {
                const newNonTeachingStaff = yield index_1.NonTeachingStaffService.create(nonTeachingStaffData);
                res.status(200).json(newNonTeachingStaff);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getNonTeachingStaffById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nonTeachingStaff = yield index_1.NonTeachingStaffService.getById(req.params.ID);
                res.status(200).json(nonTeachingStaff);
            }
            catch (error) {
                next(error);
            }
        });
    }
    updateNonTeachingStaffById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const nonTeachingStaffData = req.body;
            try {
                const updatedNonTeachingStaff = yield index_1.NonTeachingStaffService.updateById(req.params.ID, nonTeachingStaffData);
                res.status(200).json(updatedNonTeachingStaff);
            }
            catch (error) {
                next(error);
            }
        });
    }
    deleteNonTeachingStaffById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield index_1.NonTeachingStaffService.deleteById(req.params.ID);
                res.status(200).json(response);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield index_1.NonTeachingStaffService.getAll();
                res.status(200).json(response);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new NonTeachingStaffcontroller();
