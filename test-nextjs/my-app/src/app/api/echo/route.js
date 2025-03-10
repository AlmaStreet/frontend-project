// src/app/api/echo/route.js
export async function POST(request) {
    // Parse the JSON request body
    const { input } = await request.json();
  
    // Build a response
    const response = {
      message: 'Hello from Next.js API route!',
      input,
      timestamp: new Date().toISOString(),
    };
  
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  