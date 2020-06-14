import { as, prefixes, peers, upstreams, downstreams, ixs, prefix, ip, ix, search } from './mod.js' // import the bgpview module

console.log(await as(13335)) // View ASN Details
console.log(await prefixes(13335)) // View ASN Prefixes
console.log(await peers(13335)) // View ASN Peers
console.log(await upstreams(13335)) // View ASN Upstreams
console.log(await downstreams(13335)) // View ASN Downstreams
console.log(await ixs(13335)) // View ASN IXs
console.log(await prefix('1.1.1.0', 24)) // View Prefix Details
console.log(await ip('1.1.1.1')) // View IP Address Details
console.log(await ix(22)) // View IX Details and Members
console.log(await search('Cloudflare')) // Search resources by ASN, IP address, Prefix, Name, Description, etc
