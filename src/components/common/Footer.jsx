import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const lastUpdatedDate = new Date().toLocaleDateString();
    setLastUpdated(lastUpdatedDate);
  }, []);

  return (
    <footer className="bg-gray-700 text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">
          Website Content Managed by{' '}
          <strong>
            <a href="https://www.nic.in/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
              National Informatics Centre
            </a>
            ,{' '}
            <a href="https://www.meity.gov.in/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
              Ministry of Electronics and Information Technology
            </a>
            ,{' '}
            <a
              href="https://www.india.gov.in/"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              title="GoI, External Link that opens in a new window"
            >
              <strong>Government of India</strong>
            </a>
          </strong>
        </p>
        <p className="mb-2">
          Designed, Developed and Hosted by ©{' '}
          <a
            href="https://www.nic.in/"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            title="NIC, External Link that opens in a new window"
          >
            <strong>National Informatics Centre</strong>
          </a>{' '}
          <strong>(NIC) Bilaspur, (C.G.)</strong>
        </p>
        <p className="mb-2">
          Last Updated: <span id="lastupdated">{lastUpdated}</span>
        </p>
        <div className="mt-2">
          <a
            href="http://cmf.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            title="External link that opens in new tab, cmf"
          >
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
