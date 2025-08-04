import { APP_NAME } from "@/lib/constants";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t py-4">
      <div className="wrapper text-center">
        <p>
          &copy; {currentYear} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
