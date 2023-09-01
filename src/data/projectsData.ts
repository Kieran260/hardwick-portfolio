export const beatsbinData = {
    id: 'beatsbin',
    name: 'BeatsBin',
    subTitle: 'Cloud File Storage & Sharing SaaS Platform',
    technologies: [
      { label: 'Language', value: 'TypeScript' },
      { label: 'Front End', value: 'React, Next.js, Tailwind' },
      { label: 'Data & Storage', value: 'PostgreSQL, AWS S3' },
    ],
    details: [
        { label: 'Type', value: 'Team Project' },
        { label: 'Role', value: 'Technical Lead' },
        { label: 'Start Date', value: '4th July 2023' },
        { label: 'Duration', value: '3 Months' },
      ],    
    description: {
      about: 'BeatsBin is a cloud-based SaaS tailored uniquely for music producers, offering comprehensive cloud storage and sharing with specialized track metadata including BPM, key, and tags for efficient track filtering. Bins can hold a collection of tracks. Each track is an object that can contain associated files within it.',
      features: [
        'Secure login and customizable account settings.',
        'Create and manage tracks, upload and download files, store all associated files (e.g. cover art) inside each track.',
        'Create, manage, and share bins with customizable metadata and privacy settings.',
        'Generate unique links for external bin access and downloads.',
      ],
      report: [
        'During a summer break at university, I collaborated with two fellow students covering the entire development lifecycle within an Agile framework. As the project lead, I oversaw the phases of design, implementation, testing and team management.',
        'This experience enriched my skills in web application development using React and TypeScript. Additionally, I deepened my understanding of system design, relational databases, and the REST API architecture.',
        'Our most significant challenge was facilitating large file uploads directly to the S3 bucket, bypassing our server. We overcame this by generating a signed URL on our server, enabling direct client-to-S3 uploads.',
        'We were successful in delivering all core features we had planned within the timeframe. Most notably, we streamlined our process by using custom SQL functions to bundle multiple queries into one API request and by crafting reusable components for consistent application development.',
      ],
      images: {
        main: 'path/to/beatsbinTracks/image',
        upload: 'path/to/beatsbinUpload/image',
        filter: 'path/to/beatsbinFilter/image',
      },
      additionalImages: [
        {
          src: 'path/to/beatsbinUpload/image',
          caption: 'Easily upload and input metadata.',
        },
        {
          src: 'path/to/beatsbinFilter/image',
          caption: 'Filter tracks to find exactly what you need.',
        },
      ],
    },
  };
  