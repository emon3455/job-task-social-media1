
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
        path: "/collectionTwo/room1",
        title: "Room Name One",
      },
      {
        path: "/collectionTwo/room2",
        title: "Room Name Two",
      },
      {
        path: "/collectionTwo/room3",
        title: "Room Name Three",
      },
    ],
  },
  {
    title: "Collection Name Three",
    nestedRoutes: [
      {
        path: "/collectionThree/room1",
        title: "Room Name One",
      },
      {
        path: "/collectionThree/room2",
        title: "Room Name Two",
      },
      {
        path: "/collectionThree/room3",
        title: "Room Name Three",
      },
    ],
  },
];

export default sideNavLink;