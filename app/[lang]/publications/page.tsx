'use client';

import {
  HexagonDottedBackground,
  PhoneHeader,
} from '@/app/assets/images/publications/index';
import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import { useState } from 'react';
import { getDictionary } from '../../dictionaries';
import PublicationCard from './PublicationCard';
import ShareYourCoughModal from './ShareYourCoughModal';

const PublicationsPage = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const {
    publications: { publicationsSection, publicationsCards, coughSection },
  } = getDictionary(lang);

  const [isShareYourCoughModalOpen, setIsShareYourCoughModalOpen] =
    useState(false);

  return (
    <div className="relative -top-24">
      {/* Hero Section */}
      <section>
        {/* Hero Container */}
        <div className="relative bg-gradient-to-b from-black to-[#162b4c]">
          <ExportedImage
            src={PhoneHeader}
            className="absolute h-full w-full object-cover opacity-40"
            alt=""
            priority
            basePath={basePath}
          />

          {/* Text Container */}
          <div className="mx-auto flex max-w-xl flex-col items-center justify-center space-y-8 px-10 pt-64 pb-40 text-center font-medium opacity-95">
            <h1 className="text-4xl text-green-500 sm:text-5xl">
              {publicationsSection.title}
            </h1>
            {publicationsSection.texts.map((text, i) => (
              <p key={i} className="text-white">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Overlay Container */}
      <div className="relative -mb-24 bg-gradient-to-b from-[#162b4c] to-[#3468b2]">
        <ExportedImage
          src={HexagonDottedBackground}
          className="absolute h-full w-full object-cover opacity-30"
          alt=""
          priority
          basePath={basePath}
        />

        {/* Publications Section */}
        <section>
          {/* Cards Container */}
          <div className="relative flex flex-col items-center justify-center space-y-8 px-10 pt-28">
            {publicationsCards.map((publication, i) => (
              <div
                key={i}
                className="space-y-4 rounded-xl bg-[#00000060] px-10 py-8 text-left text-white sm:px-16 md:w-[700px] md:space-y-5"
              >
                <PublicationCard {...publication} />
              </div>
            ))}
          </div>
        </section>

        {/* Share Your Cough Section */}
        <section>
          {/* Share Your Cough Container */}
          <div className="relative mx-auto max-w-4xl space-y-24 px-8 py-40 text-center font-medium text-white md:space-y-14">
            <h2 className="text-4xl leading-normal md:leading-relaxed">
              {coughSection.title}
            </h2>

            <button
              className="rounded-full bg-gradient-to-b from-[#38b76b] to-[#3578de] p-6 text-xl font-medium sm:px-8 sm:text-2xl md:py-4 md:px-8 md:text-lg"
              onClick={() => setIsShareYourCoughModalOpen(true)}
            >
              {coughSection.linkText}
            </button>
          </div>
        </section>
      </div>

      {/* Share Your Cough Modal */}
      <ShareYourCoughModal
        isOpen={isShareYourCoughModalOpen}
        handleClose={() => setIsShareYourCoughModalOpen(false)}
        lang={lang}
      />
    </div>
  );
};

export default PublicationsPage;