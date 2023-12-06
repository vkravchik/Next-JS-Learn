import { createEdgeRouter } from 'next-connect';
import { NextRequest } from 'next/server';
import dbConnect from '../../../../backend/config/db.connect';
import { getAll } from '../../../../backend/rooms/room.controller';

interface RequestContext {
    params: {
        id: string;
    }
}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(getAll);

export const GET = async (request: NextRequest, ctx: RequestContext) => {
    return router.run(request, ctx);
}
