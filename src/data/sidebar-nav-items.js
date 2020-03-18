export default function() {
  return [
    {
      title: "Dashboard",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    // {
    //   title: "Blog Posts",
    //   htmlBefore: '<i class="material-icons">vertical_split</i>',
    //   to: "/blog-posts",
    // },
    // {
    //   title: "Forms & Components",
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   to: "/components-overview",
    // },
    {
      title: "Data Pasal",
      htmlBefore: '<i class="material-icons">book</i>',
      to: "/data-pasal",
    },
    {
      title: "Data Siswa",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/data-siswa",
    },
    {
      title: "Tambah Admin",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/data-admin",
    },
    {
      title: "Profil",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/profil",
    },
    // {
    //   title: "Lala",
    //   htmlBefore: '<i class="material-icons">person</i>',
    //   to: "/daftar-kelas",
    // },
    // {
    //   title: "Login",
    //   htmlBefore: '<i class="material-icons">person</i>',
    //   to: "/login",
    // },
  ];
}
