'use client';
import { createClient } from '@supabase/supabase-js';

export const APP_REDIRECT = 'https://play.thinkmay.net';
export const APP_DOMAIN = 'https://play.0.thinkmay.net';
const APP_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzIzMTM2NDAwLAogICJleHAiOiAxODgwOTAyODAwCn0.SdW2AcXzhRFNBt9HmJw6sKa7lWDmVjbXdRF1mIjrDao';
export const supabaseLocal = createClient(APP_DOMAIN, APP_KEY);

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

const stack: { content: any; timestamp: string }[] = [];
let current_stack_length = 0;
export function UserEvents(content: { type: string; payload: any }) {
    if (window.location.href.includes('localhost')) console.log(content);
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
        url: window.location.href
    };

    const { data, error } = await supabaseLocal
        .from('generic_events')
        .insert({
            value,
            name: email ?? 'unknown',
            type: 'ANALYTICS'
        })
        .select('id');
    if (error || data?.length == 0) return;

    const session = data.at(0)?.id;
    const analytics_report = async () => {
        if (stack.length == current_stack_length) return;

        value.stack = stack;
        await supabaseLocal
            .from('generic_events')
            .update({ value })
            .eq('id', session);

        current_stack_length = stack.length;
    };

    setTimeout(analytics_report, 1 * 1000);
    setTimeout(analytics_report, 3 * 1000);
    setInterval(analytics_report, 5 * 1000);
}

function getResolution(): {
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
