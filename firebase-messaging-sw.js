// AODLC Firebase Service Worker - Push Notifications
// Upload this file to ROOT of your GitHub repository

importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDk8KtN9cqBoxOde1y0rbYgMemSdaiwf68",
  authDomain: "official-website-34d71.firebaseapp.com",
  databaseURL: "https://official-website-34d71-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "official-website-34d71",
  storageBucket: "official-website-34d71.firebasestorage.app",
  messagingSenderId: "350466495844",
  appId: "1:350466495844:web:b18bbac6ff1a4965ea9671"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification.title || 'AODLC Notice';
  const options = {
    body: payload.notification.body || 'New update from AODLC',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: 'aodlc-notification',
    actions: [
      { action: 'open', title: 'Open Website' },
      { action: 'close', title: 'Dismiss' }
    ]
  };
  return self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if(event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow('https://codewithaayu1.github.io/aodlc-website/')
    );
  }
});
