import { Router, Request, Response } from 'express';
import { MensajeSimple } from '../interfaces/msjs';
import { sendSimpleMessage } from '../api/api';
const router = Router();

router.post('/msg_simple', async (req: Request<{}, any, any>, resp: Response) => {
    console.log(req.body);

    let rta_api = await sendSimpleMessage(req.body.nombreJefe, req.body.nombreEmpleado,req.body.contacto);
    resp.send(rta_api);
})

export default router;