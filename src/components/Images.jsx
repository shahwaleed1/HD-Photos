// import React, { useEffect, useState } from "react";
// import "./container.css";
// import axios from "axios";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import Loading from "./Loading";
// import { Link } from "react-router-dom";

// const ApiUrl =(import.meta.env.VITE_API)
// const key = (import.meta.env.VITE_SECRET_KEY)
// const clientID = `?client_id=${key}`;
// const searchUrl = "https://api.unsplash.com/search/photos";

// const Images = () => {
//   const [loading, setLoading] = useState(false);
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(0);
//   const [query, setQuery] = useState("");
//   const [error, setError] = useState(null);

//   const fatch = async () => {
//     setLoading(true);
//     let url;
//     const urlPage = `&page=${page}`;
//     const urlQuery = `&query=${query}`;
//     if (query) {
//       url = `${searchUrl}/${clientID}/${urlPage}/${urlQuery}`;
//     } else {
//       url = `${ApiUrl}/${clientID}${urlPage}`;
//     }
//     try {
//       const respon = await axios.get(url);
//       setImages((oldimages) => {
//         if (query && page === 1) {
//           return respon;
//         } else if (query) {
//           return [...oldimages, ...respon.data];
//         } else {
//           return [...oldimages, ...respon.data];
//         }
//       });
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//     }
//   };

//   console.log(images);

//   useEffect(() => {
//     fatch();
//   }, [page]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         !loading &&
//         window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
//       ) {
//         setPage((oldPage) => oldPage + 1); // Increment the page
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup function to remove the event listener
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [loading]); // Add `loading` as a dependency

//   return (
//     <div className="custom-container">
//       {loading && <Loading />}
//       {error && <p className="text-center text-red-500">⚠️Error: {error}</p>}
//       <ResponsiveMasonry columnsCountBreakPoints={{ 400: 1, 750: 2, 900: 3 }}>
//         <Masonry gutter="15px">
//           {images.map((imge, i) => (
//             <div key={i}>
//               <Link to={`/image/${imge.id}`}>
//                 <img
//                   src={imge.urls.small}
//                   alt={imge.alt_description}
//                   style={{ width: "100%", display: "block" }}
//                   className="cursor-pointer hover:shadow-lg rounded-sm hover:scale-105 transition-transform duration-300"
//                 />
//               </Link>
//             </div>
//           ))}
//         </Masonry>
//       </ResponsiveMasonry>
//     </div>
//   );
// };
// export default Images;


// import React, { useEffect, useState } from "react";
// import "./container.css";
// import axios from "axios";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import Loading from "./Loading";
// import { Link } from "react-router-dom";
// import SearchBox from "./Searchbox";


// const ApiUrl = import.meta.env.VITE_API;
// const key = import.meta.env.VITE_SECRET_KEY;
// const clientID = `?client_id=${key}`;
// const searchUrl = "https://api.unsplash.com/search/photos";

// const Images = () => {
//   const [loading, setLoading] = useState(false);
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [query, setQuery] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [error, setError] = useState(null);

//   const fetchImages = async () => {
//     setLoading(true);
//     let url;
//     const urlPage = `&page=${page}`;
//     const urlQuery = query ? `&query=${query}` : "";

//     if (query) {
//       url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
//     } else {
//       url = `${ApiUrl}${clientID}${urlPage}`;
//     }

//     try {
//       const response = await axios.get(url);
//       setImages((oldImages) => {
//         if (query && page === 1) {
//           return response.data.results;
//         } else if (query) {
//           return [...oldImages, ...response.data.results];
//         } else {
//           return [...oldImages, ...response.data];
//         }
//       });
//     } catch (err) {
//       console.error(err);
//       setError("Failed to fetch images");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchImages();
//   }, [page, query]);

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     setQuery(searchTerm);
//     setPage(1);
//     setImages([]);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         !loading &&
//         window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
//       ) {
//         setPage((oldPage) => oldPage + 1);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [loading]);

//   return (
//     <div className="custom-container">
//       <form onSubmit={handleSearchSubmit} className="search-form">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search images..."
//           className="search-input"
//         />
//         <button type="submit" className="search-button">Search</button>
//       </form>

//       <SearchBox /> 

//       {loading && <Loading />}
//       {error && <p className="text-center text-red-500">⚠️ Error: {error}</p>}

//       <ResponsiveMasonry columnsCountBreakPoints={{ 400: 1, 750: 2, 900: 3 }}>
//         <Masonry gutter="15px">
//           {images.map((image, i) => (
//             <div key={i}>
//               <Link to={`/image/${image.id}`}>
//                 <img
//                   src={image.urls.small}
//                   alt={image.alt_description}
//                   style={{ width: "100%", display: "block" }}
//                   className="cursor-pointer hover:shadow-lg rounded-sm hover:scale-105 transition-transform duration-300"
//                 />
//               </Link>
//             </div>
//           ))}
//         </Masonry>
//       </ResponsiveMasonry>
//     </div>
//   );
// };

// export default Images;




import React, { useEffect, useState } from "react";
import "./container.css";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import Searchbox from "./Searchbox";

const ApiUrl = import.meta.env.VITE_API;
const key = import.meta.env.VITE_SECRET_KEY;
const clientID = `?client_id=${key}`;
const searchUrl = "https://api.unsplash.com/search/photos";




const Images = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = query ? `&query=${query}` : "";

    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${ApiUrl}${clientID}${urlPage}`;
    }

    try {
      const response = await axios.get(url);
      setImages((oldImages) => {
        if (query && page === 1) {
          return response.data.results;
        } else if (query) {
          return [...oldImages, ...response.data.results];
        } else {
          return [...oldImages, ...response.data];
        }
      });
    } catch (err) {
      console.error(err);
      setError("Failed to fetch images");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page, query]);

  const handleSearchSubmit = (searchTerm) => {
    setQuery(searchTerm);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => oldPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="custom-container">
      <div className="my-6">
        <Searchbox onSearch={handleSearchSubmit} />
      </div>

      {loading && <Loading />}
      {error && <p className="text-center text-red-500">⚠️ Error: {error}</p>}

      <ResponsiveMasonry columnsCountBreakPoints={{ 400: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="15px">
          {images.map((image, i) => (
            <div key={i}>
              <Link to={`/image/${image.id}`}>
                <img
                  src={image.urls.small}
                  alt={image.alt_description}
                  style={{ width: "100%", display: "block" }}
                  className="cursor-pointer hover:shadow-lg rounded-sm hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Images;
