'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function LogoCloud() {
  const logos = [
    '/clients/airflow.png',
    '/clients/azure.png',
    '/clients/databricks.png',
    '/clients/dbt.png',
    '/clients/fivetran.png',
    '/clients/Looker.png',
    '/clients/prefect.png',
    '/clients/query.png',
    '/clients/redshift.png',
    '/clients/snowflake.png',
    '/clients/tableau.png',
  ];

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-medium mb-4">
          <span className="text-blue-400 font-semibold">Technology </span>Partners
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12">
          We leverage industry-leading tools and platforms to deliver exceptional results.
        </p>

        {/* Scrolling Logos */}
        <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-white before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-white after:to-transparent after:content-['']">
          <motion.div
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: '-50%' }}
            className="flex flex-none gap-8 sm:gap-16 pr-8 sm:pr-16"
          >
            {/* Duplicate the logos */}
            {[...new Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                {logos.map((src, i) => (
                  <Image
                    key={`${src}-${i}`}
                    src={src}
                    alt={`Logo ${i + 1}`}
                    width={100} // Adjusted for smaller screens
                    height={30}
                    className="h-6 sm:h-8 w-auto flex-none"
                  />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
