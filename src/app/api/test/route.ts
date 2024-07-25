export const dynamic = 'force-dynamic'

import excuteSqlQuery from "@/src/lib/db";

export async function GET(request: Request) {
    console.log('REACHED API ROUTE');
    excuteSqlQuery('SELECT * FROM agate');
    return new Response("EXECUTE CALLED");
}