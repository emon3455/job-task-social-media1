
const sideNavLink = [
  {
    path: "/feed",
    title: "Feed",
  },
  {
    path: "/message",
    title: "Message",
  },
  {
    path: "/member",
    title: "Member",
  },
  {
    path: "/shop",
    title: "Shop",
  },
  {
    path: "/collection",
    title: "collection",
  },
  {
    title: "Collection Name One",
    nestedRoutes: [
      {
        path: "/collectionOne/room1",
        title: "Room Name One",
      },
      {
        path: "/collectionOne/room2",
        title: "Room Name Two",
      },
      {
        path: "/collectionOne/room3",
        title: "Room Name Three",
      },
    ],
  },
  {
    title: "Collection Name Two",
    nestedRoutes: [
      {
        path: "/",
        title: "Room Name One",
      },
      {
        path: "/",
        title: "Room Name Two",
      },
      {
        path: "/",
        title: "Room Name Three",
      },
    ],
  },
  {
    title: "Collection Name Three",
    nestedRoutes: [
      {
        path: "/",
        title: "Room Name One",
      },
      {
        path: "/",
        title: "Room Name Two",
      },
      {
        path: "/",
        title: "Room Name Three",
      },
    ],
  },
];

export default sideNavLink;