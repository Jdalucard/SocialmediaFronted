import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://socialmedia-2vgd.onrender.com/assets/${image}`}
      />
      {/* actualizado rutas  */}
    </Box>
  );
};

export default UserImage;
