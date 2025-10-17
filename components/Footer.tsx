import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black py-5 flex items-center justify-center border-t border-muted">
      <div>
        <div className="container">
          <p className="text-gray-200 font-light text-sm  ">
            Copyright @ 2025{" "}
            <Link
              href={"/"}
              className="text-primary font-semibold text-lg capitalize hover:underline"
            >
              e-store
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
