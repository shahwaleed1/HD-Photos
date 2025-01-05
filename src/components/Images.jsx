import React, { useEffect, useState } from "react";
import "./container.css";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Images = () => {
  const [images, setImages] = useState([]);
  const [img, setImg] = useState({ img: "", i: 0 });

  const Viewimage = (img, i) => {
    setImg({ img, i });
    console.log(img);
  };

  const fatch = async () => {
    try {
      const respon = await axios.get(
        "https://api.unsplash.com/photos/?client_id=JFuV6cYjEWcpRcj-lw_89K3nupi_VdngQdiHtWXDouk"
      );
      setImages(respon.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fatch();
  }, []);

  return (
    <div className="custom-container">
      <ResponsiveMasonry columnsCountBreakPoints={{ 400: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="15px">
          {images.map((imge, i) => (
            <img
              src={imge.urls.small}
              alt={imge.alt_description}
              key={i}
              style={{ width: "100%", display: "block" }}
              className="cursor-pointer hover:shadow-lg rounded-sm hover:scale-105 transition-transform duration-300"
              onClick={() => {
                Viewimage(img, i);
              }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};
export default Images;
