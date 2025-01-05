import React from "react";

const HelpLine = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
              Helpline Numbers
            </h1>
    
            <div className="space-y-6">
              {/* State Helpline Numbers */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-blue-500">State Helpline Numbers</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <span className="text-lg font-medium">STATE HELPLINE NUMBER</span>
                    <a href="tel:1902" className="text-blue-600 hover:underline">1902</a>
                  </li>
                  <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <span className="text-lg font-medium">EMERGENCY MEDICAL SUPPORT</span>
                    <a href="tel:1049745697456" className="text-blue-600 hover:underline">104 / 97456 97456</a>
                  </li>
                  <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <span className="text-lg font-medium">DASOHA FOOD HELPLINE</span>
                    <a href="tel:155214" className="text-blue-600 hover:underline">155214</a>
                  </li>
                  <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <span className="text-lg font-medium">STATE COVID CONTROL ROOM</span>
                    <a href="tel:1075" className="text-blue-600 hover:underline">1075</a>, 
                    <a href="tel:08046848600" className="text-blue-600 hover:underline">080-46848600</a>, 
                    <a href="tel:08066692000" className="text-blue-600 hover:underline">080-66692000</a>, 
                    <a href="tel:9745697456" className="text-blue-600 hover:underline">9745697456</a>, 
                    <a href="tel:0801070" className="text-blue-600 hover:underline">080-1070 (SEOC)</a>
                 </li>
                </ul>
              </section>
    
              {/* Department Helpline Numbers */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-blue-500">Department Helpline Numbers</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <span className="text-lg font-medium">HEALTH & FAMILY WELFARE</span>
                    <a href="tel:104" className="text-blue-600 hover:underline">104</a>
                  </li>
                  <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <span className="text-lg font-medium">FOOD & CIVIL SUPPLIERS</span>
                    <a href="tel:1967180004259339" className="text-blue-600 hover:underline">1967 / 18000-425-9339</a>
                  </li>
                  <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <span className="text-lg font-medium">AGRICULTURE</span>
                    <a href="tel:08022212818" className="text-blue-600 hover:underline">080-22212818</a> / 
                    <a href="tel:08022210237" className="text-blue-600 hover:underline">080-22210237</a>
                  </li>
                  <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <span className="text-lg font-medium">PUBLIC GRIEVANCES</span>
                    <a href="tel:08044554455" className="text-blue-600 hover:underline">080-44554455</a>
                  </li>
                  <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <span className="text-lg font-medium">AMBULANCE</span>
                    <a href="tel:102" className="text-blue-600 hover:underline">102</a> / 
                    <a href="tel:108" className="text-blue-600 hover:underline">108</a>
                  </li>
                  <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <span className="text-lg font-medium">WOMEN</span>
                    <a href="tel:181" className="text-blue-600 hover:underline">181</a>
                  </li>
                  <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <span className="text-lg font-medium">POLICE</span>
                    <a href="tel:100" className="text-blue-600 hover:underline">100</a>
                  </li>
                  <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <span className="text-lg font-medium">BBMP</span>
                    <a href="tel:08022660000" className="text-blue-600 hover:underline">080-22660000</a>
                  </li>
                  <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <span className="text-lg font-medium">LABOUR</span>
                    <a href="tel:155214" className="text-blue-600 hover:underline">155214</a>
                  </li>
                  <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <span className="text-lg font-medium">BESCOM</span>
                    <a href="tel:1912" className="text-blue-600 hover:underline">1912</a>
                  </li>
                  <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <span className="text-lg font-medium">BWSSB</span>
                    <a href="tel:1916" className="text-blue-600 hover:underline">1916</a>
                  </li>
                  <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <span className="text-lg font-medium">SOCIAL WELFARE DEPARTMENT</span>
                    <a href="tel:155214" className="text-blue-600 hover:underline">155214</a>
                  </li>
                  <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <span className="text-lg font-medium">MGNREGA</span>
                    <a href="tel:18004258666" className="text-blue-600 hover:underline">18004258666</a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      );
    };

export default HelpLine;
