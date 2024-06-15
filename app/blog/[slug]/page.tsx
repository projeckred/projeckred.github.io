export default function Page({ params }: { params: { slug: string } }) {
	// get contents base on route slug

	return <div className="p-[200px] bg-slate-500">My Post: {params.slug}</div>;
}
