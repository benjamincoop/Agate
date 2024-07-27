export const dynamic = 'force-dynamic'

import excuteSqlQuery from "@/src/lib/db";

export async function GET(request: Request): Promise<Response> {
    const result = await excuteSqlQuery('SELECT * FROM test');
    return Response.json(result);
}

export async function POST(request: Request): Promise<any> {
    return Response.json({test: 'posted'});
}

export async function PUT(request: Request): Promise<any> {
    return Response.json({test: 'putted'});
}

export async function DELETE(request: Request): Promise<any> {
    return Response.json({test: 'deleted'});
}