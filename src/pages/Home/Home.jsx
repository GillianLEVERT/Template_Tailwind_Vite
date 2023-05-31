import React from 'react';
//import '../../index.css'
//import Cookies from 'js-cookie';

export const Home = () => {
  return (
    <div className="text-center mx-auto">
      {/* exemple de tailwind, retrouver la doc sur  https://tailwindcss.com/docs/configuration  */}
      <h1 className="text-4xl mt-2">Boiler plate Tailwind</h1>
      <h2 className="underline p-2">Avec cookies & Routing</h2>
      <p className="my-10 p-20">
        N'oubliez pas de l'adapter, Les Cookies sont préinstallés mais pas
        configuré, enlever la ligne de commentaire sur le fichier Home et/ou
        l'importer dans vos autres composants
      </p>
{/* 
      <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">

          SUBMIT
      </button> */}

    </div>
  );
};