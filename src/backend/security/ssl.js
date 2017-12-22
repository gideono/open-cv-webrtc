import { readFileSync } from 'fs'

export const cert = readFileSync('localhost-cert.pem');
export const key = readFileSync('localhost-privkey.pem');
