import Image from "next/image";
import HeroBg from "../../public/hero-bg.jpg";
import { ArrowRight, CheckCheck, PawPrint } from "lucide-react";
import Button from "@/components/ui/buttton";
import StatsSection from "@/components/StatsSection";
import { FaCat, FaDog, FaFrog } from "react-icons/fa6";
import { FaFish } from "react-icons/fa";
import { GiHummingbird, GiReptileTail } from "react-icons/gi";

import SafeCare from "../../public/safe-care.jpg";
import { cn } from "@/lib/utils";
import FAQ from "@/components/FAQ";
import SitterFindingModal from "@/components/SitterFindingModal/SitterFindingModal";
import services from "@/data/services";
import sitterBookingProcess from "@/data/sitterBookingProcess";

const petCategories = [
  { name: "Dogs", icon: <FaDog size={24} className="text-blue-500" /> },
  { name: "Cats", icon: <FaCat size={24} className="text-blue-500" /> },
  { name: "Fish", icon: <FaFish size={24} className="text-blue-500" /> },
  { name: "Birds", icon: <GiHummingbird size={24} className="text-blue-500" /> },
  { name: "Reptiles", icon: <GiReptileTail size={24} className="text-blue-500" /> },
  { name: "Others", icon: <FaFrog size={24} className="text-blue-500" /> },
];

