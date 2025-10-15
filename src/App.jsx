// import React, { useState } from "react"
// import axios from "axios"

// const App = () => {
//   const [image, setImage] = useState("")
//   const [loading, setLoading] = useState(false)

//   const uploadImage = async (e) => {
//     const file = e.target.files[0]
//     if (!file) return

//     setLoading(true)

//     const formData = new FormData()
//     formData.append("file", file)
//     formData.append("upload_preset", "preset-name") // your preset name
//     formData.append("api_key", import.meta.env.VITE_API_KEY)

//     try {
//       console.log(import.meta.env.VITE_ANALYTICS_KEY)

//       const response = await axios.post(
//         "https://api.cloudinary.com/v1_1/dzoy3xghm/image/upload",
//         formData
//       )

//       setImage(response.data.secure_url) // get uploaded image URL
//     } catch (err) {
//       console.error("Upload failed:", err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className='p-4'>
//       <input type='file' onChange={uploadImage} />
//       {loading && <p>Uploading...</p>}
//       {image && (
//         <div className='mt-3'>
//           <img src={image} alt='Uploaded' width='200' />
//           <p>URL: {image}</p>
//         </div>
//       )}
//     </div>
//   )
// }

// export default App

import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default App;
