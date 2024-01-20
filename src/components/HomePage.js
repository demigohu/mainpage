import React from "react"
import Link from "next/link"
import Image from "next/image"
import img from "@/../public/a.jpg"

const Portofolio = [
  {
    id: 1,
    title: "Website Profile",
    link: "github.com",
    description:
      "dengan menggunakan tech next js di sisi front end serta tailwind css untuk styling, saya berhasil membuat website profile saya",
  },
  {
    id: 2,
    title: "Website Profile",
    link: "github.com",
    description:
      "dengan menggunakan tech next js di sisi front end serta tailwind css untuk styling, saya berhasil membuat website profile saya",
  },
  {
    id: 3,
    title: "Website Profile",
    link: "github.com",
    description:
      "dengan menggunakan tech next js di sisi front end serta tailwind css untuk styling, saya berhasil membuat website profile saya",
  },
  {
    id: 4,
    title: "Website Profile",
    link: "github.com",
    description:
      "dengan menggunakan tech next js di sisi front end serta tailwind css untuk styling, saya berhasil membuat website profile saya",
  },
  {
    id: 5,
    title: "Website Profile",
    link: "github.com",
    description:
      "dengan menggunakan tech next js di sisi front end serta tailwind css untuk styling, saya berhasil membuat website profile saya",
  },
]

const HomePage = () => {
  return (
    <div className="pb-20">
      <h1 className="text-3xl text-center mb-16 font-bold">MY PORTOFOLIO</h1>
      <div className="grid grid-cols-3 gap-10">
        {Portofolio.map((value) => (
          <div key={value.id} className="card bg-[#f0f0f0] shadow-xl">
            <figure className="h-64">
              <Image
                src={img}
                alt="Shoes"
                width={0}
                height={0}
                className="w-full h-full block object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{value.title}</h2>
              <Link href={"/"} className="text-sky-700">
                {value.link}
              </Link>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
