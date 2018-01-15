import { readFileSync } from 'fs'
import path from 'path'

const isProd = process.env.NODE_ENV === 'production';
const certificate = isProd ? '/etc/letsencrypt/live/facedetection.ml/cert.pem' : path.join(__dirname, './localhost-cert.pem');
const privateKey = isProd ? '/etc/letsencrypt/live/facedetection.ml/privkey.pem' : path.join(__dirname, './localhost-privkey.pem')

export const cert = readFileSync(certificate);
export const key = readFileSync(privateKey);
