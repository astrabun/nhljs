export class HttpClient {
  constructor(private readonly baseUrl: string) {}

  async get<TResponse>(
    path: string,
    params?: Record<string, string | number | boolean>,
  ): Promise<TResponse> {
    const url = new URL(`${this.baseUrl}${path}`);
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, String(value));
      }
    }
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`NHL API error ${res.status}: ${url}`);
    }
    return res.json() as Promise<TResponse>;
  }
}
