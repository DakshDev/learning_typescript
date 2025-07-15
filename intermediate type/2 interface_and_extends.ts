// Interface for type define
// (inheritance using extend keyword)

(() => {
  interface user {
    name: string;
    gender?: string;
    skills: (string | number)[];
  }

  interface admin extends user {
    isAdmin: boolean;
  }

  function userDetails(userObj: admin) {
    // interfac give you a blue print of object keys and value
    let { name, skills, gender, isAdmin } = userObj;
  }

  userDetails({
    name: "jhon doe",
    // gender: true,
    skills: ["js", "html", 2007],
    isAdmin: true,
  });
})();
