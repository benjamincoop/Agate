export const dynamic = 'force-dynamic'

import excuteSqlQuery from "@/src/lib/db";

export async function GET(request: Request): Promise<Response> {
    const result = await excuteSqlQuery('SELECT * FROM test');
    return Response.json(result);
}