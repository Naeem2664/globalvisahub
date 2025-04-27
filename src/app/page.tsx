import TopAdSection from "@/components/TopAdSection";
import HeroSection from "@/components/HeroSection";
import React from "react";
import { Button } from "@headlessui/react";
import Link from "next/link";
import BottomAdSection from "@/components/BottomAdSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Visa Hub | Visa Information & Services",
  description: "Find updated visa requirements, application support, and travel guides for every country. Travel the world confidently with Global Visa Hub.",
  keywords: [
    "visa information", 
    "travel visa", 
    "visa services", 
    "visa requirements", 
    "visa application", 
    "tourist visa", 
    "student visa", 
    "work visa", 
    "global visa hub",
    "visa verification",
    "travel documents"
  ],
  openGraph: {
    title: "Global Visa Hub",
    description: "Your trusted partner for global visa information and support.",
    url: "https://globalvisahub.com",
    siteName: "Global Visa Hub",
    locale: "en_US",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <HeroSection />
      <TopAdSection />
      <div className="grid xl:w-[1250px] lg:w-[1000px] md:w-[850px] sm:w-[700px] w-[470px] px-auto mx-auto px-6 md:px-20 py-10 bg-cover bg-center relative overflow-hidden]">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800 mb-6">
          Find the Best Visa Information for Your Travel Needs
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Explore comprehensive, up-to-date, and accurate visa information for
          every country. From visa requirements to expert advice, we&apos;ve got
          you covered for your travel journey.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Visa Requirements for All Countries at Your Fingertips
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Get the latest visa information and requirements for every
          destination. Understand the types of visas you need, from tourist to
          work visas, and everything in between. Whether you&apos;re visiting
          for business, study, tourism, or work, we provide detailed and
          accurate information to help you plan your travels.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Expert Visa Application Support and Guidance
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Need help with the visa application process? Our experts provide
          step-by-step guidance to ensure you submit all the necessary documents
          and information on time. Get personalized assistance with visa forms,
          documents, and application submission to ensure smooth processing for
          your trip.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Global Visa Services: Travel the World with Confidence
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Whether you&apos;re traveling for business or leisure, we provide a
          seamless experience to secure the right visa for your needs. Our
          global visa services cover a wide range of visa categories, including
          tourist, student, work, transit, and immigration visas. Traveling
          abroad is easier when you have expert support guiding you through
          every step.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Fast and Reliable Visa Processing with Trusted Experts
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Get your visa processed faster with our trusted, efficient, and
          reliable visa processing services. We work with the most reputable
          authorities to ensure your visa application is processed as quickly as
          possible, minimizing delays and hassles.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Visa Information for All Major Destinations
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Looking to visit the United States, Canada, the UK, Australia, or
          other popular travel destinations? We provide specific visa
          requirements for all major countries, so you know exactly what you
          need for your trip. Don&apos;t waste time searching for information;
          we have it all right here!
        </p>
        <BottomAdSection />

        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Visa Tips for a Smooth Travel Experience
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Traveling to a new country? Check out our expert tips for a smooth
          visa experience. From filling out forms correctly to submitting
          supporting documents, we share helpful advice on how to avoid common
          mistakes and speed up your visa approval.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Stay Updated with the Latest Visa News and Changes
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Visa policies are constantly evolving. Stay informed with our
          regularly updated news section, where we share the latest changes to
          visa regulations, embassy procedures, and travel advisories.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Comprehensive Guide to Visa Types for All Travelers
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Whether you’re applying for a student visa, tourist visa, or work
          visa, our comprehensive guide will help you understand the various
          types of visas available. We also offer advice on which visa is right
          for your specific situation, making it easier to choose the correct
          one.
        </p>

        <Link href={"https://moffa.jvvisa.com/visa.php"}>
          <Button
            type="button"
            className="cursor-pointer bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded w-[200px]"
          >
            Get Visa Info
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
