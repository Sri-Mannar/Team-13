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
class Infrastructurecontroller {
    createInfrastructure(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const infrastructureData = req.body;
            try {
                const newInfrastructure = yield index_1.InfrastructureService.create(infrastructureData);
                res.status(200).json(newInfrastructure);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getInfrastructureByAssetName(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const infrastructure = yield index_1.InfrastructureService.getByAssetName(req.params.assetName);
                res.status(200).json(infrastructure);
            }
            catch (error) {
                next(error);
            }
        });
    }
    updateInfrastructureByAssetName(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const infrastructureData = req.body;
            try {
                const updatedInfrastructure = yield index_1.InfrastructureService.updateByAssetName(req.params.assetName, infrastructureData);
                res.status(200).json(updatedInfrastructure);
            }
            catch (error) {
                next(error);
            }
        });
    }
    deleteInfrastructureByAssetName(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield index_1.InfrastructureService.deleteByAssetName(req.params.assetName);
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
                const response = yield index_1.InfrastructureService.getAll();
                res.status(200).json(response);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new Infrastructurecontroller();
