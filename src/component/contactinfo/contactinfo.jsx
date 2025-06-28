import React from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlinePrinter, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi';

const contactDetails = [
  {
    icon: <HiOutlineMail className="w-6 h-6 text-gray-500" />,
    label: "Email",
    value: "Management@Mega.News"
  },
  {
    icon: <HiOutlinePhone className="w-6 h-6 text-gray-500" />,
    label: "Phone Number",
    value: "+1(234) 567-8910"
  },
  {
    icon: <HiOutlinePrinter className="w-6 h-6 text-gray-500" />,
    label: "Fax",
    value: "+1(234) 567-8910"
  },
  {
    icon: <HiOutlineLocationMarker className="w-6 h-6 text-gray-500" />,
    label: "Address",
    value: "123 Foxrun St, New Lenox, IL 123456"
  }
];

function ContactInfo() {
  return (
    // Section utama dengan latar belakang abu-abu sangat muda
    <section className="bg-gray-50 py-12">
      {/* Wadah utama yang berada di tengah halaman dengan lebar maksimum */}
      <div className="max-w-screen-xl mx-auto p-8 bg-white rounded-2xl shadow-sm">
        {/*2 kolom di layar besar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* PETA */}
          <div className="rounded-3xl overflow-hidden w-[1076px]h-[361px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15889.411221290267!2d105.3045847848196!3d-5.363031199938851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c35634c1a611%3A0xcb3cf692dbb4f26!2sInstitut%20Teknologi%20Sumatera!5e0!3m2!1sen!2sid!4v1751096885104!5m2!1sen!2sid"
              width="1076px"
              height="361px"
              style={{ border: 4 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>

          {/*  INFORMASI */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              <span className="text-red-500 mr-2">•</span>
              Mega News Information
            </h2>
            
            {/* Daftar informasi kontak */}
            <div className="space-y-6">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">{item.label}</p>
                    <p className="text-base text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/*bagian bawah */}
            <div className="mt-8 inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
              <HiOutlineClock className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-700">Responding 24 Hours A Day, 7 Days A Week</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactInfo;