/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

const NewsItem = ({ newsData }) => {
  // console.log(newsData.articles)

  const demoContent = {
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/2024-06-22t021835z-695548473-mt1usatoday23597025-rtrmadp-3-nhl-stanley-cup-final-florida-panthers-at-edmonton-oilers.JPG?c=16x9&q=w_800,c_fill',
    title: "Canadian men's soccer team 'deeply disturbed' after player targeted with online racist abuse | CBC Sports",
    content: "Ty Cobb, an ex-White House attorney under former President Trump, discusses a New York Times report about Judge Aileen Cannon, who is overseeing the criminal prosecutor of former President Donald Trump over his handling of classified documents. The Times repo…dfjfklllllllllIn a plea filed by a NEET-UG 2024 candidate afflicted with hyperhidrosis, the Supreme Court today directed the National In a plea filed by a NEET-UG 2024 candidate afflicted with hyperhidrosis, the Supreme Court today directed the National Testing Agency to take a decision on his request to appear in the re-test scheduled for June 23 and instructed that the decision be informed to the petitioner-candidate by 4 PM today itself.The vacation bench of Justices In a plea filed by a NEET-UG 2024 candidate afflicted with hyperhidrosis, the Supreme Court today directed the National Testing Agency to take a decision on his request to appear in the re-test scheduled for June 23 and instructed that the decision be informed to the petitioner-candidate by 4 PM today itself.The vacation bench of Justices Vikram Nath and SVN Bhatti, while issuing notice... Vikram Nath and SVN Bhatti, while issuing notice... Testing Agency to take a decision on his request to appear in the re-test scheduled for June 23 and instructed that the decision be informed to the petitioner-candidate by 4 PM today itself.The vacation bench of Justices Vikram Nath and SVN Bhatti, while issuing notice...",
  }

  return (
    <div className="text-gray-600 p-4">
      <div className="max-w-7xl px-5 py-12 mx-auto">

        <div className="flex flex-wrap -m-4">


          {newsData?.articles?.slice(0, 6).map((item, index) => (

            // src="https://dummyimage.com/720x400"
            <div key={index} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={item.urlToImage || demoContent.image} alt="blog" />
                <Link to={`/news/${item.source.name}`}>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">SPORTS</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.title || demoContent.title}</h1>
                    <p className="leading-relaxed mb-3">{item.content || demoContent.content}</p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Read More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>113.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>14
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default NewsItem