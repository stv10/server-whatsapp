import axios from "axios";
const VERSION = 'v15.0';
const PHONE_ID = '105135752453447';
const TOKEN_AUTH = 'Bearer EAAL8aVPFTHkBAGMzQjS5pFe8tY78TYdjcbYog0JRdNAYZAM3mVZCDFl8nC2kcNKQ9ix4kXOZC2QrhhOkqwFxCicl0c4CtxFFGW6VtwXhtlLMVMUjQcCNdy9dLaOgKJmy6RGcYZCZA2d1A4Gvn3EEjubbUmP4GNaiZCJRciBmUUsstH0N2NoyhgYHAjpW8sFqGYIC1r6gnS9QZDZD'


axios.defaults.baseURL = `https://graph.facebook.com/${VERSION}/${PHONE_ID}/messages`;
axios.defaults.headers.common['Authorization'] = TOKEN_AUTH;

function bodyRequest(nombreJefe: string, nombreEmpleado: string, contacto: string) {
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
    }
}
export const sendSimpleMessage = async (nombreJefe: string, nombreEmpleado: string, contacto: string) => {
    let rta_wsp;
    await axios.post('', bodyRequest(nombreJefe,nombreEmpleado,contacto))
        .then((data) => {
            console.log(data.data);
            rta_wsp = data.data;
        })
        .catch((err) => {
            console.log(err);
        })
    return rta_wsp;
}