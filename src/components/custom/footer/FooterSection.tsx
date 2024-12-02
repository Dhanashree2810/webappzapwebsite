const FooterSection = () => {
    const fullYear = new Date().getFullYear();

    return (
        <footer className="bg-[#00001d] text-white py-5 border-t border-t-sky-500 border-dotted">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-start lg:justify-between">
                    <div className="w-full text-left">
                        <p className="text-xs font-medium px-4 lg:px-28">
                            Copyright &copy; {fullYear}. All rights reserved. @WebAppZap
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
