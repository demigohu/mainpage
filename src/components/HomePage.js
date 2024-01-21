import React from "react"
import Link from "next/link"
import Image from "next/image"
import img from "@/../public/a.jpg"
import ovrs from "@/../public/ovrs.png"
import vote from "@/../public/vote.png"
import health from "@/../public/health.png"

const Portofolio = [
  {
    id: 1,
    title: "Ovrscription",
    link: "https://inscription.overgear.xyz",
    img: ovrs,
    description:
      "You can deploy inscription, mint inscription, and mint first inscription ovrs",
  },
  {
    id: 2,
    title: "Over Vote",
    link: "https://voting.overgear.xyz/",
    img: vote,
    description:
      "You can make proposals, and vote on existing proposals",
  },
  {
    id: 3,
    title: "Health Gear",
    link: "https://health.overgear.xyz/",
    img: health,
    description:
      "You can, submit your medical record and give permission for your medical record to a health service that you trust",
  },
]

const HomePage = () => {
  return (
    <div className="pb-20 text-black">
      <h1 className="text-3xl text-center mb-16 font-bold">Overgear Ecosystem</h1>
      <div className="grid grid-cols-3 gap-10">
        {Portofolio.map((value) => (
          <div key={value.id} className="card bg-[#f0f0f0] shadow-xl">
            <figure className="h-64">
              <Image
                src={value.img}
                alt="Web"
                width={0}
                height={0}
                className="w-full h-full block object-cover p-5"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{value.title}</h2>
              <Link href={value.link} className="text-sky-700">
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
