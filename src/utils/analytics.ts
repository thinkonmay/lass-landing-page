'use client'
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://eznzbrvwojejubnxlcaq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6bnpicnZ3b2planVibnhsY2FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5NTU4MDAsImV4cCI6MjAyNzUzMTgwMH0.EAYuqXU7i_D1HOscFgYve1LtCzzfAyhefppchiRdBuc';
export const supabase = createClient(supabaseUrl, supabaseKey);

export function getResolution(): {
    width: number;
    height: number;
    screen_width: number;
    screen_height: number;
} {
    return {
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
        screen_width: window.screen.width,
        screen_height: window.screen.height
    };
}


export function getOS() {
    let OSName = 'unknown';

    if (navigator.userAgent.indexOf('Win') != -1) OSName = 'Windows';
    if (navigator.userAgent.indexOf('Mac') != -1) OSName = 'Mac OS';
    if (navigator.userAgent.indexOf('Linux') != -1) OSName = 'Linux';
    if (navigator.userAgent.indexOf('Android') != -1) OSName = 'Android';
    if (navigator.userAgent.indexOf('like Mac') != -1) OSName = 'iOS';

    return OSName;
}

export function getBrowser() {
    if (
        (navigator.userAgent.indexOf('Opera') ||
            navigator.userAgent.indexOf('OPR')) != -1
    ) {
        return 'Opera';
    } else if (navigator.userAgent.indexOf('Edg') != -1) {
        return 'Edge';
    } else if (navigator.userAgent.indexOf('Chrome') != -1) {
        return 'Chrome';
    } else if (navigator.userAgent.indexOf('Safari') != -1) {
        return 'Safari';
    } else if (navigator.userAgent.indexOf('Firefox') != -1) {
        return 'Firefox';
    }

    return 'unknown';
}

const stack : any[] = [];
let current_stack_length = 0;
export function UserEvents(content: { type: string; payload: any }) {
    stack.push({
        content,
        timestamp: new Date().toISOString()
    });
}

export async function UserSession(email?: string) {
    if (window.location.href.includes('localhost')) return;

    let ip = '';

    try {
        ip =
            (await (await fetch('https://icanhazip.com/')).text())
                .split('\n')
                .at(0) ?? '';
    } catch {}

    const value = {
        ip,
        stack,
        os: getOS(),
        browser: getBrowser(),
        resolution: getResolution(),
        email: email ?? 'unknown',
        url: window.location.href
    };
    const { data, error } = await supabase
        .from('generic_events')
        .insert({
            value,
            name: `new session ${window.location.href}`,
            type: 'ANALYTICS'
        })
        .select('id');
    if (error || data?.length == 0) return;

    const session = data.at(0)?.id;
    setInterval(async () => {
        if (stack.length == current_stack_length) return;

        value.stack = stack;
        await supabase
            .from('generic_events')
            .update({ value })
            .eq('id', session);

        current_stack_length = stack.length;
    }, 10 * 1000);
}
