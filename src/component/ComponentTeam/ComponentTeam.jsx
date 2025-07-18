import React from 'react'

const ComponentTeam = () => {
  const Component = [

    {
      image: '/public/image3/image1.jpg',
      job: 'Designer',
      name: 'Behzad Pashaei',
    },

    {
      image: '/public/image3/image2.jpg',
      job: 'Programmer',
      name: 'Cassie Evans',
    },

    {
      image: '/public/image3/image3.jpg',
      job: 'Marketing',
      name: 'Louis Hoebregts',
    },

    {
      image: '/public/image3/image4.jpg',
      job: 'Administrative',
      name: 'Patricia',
    },

    {
      image: '/public/image3/image5.jpg',
      job: 'CEO',
      name: 'James Hoebregts',
    },

    {
      image: '/public/image3/image6.jpg',
      job: 'Financial',
      name: 'Jon Kantner',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center  mb-16">
      <div className="flex-row">

        <h2 className="text-xl font-semibold"><span className="bg-red-600 text-red-600 rounded-full text-sm">*</span> Mega News Team</h2>
        <div className="flex flex-wrap gap-4 justify-center">

          {/* card */}
          {Component.map((data, index) => (
            <div key={index} className="bg-white w-[180px] rounded-2xl shadow-lg pt-8 flex flex-col items-center">
              <img src={data.image} className="w-[90px] h-[90px] rounded-xl object-cover mb-4" />
              <div className="text-[12px] text-gray-500 mb-4">{data.job}</div>
              <div className="w-full text-center rounded-xl py-2 bg-gray-100 from-gray-100 text-[15px]">{data.name}</div>
            </div>

          ))}

        </div>
      </div>
    </div>
  )
}

export default ComponentTeam;