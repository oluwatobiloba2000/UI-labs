import { Helmet } from 'react-helmet';

const dynamicHeader = (props) => {
    const description = 'UI Labs are collections of prebuilt components for chakra UI';

    // create a function that capitalizes the first letter of the string
    const capitalize = (string) =>  string.charAt(0).toUpperCase() + string.slice(1);

    return (
        <Helmet>
            <title>{capitalize(props.title)} | UI Labs</title>

            <meta name="title" content={capitalize(props.title) || `UI Labs`} />
            <meta name="description" content={props.description || description} />
            <meta name="keywords" content={props.keywords || ''} />

            <meta property="og:title" content={capitalize(props.title) || `UI Labs`} />
            <meta property="twitter:title" content={capitalize(props.title) || `UI Labs`} />
            <meta
                property="og:description"
                content={props.description || description}
            />
            <meta
                property="twitter:description"
                content={props.description || description}
            />
            <meta
                property="og:image"
                content={
                    `${process.env.siteUrl}/thumbnails/` + (props.image || "landing.png")
                }
            />
            <meta
                property="twitter:image"
                content={
                    `${process.env.siteUrl}/thumbnails/` + (props.image || "landing.png")
                }
            />
        </Helmet>
    )
}



export default dynamicHeader;