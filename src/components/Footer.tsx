const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Tanay Vakharia. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
