import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import './container.css'

const Image = () => {
  const [imagedata, setImagedata] = useState(null);
  const { imageId } = useParams();

  useEffect(() => {
    if (imageId) {
      fetchImageById(imageId);
    }
  }, [imageId]);

  const fetchImageById = async (imageId) => {
    const ApiUrl = `https://api.unsplash.com/photos/${imageId}`;
    const accessKey = (import.meta.env.VITE_SECRET_KEY)

    try {
      const response = await axios.get(ApiUrl, {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      });
      console.log("Image Data:", response.data);
      setImagedata(response.data); // Update state with image data
    } catch (error) {
      console.error("Failed to fetch photo:", error.message);
    }
  };

  return (
    <div className="custom-container flex items-center justify-center my-4">
      {imagedata ? (
        <div>
          <button
            className="px-4 py-2 bg-slate-600 shadow-lg text-white rounded-md float-end -translate-x-28 translate-y-5 hover:bg-slate-700 "
            onClick={async () => {
              try {
                const response = await fetch(imagedata.urls.full);
                const blob = await response.blob(); // Convert the image to a Blob
                const url = window.URL.createObjectURL(blob); // Create an Object URL
                const link = document.createElement("a");
                link.href = url;
                link.download = `image-${imagedata.id}.jpg`; // Set the default file name
                document.body.appendChild(link);
                link.click(); // Trigger the download
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url); // Clean up the Object URL
              } catch (error) {
                console.error("Failed to download image:", error);
              }
            }}
          >
            Download
          </button>
          <img
            src={imagedata.urls.full}
            alt={imagedata.alt_description || "Image"}
            width={600}
            style={{ cursor: "pointer" }}
            className="my-3 rounded-md shadow-md"
            onClick={() => window.open(imagedata.links.html, "_blank")} // Open Unsplash image link
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Image;
