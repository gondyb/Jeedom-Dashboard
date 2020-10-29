enum API_TYPES {
    cmd="cmd"
}

function fetchApi(type: string, id: Number, callback: (result: string) => void, url = process.env.NEXT_PUBLIC_JEEDOM_API_URL, key = process.env.NEXT_PUBLIC_JEEDOM_API_KEY): void {
    fetch(`${url}?apikey=${key}&type=${type}&id=${id}`)
            .then(res => res.text())
            .then(res => { if (callback != undefined) callback(res)});
}

export function triggerCommand(commandId: Number, callback: (result: string) => void = undefined) {
    fetchApi(API_TYPES.cmd, commandId, callback);
}