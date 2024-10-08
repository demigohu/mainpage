import React from "react"
import Link from "next/link"
import Image from "next/image"
import img from "@/../public/a.jpg"
import ovrs from "@/../public/ovrs.png"
import vote from "@/../public/vote.png"
import health from "@/../public/health.png"
import note from "@/../public/note.png"
import explorer from "@/../public/explorer.png"

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
    title: "Health Gear",
    link: "https://health.overgear.xyz/",
    img: health,
    description:
      "You can, submit your medical record and give permission for your medical record to a health service that you trust",
  },
  {
    id: 3,
    title: "Over Vote",
    link: "https://voting.overgear.xyz/",
    img: vote,
    description: "You can make proposals, and vote on existing proposals",
  },
  {
    id: 4,
    title: "Note Gear",
    link: "https://notes.overgear.xyz/",
    img: note,
    description:
      "Notes Gear allows users to store and manage their personal notes in a decentralized manner. Each record has a title, description. Users can add new notes and view a list of their notes",
  },
  {
    id: 5,
    title: "Explorer Gear",
    link: "https://explorer.overgear.xyz/",
    img: explorer,
    description: "You Can Check All Transaction On Overgear",
  },
]

const HomePage = () => {
  return (
    <div className="pb-20 text-black">
      <h1 className="text-3xl text-center mb-10 lg:mb-16 font-bold">
        Overgear Ecosystem
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-5">
        {Portofolio.map((value) => (
          <div key={value.id} className="card card_home shadow-xl">
            <figure className="hfull lg:h-72 overflow-hidden p-3 md:p-5">
              <Image
                src={value.img}
                alt="Web"
                width={0}
                height={0}
                className="w-full h-full block object-cover rounded-lg"
              />
            </figure>
            <div className="card-body p-4 lg:p-7 lg:pt-0">
              <h2 className="card-title">{value.title}</h2>
              <Link href={value.link} target="_blank" className="text-sky-700">
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
