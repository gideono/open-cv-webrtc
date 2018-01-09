import { readFileSync } from 'fs'
import path from 'path'

export const cert = readFileSync(path.join(__dirname, './localhost-cert.pem'));
export const key = readFileSync(path.join(__dirname, './localhost-privkey.pem'));
