const Footer = () => {

    let privacy_links = [
        {label: "Privacy", link: "/privacy"},
        {label: "Terms", link: "/terms"},
        {label: "Sitemap", link: "/sitemap"},
        {label: "Company Details", link: "company-details"},
    ];

    //add a '.' dot between links
    privacy_links = [].concat(...privacy_links.map(n => [n, {label: "·", class: "hidden md:block px-2"}])).slice(0, -1);

    return (
        <div className="border-t-2 border-gray-500">
            <div className="container m-auto px-6">
                <footer className="py-7 ">
                    <div className="flex flex-col-reverse items-start md:flex-row md:items-center md:justify-between ">
                        <div className="font-bold"><span>© 2023 Website, Inc.</span></div>
                        <div className="flex flex-col md:flex-row">
                            {privacy_links.map((link, i) => {
                                return (
                                    <span className={"font-medium " + ((link.class) ? link.class: "")} key={i}>
                                        {(link.link) ? (<a className="hover:underline" href={link.link}>{link.label}</a>) : link.label}
                                    </span>
                                )
                            })}
                        </div>
                        <div className="flex">
                            <div>F</div>
                            <div>T</div>
                            <div>I</div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;