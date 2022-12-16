import { Button } from "@mui/material";
import "./Banner.css";
export interface BannerProps {
  image: string;
  onClick: () => void;
}
export const Banner = (props: any) => {
  return (
    <div className="banner_container">
      <img src={props.image} alt="banner" />
    </div>
  );
};
