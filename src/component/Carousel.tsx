import { useState } from "react";

interface ICarouselProps {
  images: [];
}
const Carousel = (props: ICarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? props.images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === props.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative max-w-[500px] max-h-[500px] bg-blue-100 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {props.images.map((image: string, index: number) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="object-fit"
          />
        ))}
      </div>
      {/* 좌우 네비게이션 버튼 */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 -translate-y-1/2 p-4 bg-white shadow-lg hover:bg-gray-100"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 -translate-y-1/2 p-4 bg-white shadow-lg hover:bg-gray-100"
      >
        &#10095;
      </button>
      {/* 인디케이터 */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {props.images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-violet-300" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
