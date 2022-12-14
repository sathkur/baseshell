const Footer = () => {

    let privacy_links = [
        {label: "© 2022 Website, Inc.", link: ""},
        {label: "Privacy", link: "/privacy"},
        {label: "Terms", link: "/terms"},
        {label: "Sitemap", link: "/sitemap"},
        {label: "Company Details", link: "company-details"},
    ];

    //add a '.' dot between links
    privacy_links = [].concat(...privacy_links.map(n => [n, {label: "·", class: "px-2"}])).slice(0, -1);

    return (
        <div className="border-t-2 border-gray-500">
            <div className="container m-auto px-6">
                <footer className="py-7 ">
                    <div className="flex flex-col-reverse items-start md:flex-row md:items-center md:justify-between ">
                        <div className="flex">
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