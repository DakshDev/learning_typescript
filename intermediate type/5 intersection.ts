// Intersection for type define
// (inheritance using & operator se hota ha)

type user = {
  name: string;
  email?: string;
};
type admin = user & {
  perms?: string;
  isAdmin?: boolean;
};
function AdminDetail(data: admin): void {
  data.isAdmin = true;
}

AdminDetail({ name: "dksh" });