export default function Home() {
  return (
    <>
      <section className="relative w-full flex lg:flex-row flex-col gap-5 justify-between items-center px-container lg:mr-0 lg:-mt-[4rem]  *:w-full  lg:pr-0">
        <div className="z-10 mt-3 lg:mt-0 relative flex flex-col justify-center items-center lg:justify-between lg:items-start lg:w-[40%] h-auto lg:h-[90vh]">
          <div className="lg:mt-10">
            <h1 className="text-4xl md:text-5xl lg:text-7xl tracking-tight text-center lg:text-start font-sofia-medium">
              Your Pets Deserve the Best, and We're Here to Provide It!
            </h1>
            <p className="section-subtitle">
              Whether you need a reliable pet sitter, grooming services, or premium pet food, we've got you covered. Our
              team of experienced professionals is dedicated to ensuring your pets receive the best care possible.
            </p>

            <div className="flex items-center sm:justify-center lg:justify-start sm:flex-row flex-col gap-2 sm:gap-5 lg:gap-2 xl:gap-5">
              <SitterFindingModal color="primary" className="w-full sm:w-[220px]  h-12">
                Book a Sitter Now <PawPrint />
              </SitterFindingModal>
              <Button className="bg-transparent hover:bg-gray-100 border w-full sm:w-[220px] lg:w-[200px] xl:w-[220px]  h-12">
                Become a sitter <ArrowRight strokeWidth={1} />
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex w-full">
            <StatsSection />
          </div>
        </div>
        {/* BG Image */}
        <div className="h-auto lg:h-[100vh] lg:w-[60%]">
          <Image
            src={HeroBg}
            alt="hero-bg"
            sizes="70vw"
            width={500}
            height={500}
            className="h-full rounded-xl object-cover object-top pointer-events-none select-none w-full"
            priority
            placeholder="blur"
          />
        </div>

        <div className="flex lg:hidden w-full">
          <StatsSection />
        </div>
      </section>

      <section className="py-gap">
        <div className="w-full lg:w-[80%] xl:w-[70%] flex flex-col items-center px-container mx-auto">
          <h2 className="section-title">How to Book a Pet Sitter</h2>
          <p className="section-subtitle">A simple process to connect you with the perfect sitter for your pet.</p>

          <div>
            {sitterBookingProcess.map((process, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-5 md:gap-10 my-2.5 md:my-5">
                <Image
                  src={process.image}
                  alt={process.title}
                  width={500}
                  height={500}
                  sizes="70vw"
                  placeholder="blur"
                  className={cn("w-full md:w-1/2 rounded-xl object-cover order-1", i == 1 && "md:order-2")}
                />
                <div className={cn("order-2", i == 1 && "md:order-1")}>
                  <div
                    className={cn(
                      "sitterBookingProcess-title !text-start flex items-center gap-2",
                      i == 1 && "md:!text-end"
                    )}
                  >
                    <span className="size-10 text-blue-500 lg:size-11 bg-blue-100 rounded-xl flex justify-center items-center">
                      {i + 1}
                    </span>
                    <h3>{process.title}</h3>
                  </div>
                  <p className={cn("section-subtitle !text-start", i == 1 && "md:!text-end")}>{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 w-full  flex justify-center items-center flex-col gap-2 mt-2">
        <div className="px-container w-full mx-auto py-8">
          <h2 className="section-title">What kind of pets do you have?</h2>
          <p className="section-subtitle">
            Find out why [brand name] could be the best pet care choice for you and your pets.
          </p>

          <div className="w-full flex max-w-[1088px] mx-auto flex-row flex-wrap items-center justify-center gap-2 md:gap-4 ">
            {petCategories.map((pet, i) => (
              <div
                key={i}
                className="w-full  md:max-w-[400px] bg-white hover:bg-gray-50 h-14 cursor-pointer rounded-xl flex justify-between items-center p-5 "
              >
                <span>{pet.icon}</span>
                <span className="text-blue-500 font-sofia-regular">{pet.name}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-2 md:mt-4">
            <SitterFindingModal color="primary" className="w-full sm:w-[250px]  h-12">
              Book a Sitter Now <PawPrint />
            </SitterFindingModal>
          </div>
        </div>
      </section>

      <section className="py-gap">
        <div className="w-full lg:w-[80%] xl:w-[70%] flex flex-col items-center px-container mx-auto">
          <h2 className="section-title mb-8">Love and Care When You’re Not There!</h2>
          {/* <p className="section-subtitle">A simple process to connect you with the perfect sitter for your pet.</p> */}

          <div className="w-full flex max-w-[1088px] mx-auto flex-row flex-wrap items-center justify-center gap-2 md:gap-3 ">
            {services.map((service, i) => (
              <div key={i} className="w-full md:max-w-[400px] rounded-xl flex justify-between items-center ">
                <div>
                  <div className={cn("text-2xl flex items-center gap-2")}>
                    <span className="size-9 p-3 text-blue-500 text-lg bg-blue-100 rounded-lg flex justify-center items-center">
                      {service.icon}
                    </span>
                    <div>{service.title}</div>
                  </div>
                  <p className={cn("section-subtitle !text-start")}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-container">
        <div className="w-full max-w-[1088px] mx-auto  flex items-center justify-between md:flex-row flex-col gap-3">
          <div className="order-2 md:order-1">
            <h3 className="sitterBookingProcess-title !text-start">Trustworthy & Safe Care</h3>
            <ul className="font-sofia-extralight  *:ms-1 *:*:text-lg *:flex *:items-start *:gap-2 *:w-full *:my-3">
              <li>
                <CheckCheck className="text-blue-500" />
                <span className="w-full">Every sitter’s identity is thoroughly verified for your peace of mind.</span>
              </li>
              <li>
                <CheckCheck className="text-blue-500" />
                <span className="w-full">Read honest reviews from pet owners who’ve booked them before.</span>
              </li>
              <li>
                <CheckCheck className="text-blue-500" />
                <span className="w-full">Easily filter sitters with police checks to ensure extra safety.</span>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-[550px] order-1 md:order-2">
            <Image
              src={SafeCare}
              alt={"SafeCare"}
              width={500}
              height={500}
              sizes="70vw"
              placeholder="blur"
              quality={70}
              className={cn("w-full aspect-[3/2]  rounded-xl object-cover")}
            />
          </div>
        </div>
      </section>

      {/* TODO: Testimonial section */}

      <section className="px-container py-gap">
        <FAQ />
      </section>
    </>
  );
}
