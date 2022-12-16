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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSimpleMessage = void 0;
const axios_1 = __importDefault(require("axios"));
const VERSION = 'v15.0';
const PHONE_ID = '105135752453447';
const TOKEN_AUTH = 'Bearer EAAL8aVPFTHkBAGMzQjS5pFe8tY78TYdjcbYog0JRdNAYZAM3mVZCDFl8nC2kcNKQ9ix4kXOZC2QrhhOkqwFxCicl0c4CtxFFGW6VtwXhtlLMVMUjQcCNdy9dLaOgKJmy6RGcYZCZA2d1A4Gvn3EEjubbUmP4GNaiZCJRciBmUUsstH0N2NoyhgYHAjpW8sFqGYIC1r6gnS9QZDZD';
axios_1.default.defaults.baseURL = `https://graph.facebook.com/${VERSION}/${PHONE_ID}/messages`;
axios_1.default.defaults.headers.common['Authorization'] = TOKEN_AUTH;
function bodyRequest(nombreJefe, nombreEmpleado, contacto) {
    return {
        messaging_product: "whatsapp",
        to: contacto,
        type: "template",
        template: {
            name: "codigo_unico",
            language: {
                code: "es"
            },
            components: [{
                    type: "body",
                    parameters: [
                        {
                            type: 'text',
                            text: nombreJefe
                        },
                        {
                            type: 'text',
                            text: nombreEmpleado
                        }
                    ]
                },
                {
                    type: "button",
                    sub_type: "url",
                    index: "0",
                    parameters: [
                        {
                            type: "text",
                            text: "content"
                        }
                    ]
                }]
        }
    };
}
const sendSimpleMessage = (nombreJefe, nombreEmpleado, contacto) => __awaiter(void 0, void 0, void 0, function* () {
    let rta_wsp;
    yield axios_1.default.post('', bodyRequest(nombreJefe, nombreEmpleado, contacto))
        .then((data) => {
        console.log(data.data);
        rta_wsp = data.data;
    })
        .catch((err) => {
        console.log(err);
    });
    return rta_wsp;
});
exports.sendSimpleMessage = sendSimpleMessage;
