export default {
  async fetch(request) {
    // Forward the incoming request to the target URL (the same as the original request's URL)
    const response = await fetch(request);

    // Return the response back to the client
    return response;
  },
};
