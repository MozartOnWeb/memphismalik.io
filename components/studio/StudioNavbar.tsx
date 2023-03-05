import Link from "next/link";

//import icons
import { ArrowUturnLeft } from "@/public/assets/icons";

export default function StudioNavbar(props: any) {
  return (
    <div>
      <div>
        <Link href={"/"}>
          <ArrowUturnLeft />
          Go To Website
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}
