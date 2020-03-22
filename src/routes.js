import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";
import BlankLayout from "./layouts/blank"

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import Login from "./views/Login";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import DaftarKelas from "./views/DaftarKelas";
import DaftarSiswa from "./views/DaftarSiswa";
import DataAdmin from "./views/DataAdmin";
import DataLala from "./views/DataLala";
import AddAdmin from "./views/AddAdmin";
import DataAyat from "./views/DataAyat";
import AddSiswa from "./views/AddSiswa";
import AddKelas from "./views/AddKelas";
import AddBab from "./views/AddBab";
import AddPasal from "./views/AddPasal";
import AddAyat from "./views/AddAyat";
import Riwayat from "./views/RiwayatPelanggaran";
import DetailRiwayat from "./views/DetailRiwayat";
import LaporPrestasi from "./views/LaporPrestasi";
import DaftarPoint from "./views/DaftarPoint";
import Kategori from "./views/Kategori";
import DetailKategori from "./views/DetailKategori";
import AddDetailKategori from "./views/AddDetailKategori";
export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard" />
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/profil",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-admin/:id",
    layout: DefaultLayout,
    component: AddAdmin
  },
  {
    path: "/data-admin",
    layout: DefaultLayout,
    component: DataAdmin
  },
  {
    path: "/tambah-admin",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/data-pasal",
    layout: DefaultLayout,
    component: Errors
  },
  // {
  //   path: "/components-overview",
  //   layout: DefaultLayout,
  //   component: ComponentsOverview
  // },
  {
    path: "/data-siswa",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/login",
    layout: BlankLayout,
    component: Login
  },
  {
    path: "/daftar-kelas",
    layout: DefaultLayout,
    component: DaftarKelas
  },
  {
    path: "/daftar-siswa",
    layout: DefaultLayout,
    component: DaftarSiswa
  },
  {
    path: "/data-lala",
    layout: DefaultLayout,
    component: DataLala
  },
  {
    path: "/data-ayat",
    layout: DefaultLayout,
    component: DataAyat
  },
  {
    path: "/add-siswa",
    layout: DefaultLayout,
    component: AddSiswa
  },
  {
    path: "/add-kelas",
    layout: DefaultLayout,
    component: AddKelas
  },
  {
    path: "/add-bab",
    layout: DefaultLayout,
    component: AddBab
  },
  {
    path: "/add-pasal",
    layout: DefaultLayout,
    component: AddPasal
  },
  {
    path: "/riwayat",
    layout: DefaultLayout,
    component: Riwayat
  },
  {
    path: "/detail-riwayat",
    layout: DefaultLayout,
    component: DetailRiwayat
  },
  {
    path: "/add-ayat",
    layout: DefaultLayout,
    component: AddAyat
  },
  {
    path: "/lapor-prestasi",
    layout: DefaultLayout,
    component: LaporPrestasi
  },
  {
    path: "/daftar-point",
    layout: DefaultLayout,
    component: DaftarPoint
  },
  {
    path: "/kategori",
    layout: DefaultLayout,
    component: Kategori
  },
  {
    path: "/detail-kategori",
    layout: DefaultLayout,
    component: DetailKategori
  },
  {
    path: "/add-detail-kategori",
    layout: DefaultLayout,
    component: AddDetailKategori
  },
];
