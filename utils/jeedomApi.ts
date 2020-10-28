function formatCommandUrl(commandId: Number) {
    return new URL(`${process.env.NEXT_PUBLIC_JEEDOM_API_URL}?apikey=${process.env.NEXT_PUBLIC_JEEDOM_API_KEY}&type=cmd&id=${commandId}`);
}

export function triggerCommand(commandId: Number): Promise<Response> {
    return fetch(formatCommandUrl(commandId).toString());
}