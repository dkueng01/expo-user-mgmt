/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

Deno.serve(async (req) => {
    console.log('req', req);
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