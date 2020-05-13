import React from 'react'

export async function getData() {
    const res = await fetch("https://fmderecho.com/mobile/api/data.json");
    const json = await res.json();
    return json;
}

export default { getData };