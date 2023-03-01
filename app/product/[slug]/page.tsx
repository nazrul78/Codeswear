
const Post = (req: any) => {
    console.log(req);
    const slug = req.params.slug;
    console.log(slug);
    //const router = useRouter()
    // const { slug } = router.query

    return <p>The slug is: {slug}</p>
}

export default Post