import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtomCount",
  default: 102,
});

export const jobsAtom = atom({
  key: "JobsAtomCount",
  default: 33,
});

export const notificationAtom = atom({
  key: "notificationAtomCount",
  default: 17,
});

export const messagingAtom = atom({
  key: "messagingAtomCount",
  default: 7,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const JobsAtomCount = get(jobsAtom);
    const notificationAtomCount = get(notificationAtom);
    const messagingAtomCount = get(messagingAtom);
    return (
      networkAtomCount +
      JobsAtomCount +
      notificationAtomCount +
      messagingAtomCount
    );
  },
});

// Another optimized approach for the above code
// export const notifications = atom({
//   key: "networkAtom",
//   default: {
//     network: 4,
//     jobs: 6,
//     messaging: 3,
//     notifications: 3,
//   },
// });

// export const totalNotificationSelector = selector({
//   key: "totalNotificationSelector",
//   get: ({ get }) => {
//     const allNotifications = get(notifications);
//     return (
//       allNotifications.network +
//       allNotifications.jobs +
//       allNotifications.notifications +
//       allNotifications.messaging
//     );
//   },
// });
