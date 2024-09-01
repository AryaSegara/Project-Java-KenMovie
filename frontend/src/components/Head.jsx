/* eslint-disable react/prop-types */
export default function Head({title}) {
  return (
    <div className="w-full bg-dryGray lg:h-64 relative overflowh-hidden rounded-md">
      <img
        src="/images/about1.jpg"
        alt="aboutus"
        className="w-full h-full object-cover"
      />

      <div className="absolute lg:top-24 top-16 w-full flex-colo">
        <h1 className="text-5xl lg:text-h1 text-white text-center font-bold font-sans">
            {title && title}
        </h1>
      </div>
    </div>
  );
}
