var webPush = require('web-push')

const vapidKey = {
    "publicKey": "BC8ot3ieZFmDM97_pnocyklWRTIwKkkRGaHLegrpVeoswxVsmUbSyD5oMCLhTXTGKDPcBlZh0dg2a3DzD7gX1kE",
    "privateKey": "zem1rNAyowKlAVLbqCvFLA9XbCDeBI-ZdlZHMYEMfrA"
}

webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKey.publicKey,
    vapidKey.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/fJ1d3_9fYxw:APA91bErJlKQ0Js__6izFZxhCH1gAcvcnByO1eXi0i3s3Aof_bx6wRjW5i6SII2yJrC4C8eAOICq6EEW9rApRNQ4Wb_1EjAc5L7xZ-JSO5eWX43A9FA0NKriAzP6k9JmPaAfoKbO13Yb",
    "Keys": {
        "p256dh": "BE8l/VfIWK+PjkWVFJkE3RktBTM8J69mK2XcDKcRhxpNVS18+bP8OQFbzMucJ9uzkpD9JmCT1gh3CL9jMLhQTSY=",
        "auth":  "i3m03e1gzaaMGeHCuiJNfQ=="
    }
}
var payload = 'Selamat! Aplikasi anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: "184073159235",
    TTL: 60
}
webPush.sendNotification(
    pushSubscription,
    payload,
    options
)