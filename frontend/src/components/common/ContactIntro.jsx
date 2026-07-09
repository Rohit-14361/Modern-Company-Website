import React from "react";
import CTAButton from '../common/CTAButton'

function ContactIntro() {
  return (
    <div className="justify-between items-center mx-16 border px-4 h-40 py-8 rounded-md border-gray-40 text-gray-300 mt-16 mb-16  bg-gray-700 w-full flex flex-row">
      {/* left section */}
      <div className="flex items-center flex-col justify-between gap-y-5">
        <p className="text-left text-4xl">Ready to Transform Your Digital Presence?</p>
        <p className="text-xl text-left  text-gray-500">
          Let’s collaborate to create innovative solutions that drive your
          business forward.
        </p>
      </div>
      {/* right section */}
      <div className="pr-8">
        <CTAButton text={'Get in Touch'}/>
      </div>
    </div>
  );
}

export default ContactIntro;
