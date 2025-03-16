addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  // Modify this to redirect DNS queries to a trusted DNS provider like Cloudflare
  const dnsServer = "https://dns.google/resolve";  // Cloudflare DNS or Google's DNS
  const query = url.searchParams.get("name");  // Assuming the query is in the "name" parameter

  if (!query) {
    return new Response("DNS query missing", { status: 400 });
  }

  const dnsResponse = await fetch(`${dnsServer}?name=${query}&type=A`);
  const dnsData = await dnsResponse.json();

  return new Response(JSON.stringify(dnsData), {
    headers: { "Content-Type": "application/json" }
  });
}
