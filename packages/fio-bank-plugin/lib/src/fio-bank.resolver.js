"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FioBankResolver = exports.OrderMessage = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_1 = require("@vendure/core");
const fio_bank_service_1 = require("./fio-bank.service");
let OrderMessage = class OrderMessage {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], OrderMessage.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], OrderMessage.prototype, "cost", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], OrderMessage.prototype, "vs", void 0);
OrderMessage = __decorate([
    graphql_1.ObjectType()
], OrderMessage);
exports.OrderMessage = OrderMessage;
let FioBankResolver = class FioBankResolver {
    constructor(fioBankService) {
        this.fioBankService = fioBankService;
    }
    async getTransactions(ctx, args) {
        const { from, to } = args;
        return this.fioBankService.getTransactions(ctx, from, to);
    }
};
__decorate([
    graphql_1.Mutation(),
    core_1.Allow(core_1.Permission.Public),
    __param(0, core_1.Ctx()),
    __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", Promise)
], FioBankResolver.prototype, "getTransactions", null);
FioBankResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [fio_bank_service_1.FioBankService])
], FioBankResolver);
exports.FioBankResolver = FioBankResolver;
//# sourceMappingURL=fio-bank.resolver.js.map