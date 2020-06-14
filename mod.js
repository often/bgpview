const endpoint = 'https://api.bgpview.io'

/**
 * View ASN Details
 *
 * @param {Number} number - The autonomous system number.
*/
export async function as(number) {
	return await (await fetch(endpoint + '/asn/' + number)).json()
}

/**
 * View ASN Prefixes
 *
 * @param {Number} asn - The autonomous system number.
*/
export async function prefixes(asn) {
	return await (await fetch(endpoint + '/asn/' + asn + '/prefixes')).json()
}

/**
 * View ASN Peers
 *
 * @param {Number} asn - The autonomous system number.
*/
export async function peers(asn) {
	return await (await fetch(endpoint + '/asn/' + asn + '/peers')).json()
}

/**
 * View ASN Upstreams
 *
 * @param {Number} asn - The autonomous system number.
*/
export async function upstreams(asn) {
	return await (await fetch(endpoint + '/asn/' + asn + '/upstreams')).json()
}

/**
 * View ASN Downstreams
 *
 * @param {Number} asn - The autonomous system number.
*/
export async function downstreams(asn) {
	return await (await fetch(endpoint + '/asn/' + asn + '/downstreams')).json()
}

/**
 * View ASN IXs
 *
 * @param {Number} asn - The autonomous system number.
*/
export async function ixs(asn) {
	return await (await fetch(endpoint + '/asn/' + asn + '/ixs')).json()
}

/**
 * View Prefix Details
 *
 * @param {String} ip - The base IP address of the announced prefix.
 * @param {Number} cidr - The prefix cidr size.
*/
export async function prefix(ip, cidr) {
	return await (await fetch(endpoint + '/prefix/' + ip + '/' + cidr)).json()
}

/**
 * View IP Address Details
 *
 * @param {String} address - The IP address.
*/
export async function ip(address) {
	return await (await fetch(endpoint + '/ip/' + address)).json()
}

/**
 * View IX Details and Members
 *
 * @param {Number} id - The IX ID.
*/
export async function ix(id) {
	return await (await fetch(endpoint + '/ix/' + id)).json()
}

/**
 * Search resources by ASN, IP address, Prefix, Name, Description, etc
 *
 * @param {String} query - The search query term.
*/
export async function search(query) {
	return await (await fetch(endpoint + '/search?query_term=' + query)).json()
}
