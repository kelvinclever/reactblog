import React from 'react';
const Evolving = () => {
  const blogs = [
    {
      title: 'The Art of Storytelling: Captivating Your Audience',
      summary: 'Learn how storytelling can enhance your content and captivate your audience. Discover techniques to craft compelling narratives that resonate with your readers.',
      to: '/storytime'
    },
    {
      title: 'Mastering SEO: Boosting Your Content\'s Visibility',
      summary: 'Uncover the secrets of Search Engine Optimization (SEO) and understand how to optimize your content to rank higher in search engine results. Harness the power of keywords, meta tags, and other techniques to boost your online visibility.',
      to: '/boostingcontent'
    },
    {
      title: 'Visual Appeal: The Impact of Images and Videos',
      summary: 'Explore the importance of visual content in capturing attention and conveying messages effectively. Discover how to leverage images, videos, and infographics to enhance your content and make it more engaging.',
      to: '/visualappeal'
    },
    {
      title: 'The Power of Social Media: Amplifying Your Reach',
      summary: 'Understand the influence of social media platforms in expanding your content\'s reach. Learn strategies to leverage social media channels effectively, engage with your audience, and build a strong online presence.',
      to: '/socialmedia'
    },
    {
      title: 'Engaging Your Readers: Building a Community',
      summary: 'Building a loyal readership is crucial for sustained online success. Explore techniques to engage and interact with your audience, foster a sense of community, and encourage active participation on your platforms.',
      to: '/engagingreaders'
    },
    {
      title: 'Evolving Trends: Adapting Your Content Strategy',
      summary: 'The digital landscape is constantly evolving. Stay ahead of the curve by understanding emerging trends and adapting your content strategy accordingly. Explore topics such as voice search, AI-generated content, and personalized experiences.',
      to: '/evolving'
    },
  ];

  return (

    <div className="leftside">
    
      <h1>Summary</h1>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <h2>{blog.title}</h2>
            <p>{blog.summary}</p>
            <a href={blog.to}className='readmore'>Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Evolving;
