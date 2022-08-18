/* eslint-disable */
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.1/firebase-app-compat.js',
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.1/firebase-messaging-compat.js',
);

const firebaseConfig = {
  apiKey: "AIzaSyAxbRV5cQY6I5Wi3-mhrVdYEWDEJpBVtLc",
  authDomain: "smartos-tpbank-dev.firebaseapp.com",
  databaseURL: 'https://smartos-tpbank-dev.firebaseio.com',
  projectId: "smartos-tpbank-dev",
  storageBucket: "smartos-tpbank-dev.appspot.com",
  messagingSenderId: "1090014474151",
  appId: "1:1090014474151:web:29ed00e9b732b1cf7a9082",
  measurementId: "G-TGKT9K1H4G"
};

firebase.initializeApp(firebaseConfig);

const handleRedirectNotification = (type, data) => {
  const { id } = data;

  switch (type) {
    case 'CREATE_BOOKING_ADMIN':
    case 'CONFIRMED_BOOKING':
    case 'COMPLETED_BOOKING':
    case 'CANCELLED_BOOKING':
    case 'CHECKED_IN_BOOKING':
    case 'CHECKED_OUT_BOOKING':
    case 'REMIND_CHECK_IN:':
    case 'REMIND_CHECK_OUT':
      return `/history/bookings/${id}`;
    case 'COMPLETED_INCIDENT_REPORT':
      return '/mailbox?tabKey=incident';
    case 'NEW_MESSAGE':
      return `/mailbox?tabKey=inquiry&inboxId=${data?.inboxId}`;
    case 'EVENT':
      return `events/${data?.eventId}`;
    default:
      return '/';
  }
};

const messaging = firebase.messaging();

const notificationBody = (type, data) => {
  switch (type) {
    case 'CONFIRMED_BOOKING':
      return `Your Booking ${data?.args?.[0]?.packageName?.en} at ${data?.args?.[1]?.locationName?.en} has been confirmed`;
    case 'CANCELLED_BOOKING':
      return `Your Booking ${data?.args?.[0]?.packageName?.en} at ${data?.args?.[1]?.locationName?.en} has been cancelled`;
    case 'CHECKED_IN_BOOKING':
      return `Your Booking ${data?.args?.[0]?.packageName?.en} at ${data?.args?.[1]?.locationName?.en} has been checked in`;
    case 'CHECKED_OUT_BOOKING':
      return `Your Booking ${data?.args?.[0]?.packageName?.en} at ${data?.args?.[1]?.locationName?.en} has been checked out`;
    case 'REMIND_CHECK_IN':
      return `Hi, ${data?.args?.[0]?.customerName?.en}. Just reminding you about your booking will be start in  ${data?.args?.[1]?.inMinute?.en} minutes at ${data?.args?.[2]?.scheduledTime?.en}`;
    case 'REMIND_CHECK_OUT':
      return `Hi, ${data?.args?.[0]?.customerName?.en}. Just reminding you about your booking will be end in  ${data?.args?.[1]?.inMinute?.en} minutes at ${data?.args?.[2]?.scheduledTime?.en}`;
    case 'COMPLETED_BOOKING':
      return `Your Booking ${data?.args?.[0]?.packageName?.en} at ${data?.args?.[1]?.locationName?.en} has been completed`;
    case 'CREATE_BOOKING_ADMIN':
      return `Your Booking ${data?.args?.[0]?.packageName?.en} has been created by Admin`;
    case 'COMPLETED_INCIDENT_REPORT':
      return `Your incident report about ${data?.args?.[0]?.incidentType?.en} has been completed`;
    case 'NEW_MESSAGE':
      return `You have a new message from ${data?.location?.name}. Reply Now?`;
    case 'EVENT':
      return `${data?.args?.[0]?.eventName?.en} organized by ${data?.args?.[1]?.createdBy} is gonna happen in ${data?.args?.[2]?.dateTime}`;
    default:
      return 'New Notification';
  }
};

messaging.onBackgroundMessage(payload => {
  const promiseChain = clients
    .matchAll({
      type: 'window',
      includeUncontrolled: true,
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      const data = JSON.parse(payload?.data?.payload);
      const type = payload?.data?.type;
      const redirectUrl = handleRedirectNotification(type, data);
      const options = {
        body: notificationBody(type, data),
        icon: '/src/assets/images/logo.png',
        actions: [{ action: redirectUrl, title: 'View' }],
      };
      return self.registration.showNotification('TPBank White Label Web', options);
    });
  return promiseChain;
});

self.onnotificationclick = function (event) {
  event.notification.close();

  event.waitUntil(
    clients
      .matchAll({
        type: 'window',
      })
      .then(function (clientList) {
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];
          if (client.url == '/' && 'focus' in client) return client.focus();
        }
        if (clients.openWindow)
          return clients.openWindow(
            event?.notification?.actions?.[0]?.action ?? event?.action,
          );
      }),
  );
};
