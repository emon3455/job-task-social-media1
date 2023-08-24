
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
        path: "/coollectionOne/room1",
        title: "Room Name One",
      },
      {
        path: "/coollectionOne/room2",
        title: "Room Name Two",
      },
      {
        path: "/coollectionOne/room3",
        title: "Room Name Three",
      },
    ],
  },
  {
    title: "Collection Name Two",
    nestedRoutes: [
      {
        path: "/coollectionTwo/room1",
        title: "Room Name One",
      },
      {
        path: "/coollectionTwo/room2",
        title: "Room Name Two",
      },
      {
        path: "/coollectionTwo/room3",
        title: "Room Name Three",
      },
    ],
  },
  {
    title: "Collection Name Three",
    nestedRoutes: [
      {
        path: "/coollectionThree/room1",
        title: "Room Name One",
      },
      {
        path: "/coollectionThree/room2",
        title: "Room Name Two",
      },
      {
        path: "/coollectionThree/room3",
        title: "Room Name Three",
      },
    ],
  },
];

export default sideNavLink;