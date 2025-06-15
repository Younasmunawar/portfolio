// import React, { useState } from 'react';
// import { Modal, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';

// const Certificate = (props) => {
//   const ImgSertif = props.ImgSertif;
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <div className="">
//         <img
//           src={ImgSertif}
//           alt="Img Sertif Eki"
//           id="ImgSertif"
//           onClick={handleOpen}
//           className="cursor-pointer "
//         />
        
//       </div>
//       <Modal open={open} onClose={handleClose}>
//         <div className="modal fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-75">
//           <IconButton
//             aria-label="close"
//             onClick={handleClose}
//             sx={{
//               position: 'absolute',
//               top: '0.5rem',
//               right: '0.5rem',
//               color: 'white'
//             }}
//           >
//             <CloseIcon sx={{ fontSize: 52 , position: "relative"}} />
//           </IconButton>
//           <img src={ImgSertif} alt="Younas Certification" className="max-w-full max-h-full " />
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Certificate;
import React, { useState } from 'react';
import { Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Certificate = ({ imgUrl, title }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="bg-[#1e1e1e] text-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col items-center">
        <img
          src={imgUrl}
          alt={title}
          className="rounded w-full h-48 object-cover cursor-pointer"
          onClick={handleOpen}
        />
        <p className="mt-2 font-semibold text-center">{title}</p>
      </div>

      <Modal open={open} onClose={handleClose}>
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 p-4">
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              color: 'white'
            }}
          >
            <CloseIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <img
            src={imgUrl}
            alt={title}
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Certificate;
