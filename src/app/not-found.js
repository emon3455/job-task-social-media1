import notFoundImage from "@/assets/404.jpg";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center">
      <div className="">
        <Image
          src={notFoundImage}
          alt="not-found"
          Width={300}
          height={400}
          placeholder="blur"
          className="w-ful p-2 mx-auto rounded-md"
        />
        <Link href="/" className="mt-5 mb-2 inline-block">
          <button className="px-2 py-1 rounded-lg  bg-yellow-400">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;