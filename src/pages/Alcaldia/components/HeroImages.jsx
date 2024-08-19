/**
 * @component   : HeroImages
 * @author      : ale (ale@ale)
 * @created     : domingo ago 18, 2024 15:29:49 -04
 * @description : HeroImages
 */
import React from 'react';

// Define el componente HeroImages
const HeroImages = ({ variant, title, subtitle, imageUrl }) => {
  // Define una función para renderizar el estilo y el contenido de cada variante
  const renderHeroContent = () => {
    switch (variant) {
      case 1:
        return (
          <div className="absolute inset-0 flex items-end justify-center pb-8 bg-gradient-to-t from-black via-transparent to-transparent">
            <div className="px-6 py-8 mb-8 text-center text-white bg-black rounded-lg bg-opacity-50">
              <h1 className="mb-4 text-4xl font-bold">{title}</h1>
              <p className="text-xl">{subtitle}</p>
            </div>
          </div>
        );
      case 2:
        return (
          <>
            <div className="flex items-center justify-center w-1/2 h-full bg-black bg-opacity-50">
              <div className="px-6 py-8 text-center text-white">
                <h1 className="mb-4 text-4xl font-bold">{title}</h1>
                <p className="text-xl">{subtitle}</p>
              </div>
            </div>
            <div className="w-1/2 h-full bg-black bg-opacity-50"></div>
          </>
        );
      case 3:
        return (
          <div className="absolute inset-0 flex items-start justify-center pt-12 bg-black bg-opacity-50">
            <div className="px-6 py-8 mt-12 text-center text-white bg-black rounded-lg bg-opacity-60">
              <h1 className="mb-4 text-4xl font-bold">{title}</h1>
              <p className="text-xl">{subtitle}</p>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="px-6 py-8 text-center text-white bg-black rounded-lg bg-opacity-60">
              <h1 className="mb-4 text-4xl font-bold">{title}</h1>
              <p className="text-xl">{subtitle}</p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
            <div className="px-6 py-8 text-center text-white bg-black rounded-lg bg-opacity-60">
              <h1 className="mb-4 text-4xl font-bold">{title}</h1>
              <p className="text-xl">{subtitle}</p>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="px-6 py-8 text-center text-white bg-black border-4 border-white rounded-lg bg-opacity-60">
              <h1 className="mb-4 text-4xl font-bold">{title}</h1>
              <p className="text-xl">{subtitle}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      className={`relative h-96 bg-cover bg-center bg-no-repeat ${imageUrl}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {renderHeroContent()}
    </section>
  );
};

export default HeroImages;

