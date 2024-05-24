// Setup type definitions for built-in Supabase Runtime APIs
/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

console.log("Hello from Functions!")

Deno.serve(async (req) => {
const expoPushToken = "ExponentPushToken[LYWAHbFL86HJcQyLPzz1JA]";

const res = await fetch("https://exp.host/--/api/v2/push/send", {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Deno.env.get('EXPO_ACCESS_TOKEN')}`,
    },
    body: JSON.stringify({
        "to": expoPushToken,
        "sound": "default",
        "body": "Hello world!"
    })
}).then(res => res.json());

return new Response(
    JSON.stringify(res),
    { headers: { "Content-Type": "application/json" } },
)
})