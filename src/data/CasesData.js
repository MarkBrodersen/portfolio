import Landrup from "../assets/images/LandrupDans.png";

const casesData = {
  data: [
    {
      id: 1,
      link: "",
      image: Landrup,
      heading: "Landrup Dans - final exam",
      text: "Landrup Dans is a react application where you can register or deregister for dance lessons with age limit on certain lessons. You can also see what lessons you have register to with date and time.",
      loginText: "Here are diffrent logins with diffrent ages and roles",
      logins: [
        {
          role: "student",
          username: "user1",
          password: "1234",
          age: 14,
        },
        {
          role: "student",
          username: "user2",
          password: "1234",
          age: 17,
        },
        {
          role: "student",
          username: "user3",
          password: "1234",
          age: 21,
        },
        {
          role: "student",
          username: "user4",
          password: "1234",
          age: 24,
        },
        {
          role: "student",
          username: "user5",
          password: "1234",
          age: 52,
        },
        {
          role: "student",
          username: "user6",
          password: "1234",
          age: 51,
        },
        {
          role: "instructor",
          username: "instructor1",
          password: "1234",
          age: 24,
        },
        {
          role: "instructor",
          username: "instructor2",
          password: "1234",
          age: 32,
        },
        {
          role: "instructor",
          username: "instructor3",
          password: "1234",
          age: 27,
        },
        {
          role: "instructor",
          username: "instructor4",
          password: "1234",
          age: 31,
        },
      ],
    },
  ],
};

export default casesData;
