// Public (can edit anywhere)
// Private (can edit only main class where is located)
// Protected (can edit sub-classes which are extends)
// readonly (can not edit)
// static (get static value without new keyword)

(() => {
  // User
  class User {
    constructor(
      protected name: string,
      public readonly email: string,
      public age: number
    ) {}
  }

  // Admin
  class Admin extends User {
    static getTime: number = Date.now();
    defaultVar: string = "For Default Data"; // Default
    constructor(
      name: string,
      email: string,
      age: number,
      public fullAccess: boolean,
      public profession: string,
      public departmant: string
    ) {
      super(name, email, age);
    }

    changeName(name: string) {
      this.name = name;
    }
  }

  const u1 = new Admin(
    "daksh",
    "user12345@gmail.com",
    17,
    true,
    "it guy",
    "second"
  );
  u1.changeName("Hello");
})();
