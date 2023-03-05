"use client";

//import styled components
import {
  GoToWebsiteLink,
  GoToWebsiteContainer,
} from "@/styles/studio/StudioNavbar.styled";

//import icons
import { ArrowUturnLeft } from "@/public/assets/icons";

export default function StudioNavbar(props: any) {
  return (
    <div>
      <GoToWebsiteContainer>
        <GoToWebsiteLink href={"/"}>
          <ArrowUturnLeft />
          Go To Website
        </GoToWebsiteLink>
      </GoToWebsiteContainer>
      {props.renderDefault(props)}
    </div>
  );
}
