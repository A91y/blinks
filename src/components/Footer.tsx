import { Link } from "@nextui-org/link";

export default function Footer() {
  return (
    <p className="mb-8 text-sm text-muted-foreground text-center pt-6 md:pt-2">
      Built by <Link href="https://ayushagr.me"> Ayush Agrawal </Link> • Code on{" "}
      <Link href="https://github.com/A91y/blinks">GitHub</Link> •{" "}
      <Link className="text-white" href="mailto:ayush@ayushagr.me">
        {" "}
        Contact by ✉️
      </Link>
    </p>
  );
}
