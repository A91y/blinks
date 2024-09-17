import { Link } from "@nextui-org/link";

export default function Footer() {
  return (
    <p className="m-4 text-sm text-muted-foreground text-center">
      Built by <Link href="https://ayushagr.me" className="text-[#f9ff55]"> Ayush Agrawal </Link> • Code on{" "}
      <Link href="https://github.com/A91y/blinks" className="text-[#f9ff55]">GitHub</Link> •{" "}
      <Link className="text-white" href="mailto:hello@ayushagr.me">
        {" "}
        Contact by ✉️
      </Link>
    </p>
  );
}
