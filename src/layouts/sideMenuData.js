export default [
  {
    id: "1",
    label: "Home",
    icon: "pie-chart",
    path: "/index"
  },
  {
    id: "2",
    label: "Users",
    icon: "pie-chart",
    children: [
      {
        id: "21",
        label: "Tom",
        path: "/users"
      }
    ]
  },
  {
    id: "3",
    label: "Products",
    icon: "pie-chart",
    children: [
      {
        id: "31",
        label: "Tom",
        path: "user/2"
      }
    ]
  }
];
