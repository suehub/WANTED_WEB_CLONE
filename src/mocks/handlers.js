import { rest } from "msw";
import data from '../db/datas.json';

export const handlers = [
    // 데이터 조회
    rest.get('/', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(data));
    }),
    rest.get('/', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(data));
    }),
    rest.get('/recruitlist', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(data.tagDatas));
    })
];
