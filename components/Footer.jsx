import Socials from "./Socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4" iconsStyles="text-primary text-[20px]" />
          <div className="text-muted-foreground">
            Copyright &copy; {currentYear} Vincent Song. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;