import React from 'react'
import "./style.scss"

const HomeBanner = () => {
  return (
    <div className="heroBanner">
        <div className="wrapper">
            <div className="heroBannerContent">
                <span className="title">Welcome</span>
                <span className="subTitle">Millions of movies, TV shows and people 
                 to discover. 
                 Explore now.</span>
                 <div className="searchInput">
                    <input 
                    type="text"
                    placeholder='search for a movie or tv show...'/>
                    <button>Search</button>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBanner