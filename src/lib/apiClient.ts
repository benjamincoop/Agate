export class SimpleResponse {
  status: number;
  message: string;
  data: object[];

  constructor(status: number, message: string, data?: object[]) {
    this.status = status;
    this.message = message;
    this.data = data ?? [];
  }
}

export enum ApiMethods {
  GET, POST, PUT, DELETE
}

export default async function api(path: string, method: ApiMethods): Promise<SimpleResponse> {
  try {
    var response: Response;
    var data: object[];
    
    switch(method) {
      case ApiMethods.GET:
        response = await fetch(path, {method: 'GET'});
        data = await response.json() as object[];
        return new SimpleResponse(response.status, response.statusText, data);
      case ApiMethods.POST:
        response = await fetch(path, {method: 'POST'});
        data = await response.json() as object[];
        return new SimpleResponse(response.status, response.statusText, data);
      case ApiMethods.PUT:
        response = await fetch(path, {method: 'PUT'});
        data = await response.json() as object[];
        return new SimpleResponse(response.status, response.statusText, data);
      case ApiMethods.DELETE:
        response = await fetch(path, {method: 'DELETE'});
        data = await response.json() as object[];
        return new SimpleResponse(response.status, response.statusText, data);
    }
  } catch (err) {
    console.error(err);
    return new SimpleResponse(500, "Internal Server Error");
  }
  return new SimpleResponse(500, "Unsupported Method");
}