import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { BodyBackground, FluHeaderBackground } from '@/public/images/diseases';
import ExportedImage from 'next-image-export-optimizer';
import DiseasesNavbar from '../components/DiseasesNavbar';

const FluPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div className="relative">
      {/* Header/Hero Section */}
      <section className="-mt-24">
        <div className="relative bg-gradient-to-b from-black to-[#162b4c]">
          <ExportedImage
            className="absolute h-full w-full object-cover opacity-30"
            src={FluHeaderBackground}
            alt=""
            width={1512}
            height={798}
            priority
            basePath={basePath}
          />

          {/* Text Container */}
          <div className="relative flex flex-col items-center justify-center h-[300px] md:h-[650px]">
            {/* Sizing & Spacing Container */}
            <div className="max-w-xl px-8 text-center font-medium text-white md:max-w-4xl">
              <h1 className="md:text-4xl text-2xl font-large leading-loose md:leading-normal">
                FLU
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Section with Body Background Image */}
      <section
        style={{
          backgroundImage: `url(${BodyBackground.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '2770px', // Set the minimum height to match the image dimensions
        }}
        className="relative min-h-screen"
      >
        {/* Gradient Overlay Container */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#162b4c] to-[#3468b2] opacity-70"></div>

        {/* Content Container */}
        <div className="relative z-10">
          <DiseasesNavbar lang={lang} />
          <div className="text-left px-10 text-white mt-8">
            <p className="md:text-2xl text-xl">Information coming soon.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FluPage;