// src/app/api/submit-to-sheet/route.js

export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxU_4qP-V0kCNQfkv52_rqW__pjEjBNRj5RG8M7Xobq6u6PDhgJ90QAoso3srpj5ra60Q/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const result = await response.json();

    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
    });
  } catch (error) {
    console.error("Submit Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}
