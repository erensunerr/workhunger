import React from 'react';


export default function FeatureSection(props) {
  const {
    title, imgSrc, imgAlt, description
  } = props;
  return (
    <div className="min-w-full mt-16 flex flex-wrap">
      <h2 className="text-4xl font-bold text-gray-900 min-w-full">{title}</h2>
      <img src={imgSrc} alt={imgAlt} className="mt-8 mx-auto xl:mx-0"/>
      <p className="max-w-prose mt-8 mx-auto xl:my-auto lg:max-w-[45ch] text-gray-900 xl:ml-16">
        {description}
      </p>
    </div>
  )
}
